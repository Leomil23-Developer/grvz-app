import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, RefreshControl, Platform, StatusBar, Alert, Modal, Pressable } from "react-native";
// Use require + explicit type for expo-clipboard to avoid "Cannot find module" TypeScript error when types are missing
const Clipboard = require('expo-clipboard') as {
  setStringAsync(value: string): Promise<void>;
  getStringAsync(): Promise<string>;
};
import { MaterialIcons } from '@expo/vector-icons';
import { Camera as CameraModule, CameraView } from 'expo-camera';
import GradientBackground from "../../components/background"; 
import { API_URL } from '../config';


export default function Home({ user, onLogout, onOpenProfile }: { user: any; onLogout: () => void; onOpenProfile?: () => void }) {
  const avatarSource = user?.avatar ? { uri: user.avatar } : require('../../assets/GRVZLogo.png');
  const topOffset = (Platform.OS === 'android' ? (StatusBar.currentHeight || 24) : 12) + 8;
  // Estimated header height (title + padding). Used to offset the ScrollView so it doesn't overlap the header.
  const HEADER_HEIGHT = 56;
  // Extra gap between header and main content
  const HEADER_GAP = 30;  // API base URL (use LAN IP for device/emulator)

  // Silent helper to fetch total points for current account (returns number or null on error)
  const getPoints = async (): Promise<number | null> => {
    if (!user?.id) return null;
    try {
      const res = await fetch(`${API_URL}/api/accounts/${user.id}/points`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch points');
      return data.points ?? 0;
    } catch (e) {
      console.error('getPoints error', e);
      return null;
    }
  };

  // Fetch and display points (user action)
  const fetchPoints = async () => {
    const pts = await getPoints();
    if (pts === null) {
      Alert.alert('Error', 'Unable to load points');
      return;
    }
    showPointsModal(pts, 'Total points');
  };  

  // Events state & fetch
  const [events, setEvents] = useState<any[]>([]);
  const [eventsLoaded, setEventsLoaded] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  // Helper to handle event taps and block scanning for events older than 1 day
  const handleEventPress = (ev: any) => {
    const evDate = ev?.event_date ? new Date(ev.event_date).getTime() : null;
    const cutoff = Date.now() - (24 * 60 * 60 * 1000);
    if (evDate && evDate < cutoff) {
      Alert.alert('Event closed', 'Attendance closed for this event (more than 1 day since event date).');
      return;
    }
    setSelectedEvent(ev);
    openScanner();
  }; 

  // Points modal state
  const [pointsModalVisible, setPointsModalVisible] = useState(false);
  const [modalPoints, setModalPoints] = useState<number | null>(null);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const showPointsModal = (points: number | null, message?: string) => {
    setModalPoints(points);
    setModalMessage(message ?? null);
    setPointsModalVisible(true);
  };
  const hidePointsModal = () => {
    setPointsModalVisible(false);
    setModalPoints(null);
    setModalMessage(null);
  };

  // My QR modal state
  const [myQrVisible, setMyQrVisible] = useState(false);
  const [myQrUrl, setMyQrUrl] = useState<string | null>(null);
  const [myQrPayload, setMyQrPayload] = useState<any | null>(null);

  const fetchMemberAndShowQr = async () => {
    if (!user?.id) { Alert.alert('Not logged in', 'Please login to view your QR'); return; }
    try {
      const res = await fetch(`${API_URL}/api/members/account/${user.id}/qr`, { headers: { 'X-User-Id': user.id } });
      const data = await res.json();
      if (!res.ok) {
        Alert.alert('No member', data.error || 'No member record found for this account');
        return;
      }

      setMyQrPayload(data.payload);
      setMyQrUrl(`data:image/png;base64,${data.pngBase64}`);
      setMyQrVisible(true);
    } catch (e) {
      console.error('fetchMemberAndShowQr error', e);
      Alert.alert('Error', 'Unable to load member QR');
    }
  };

  const copyQrPayload = async () => {
    if (!myQrPayload) return;
    try {
      await Clipboard.setStringAsync(JSON.stringify(myQrPayload));
      Alert.alert('Copied', 'Member data copied to clipboard');
    } catch (e) {
      console.error('clipboard error', e);
      Alert.alert('Error', 'Unable to copy data');
    }
  };
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_URL}/api/events`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch events');
      setEvents(data);
      setEventsLoaded(true);
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Unable to load events');
    }
  };

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    // Check whether current user is admin
    (async () => {
      if (!user?.id) { setIsAdmin(false); return; }
      try {
        const r = await fetch(`${API_URL}/api/accounts/${user.id}/isAdmin`);
        const j = await r.json();
        setIsAdmin(Boolean(j.isAdmin));
      } catch (e) {
        console.error('isAdmin fetch error', e);
        setIsAdmin(false);
      }
    })();
  }, [user?.id]);

  // Pull-to-refresh state
  const [refreshing, setRefreshing] = useState(false);

  const refreshAll = async () => {
    setRefreshing(true);
    try {
      await Promise.all([
        fetchEvents(),
        (async () => { await getPoints(); })(),
      ]);
    } finally {
      setRefreshing(false);
    }
  };

  // QR Scanner state (using expo-camera)
  const [scannerVisible, setScannerVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await CameraModule.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      } catch (err) {
        setHasPermission(false);
      }
    })();
  }, []);

  const openScanner = async () => {
    // Only admins may open the scanner
    if (!isAdmin) {
      Alert.alert('Unauthorized', 'You must be an admin to open the scanner.');
      return;
    }

    if (hasPermission === false) {
      const { status } = await CameraModule.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert('Camera permission denied', 'Please enable camera permission in settings to scan QR codes.');
        return;
      }
    }

    setScanned(false);
    setScannerVisible(true);
  };

  const handleBarCodeScanned = async ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    setScannerVisible(false);

    if (!selectedEvent) {
      Alert.alert('No event selected', 'Tap an event to open scanner for that event.');
      return;
    }

    let parsed: any;
    try {
      parsed = JSON.parse(data);
    } catch (e) {
      Alert.alert('Invalid QR', 'QR data must be JSON with an "id" field.');
      setSelectedEvent(null);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/events/${selectedEvent.id}/attendance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-User-Id': user?.id ?? '' },
        body: JSON.stringify(parsed),
      });
      const resData = await res.json();

      if (res.status === 201) {
        showPointsModal(resData.points ?? null, 'Attendance recorded');
        await refreshAll();
      } else if (res.status === 409) {
        Alert.alert('Already recorded', resData.error || resData.detail || 'Attendance already exists.');
      } else {
        const msg = resData.error || resData.detail || 'Failed to record attendance';
        throw new Error(msg);
      }
    } catch (err: any) {
      console.error('attendance error', err);
      Alert.alert('Error', err.message || 'Failed to record attendance');
    } finally {
      setSelectedEvent(null);
    }
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>


          {/* Persistent header: hamburger + title */}
          <View style={[styles.headerBar, { top: topOffset }] }>
            <View style={{ width: 44 }} />
            <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]} numberOfLines={1} ellipsizeMode="tail">{"G R V Z Crew Portal"}</Text>
            <View style={{ width: 44 }} />
          </View>

          <View style={[styles.contentContainer, { paddingTop: HEADER_HEIGHT + topOffset + HEADER_GAP }]}>
            <View style={styles.fixedContent}>
              <Text style={styles.welcome}>{"Welcome back,"}</Text>
              {user?.fullname ? (
                <TouchableOpacity style={styles.usernameContainer} onPress={onOpenProfile} accessibilityRole="button" accessibilityLabel="Go to profile">
                  <Text style={styles.username}>{user.fullname}</Text>
                  <MaterialIcons name="chevron-right" size={32} color="rgba(255,255,255,0.9)" />
                </TouchableOpacity>
              ) : null}

              {events.length > 0 && <Text style={styles.listTitle}>List of Events</Text>}
            </View>

            {events.length > 0 ? (
              <ScrollView 
                style={styles.eventsScrollView} 
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshAll} />}
                showsVerticalScrollIndicator={true}
              >
                <View style={styles.eventsList}>
                  {events.map((ev: any) => (
              <TouchableOpacity style={styles.eventItem} key={ev.id} onPress={() => handleEventPress(ev)} accessibilityRole="button" accessibilityLabel={`Open scanner for ${ev.name}`}>
                    <View style={styles.eventRowLeft}>
                      <Text style={styles.eventTitle}>{ev.name}</Text>
                      <Text style={styles.eventMeta}>{ev.event_date ? new Date(ev.event_date).toLocaleDateString() : '—'}{ev.Chapters?.chapter_name ? ` • Hosted by ${ev.Chapters.chapter_name}` : ''}</Text>
                    </View>

                    <View style={styles.attendeeBadge}>
                      <Text style={styles.attendeeBadgeText}>{ev._count?.Attendance ?? 0}</Text>
                    </View>
                  </TouchableOpacity>
                  ))} 
                </View>
              </ScrollView>
            ) : eventsLoaded ? (
              <Text style={styles.sectionEmpty}>No events available.</Text>
            ) : null}
          </View> 

          {scannerVisible && (
            <View style={styles.scannerOverlay} pointerEvents="box-none">
              <CameraView
                style={StyleSheet.absoluteFillObject}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
              />

              <TouchableOpacity style={styles.scannerClose} onPress={() => setScannerVisible(false)} accessibilityRole="button" accessibilityLabel="Close scanner">
                <Text style={styles.toggleIcon}>{"✕"}</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Points modal */}
          <Modal visible={pointsModalVisible} transparent animationType="fade" onRequestClose={hidePointsModal}>
            <Pressable style={styles.modalOverlay} onPress={hidePointsModal}>
              <Pressable style={styles.modalCard} onPress={() => { /* prevent overlay close */ }}>
                <Text style={styles.modalTitle}>{modalMessage ?? 'Points'}</Text>
                <Text style={styles.modalPoints}>{modalPoints !== null ? String(modalPoints) : '—'}</Text>
                <TouchableOpacity style={styles.modalCloseButton} onPress={hidePointsModal} accessibilityRole="button">
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </Pressable>
            </Pressable>
          </Modal>

          {/* My QR modal */}
          <Modal visible={myQrVisible} transparent animationType="fade" onRequestClose={() => setMyQrVisible(false)}>
            <Pressable style={styles.modalOverlay} onPress={() => setMyQrVisible(false)}>
              <Pressable style={styles.modalCard} onPress={() => {}}>
                <Text style={styles.modalTitle}>My QR</Text>
                {myQrUrl ? (
                  <Image source={{ uri: myQrUrl }} style={styles.qrImage} />
                ) : (
                  <Text style={styles.sectionEmpty}>No QR available.</Text>
                )}

                <TouchableOpacity style={[styles.modalCloseButton, { marginTop: 12 }]} onPress={copyQrPayload} accessibilityRole="button">
                  <Text style={styles.modalCloseText}>Copy Data</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.modalCloseButton, { marginTop: 8 }]} onPress={() => setMyQrVisible(false)} accessibilityRole="button">
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </Pressable>
            </Pressable>
          </Modal>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 240,
    backgroundColor: "rgba(0,0,0,0.25)",
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  toggle: {
    alignSelf: "flex-end",
    marginRight: 8,
    marginTop: 6,
    backgroundColor: "rgba(255,255,255,0.06)",
    padding: 6,
    borderRadius: 20,
    zIndex: 1,
  },
  toggleIcon: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  fullname: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  actionRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 12,
  },
  actionItem: {
    alignItems: 'center',
    width: 80,
  },
  actionButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 12,
    marginTop: 6,
    textAlign: 'center',
  },

  /* New icon-only actions for main content */
  actionRowContent: {
    marginTop: 40,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 12,
  },
  actionItemLarge: {
    alignItems: 'center',
    width: 88,
    marginHorizontal: 5,
  },
  actionButtonLarge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLabelLarge: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
  },

  navButtons: {
    marginTop: 8,
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
  logout: {
    marginTop: 16,
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  activeNavButton: {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  headerBar: {
    position: "absolute",
    left: 12,
    right: 12,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    zIndex: 30,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "800",
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contentScroll: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  fixedContent: {
    paddingBottom: 16,
  },
  eventsScrollView: {
    flex: 1,
  },
  scannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  scannerUnavailable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  scannerUnavailableText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  scannerClose: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.12)',
    padding: 10,
    borderRadius: 20,
  },
  welcome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  username: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    opacity: 0.95,
  },
  listTitle: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 30,
  },
  eventsList: {
    marginTop: 1,
  },
  eventItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.03)',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eventRowLeft: {
    flex: 1,
    paddingRight: 12,
  },
  eventTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  eventMeta: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 12,
    marginTop: 6,
  },
  attendeeBadge: {
    minWidth: 40,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(6,182,212,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  attendeeBadgeText: {
    color: '#06b6d4',
    fontWeight: '700',
    fontSize: 14,
  },
  sectionEmpty: {
    color: 'rgba(255,255,255,0.75)',
    marginTop: 8,
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#042028',
    borderRadius: 12,
    paddingVertical: 22,
    paddingHorizontal: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 6,
  },
  modalTitle: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  modalPoints: {
    color: '#06b6d4',
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 14,
  },
  modalCloseButton: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  modalCloseText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  qrImage: {
    width: 220,
    height: 220,
    marginTop: 6,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
});
