import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput, ActivityIndicator, Alert, Pressable, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import GradientBackground from '../../components/background';
import { api, API_URL } from '../config';

export default function Profile({ user, onClose, onLogout }: { user: any; onClose?: () => void; onLogout?: () => void }) {
  const [activeTab, setActiveTab] = useState<'personal' | 'vehicle'>('personal');
  const [member, setMember] = useState<any>(null);
  const [memberLoading, setMemberLoading] = useState(false);
  const [memberError, setMemberError] = useState<string | null>(null);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [pointsLoading, setPointsLoading] = useState(false);
  const [myQrVisible, setMyQrVisible] = useState(false);
  const [myQrUrl, setMyQrUrl] = useState<string | null>(null);
  const insets = useSafeAreaInsets();
  const bottomInset = (insets?.bottom || (Platform.OS === 'ios' ? 34 : 20)) + 12;

  // Resolve a status string to a color for the status dot
  const resolveStatusColor = (s?: string | null) => {
    if (!s) return '#94a3b8'; // neutral gray
    const l = String(s).toLowerCase();
    if (l.includes('active')) return '#22c55e'; // green
    if (l.includes('suspend') || l.includes('pending')) return '#f59e0b'; // amber
    if (l.includes('inactive') || l.includes('disabled')) return '#ef4444'; // red
    return '#94a3b8';
  };

  // modal states
  const [accountModal, setAccountModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);

  // dropdown states
  const [memberTypeDropdown, setMemberTypeDropdown] = useState(false);
  const [bloodTypeDropdown, setBloodTypeDropdown] = useState(false);

  // form states
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [accountForm, setAccountForm] = useState({ 
    member_type: '', 
    first_name: '', 
    last_name: '', 
    middle_name: '', 
    nick_name: '', 
    birthday: '', 
    blood_type: '', 
    religion: '' 
  });
  const [contactForm, setContactForm] = useState({ email: '', contact_number: '', emergency_contact_no: '' });
  const [addressForm, setAddressForm] = useState({ address_line_1: '', street: '', city_municipality: '', province: '', location: '' });

  useEffect(() => {
    if (!user?.id) return;
    let mounted = true;
    const load = async () => {
      setMemberLoading(true);
      setMemberError(null);
      try {
        // Server exposes member record at /api/members/account/:accountId
        const path = `api/members/account/${user.id}`;
        console.log('🔍 Fetching member:', api(path));
        const res = await fetch(api(path));
        console.log('🔍 Member fetch status:', res.status);
        if (res.ok) {
          const data = await res.json();
          if (mounted) setMember(data);
          console.log('🔍 Member data:', data);
        } else {
          const text = await res.text().catch(() => null);
          const msg = `Member fetch failed: ${res.status} ${text ?? ''}`;
          console.warn(msg);
          if (mounted) setMemberError(msg);
        }
      } catch (e) {
        console.error('fetch member error', e);
        if (mounted) setMemberError(String(e));
      } finally {
        if (mounted) setMemberLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, [user?.id]);

  // Fetch total points
  useEffect(() => {
    if (!user?.id) return;
    let mounted = true;
    const loadPoints = async () => {
      setPointsLoading(true);
      try {
        const path = `api/attendance/total/${user.id}`;
        console.log('🎯 Fetching total points:', api(path));
        const res = await fetch(api(path));
        if (res.ok) {
          const data = await res.json();
          if (mounted) setTotalPoints(data.totalPoints || 0);
          console.log('🎯 Total points:', data.totalPoints);
        } else {
          console.warn('Failed to fetch points:', res.status);
        }
      } catch (e) {
        console.error('fetch points error', e);
      } finally {
        if (mounted) setPointsLoading(false);
      }
    };
    loadPoints();
    return () => { mounted = false; };
  }, [user?.id]);

  // Fetch and show QR code
  const fetchMemberAndShowQr = async () => {
    if (!user?.id) { 
      Alert.alert('Not logged in', 'Please login to view your QR'); 
      return; 
    }
    try {
      const res = await fetch(`${API_URL}/api/members/account/${user.id}/qr`, { 
        headers: { 'X-User-Id': user.id } 
      });
      const data = await res.json();
      if (!res.ok) {
        Alert.alert('No member', data.error || 'No member record found for this account');
        return;
      }
      setMyQrUrl(`data:image/png;base64,${data.pngBase64}`);
      setMyQrVisible(true);
    } catch (e) {
      console.error('fetchMemberAndShowQr error', e);
      Alert.alert('Error', 'Unable to load member QR');
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={onClose} accessibilityRole="button" accessibilityLabel="Back">
            <MaterialIcons name="chevron-left" size={26} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>My Profile</Text>
          <TouchableOpacity style={styles.headerLogout} onPress={onLogout} accessibilityRole="button">
            <MaterialIcons name="logout" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.profileRow}>
            <Image source={user?.avatar ? { uri: user.avatar } : require('../../assets/GRVZLogo.png')} style={styles.avatarLeft} />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{user?.fullname ?? user?.username ?? '—'}</Text>
              {user?.email ? <Text style={styles.email}>{user.email}</Text> : null}
              {((member?.status ?? user?.accntStatus ?? user?.status) || (member?.chapter ?? user?.Chapters?.[0]?.chapter_name)) ? (
                <View style={styles.statusRow}>
                  <View style={styles.statusLeft}>
                    <View style={[styles.statusDot, { backgroundColor: resolveStatusColor(member?.status ?? user?.accntStatus ?? user?.status) }]} />
                    <Text style={styles.statusText}>{member?.status ?? user?.accntStatus ?? user?.status}</Text>
                  </View>

                  {(member?.chapter ?? user?.Chapters?.[0]?.chapter_name) ? (
                    <Text style={styles.statusChapter}>| {member?.chapter ?? user?.Chapters?.[0]?.chapter_name}</Text>
                  ) : null}
                </View>
              ) : null} 
            </View>
          </View>

          {/* Total Points Display with QR Button */}
          <View style={styles.pointsRow}>
            <Text style={styles.pointsText}>
              Total Points : {pointsLoading ? '...' : totalPoints.toLocaleString()}
            </Text>
            <TouchableOpacity style={styles.qrButton} onPress={fetchMemberAndShowQr} accessibilityRole="button" accessibilityLabel="My QR">
              <MaterialIcons name="qr-code" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabBar}>
            <TouchableOpacity style={[styles.tabButton, activeTab === 'personal' && styles.tabActive]} onPress={() => setActiveTab('personal')} accessibilityRole="button">
              <Text style={[styles.tabText, activeTab === 'personal' && styles.tabTextActive]}>Personal Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tabButton, activeTab === 'vehicle' && styles.tabActive]} onPress={() => setActiveTab('vehicle')} accessibilityRole="button">
              <Text style={[styles.tabText, activeTab === 'vehicle' && styles.tabTextActive]}>Vehicle</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabContent}>
            {activeTab === 'personal' ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.vehicleSection}>
                  <Text style={styles.fieldLabel}>Member Type</Text>
                  <Text style={styles.fieldValue}>{member?.member_type ?? '—'}</Text>

                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Nick name</Text>
                      <Text style={styles.fieldValue}>{member?.nick_name ?? '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Religion</Text>
                      <Text style={styles.fieldValue}>{member?.religion ?? '—'}</Text>
                    </View>
                  </View>

                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Birthday</Text>
                      <Text style={styles.fieldValue}>{member?.birthday ? new Date(member.birthday).toLocaleDateString() : '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Blood Type</Text>
                      <Text style={styles.fieldValue}>{member?.blood_type ?? '—'}</Text>
                    </View>
                  </View>

                  <View style={styles.separator}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.separatorLabel}>CONTACT INFORMATION</Text>
                    <View style={styles.separatorLine} />
                  </View>

                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Contact Number</Text>
                      <Text style={styles.fieldValue}>{member?.contact_number ?? '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Emergency Contact Person</Text>
                      <Text style={styles.fieldValue}>{member?.emergency_contact_person ?? '—'}</Text>
                    </View>
                  </View>

                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Emergency Contact No.</Text>
                      <Text style={styles.fieldValue}>{member?.emergency_contact_no ?? '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Emergency Relationship</Text>
                      <Text style={styles.fieldValue}>{member?.emergency_relationship ?? '—'}</Text>
                    </View>
                  </View>

                  <View style={styles.separator}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.separatorLabel}>ADDRESS</Text>
                    <View style={styles.separatorLine} />
                  </View>

                  <Text style={styles.fieldLabel}>Address Line</Text>
                  <Text style={styles.fieldValue}>{member?.address_line_1 ?? '—'}</Text>

                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Street</Text>
                      <Text style={styles.fieldValue}>{member?.street ?? '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>City/Municipality</Text>
                      <Text style={styles.fieldValue}>{member?.city_municipality ?? '—'}</Text>
                    </View>
                  </View>

                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Province</Text>
                      <Text style={styles.fieldValue}>{member?.province ?? '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Location</Text>
                      <Text style={styles.fieldValue}>{member?.location ?? '—'}</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.vehicleSection}>
                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Gravis Color</Text>
                      <Text style={styles.fieldValue}>{member?.gravis_color ?? '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Gravis Version</Text>
                      <Text style={styles.fieldValue}>{member?.gravis_version ?? '—'}</Text>
                    </View>
                  </View>

                  <Text style={styles.fieldLabel}>MV File/Plate No</Text>
                  <Text style={styles.fieldValue}>{member?.mv_file_plate_no ?? '—'}</Text>

                  <View style={styles.separator}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.separatorLabel}>LICENSE'S INFORMATION</Text>
                    <View style={styles.separatorLine} />
                  </View>

                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Driver License No</Text>
                      <Text style={styles.fieldValue}>{member?.dl_no ?? '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Driver License Type</Text>
                      <Text style={styles.fieldValue}>{member?.dl_type ?? '—'}</Text>
                    </View>
                  </View>

                  <View style={styles.fieldRow}>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>Driver License Expiry Date</Text>
                      <Text style={styles.fieldValue}>{member?.dl_expiration_date ? new Date(member.dl_expiration_date).toLocaleDateString() : '—'}</Text>
                    </View>
                    <View style={styles.fieldHalf}>
                      <Text style={styles.fieldLabel}>OR Expiration Date</Text>
                      <Text style={styles.fieldValue}>{member?.or_expiration_date ? new Date(member.or_expiration_date).toLocaleDateString() : '—'}</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
          </View>

          {/* Account Modal */}
          <Modal visible={accountModal} transparent={true} animationType="slide" onRequestClose={() => setAccountModal(false)}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
              <Pressable style={styles.modalOverlayDim} onPress={() => setAccountModal(false)}>
                <View style={styles.modalCard}>
                  <Pressable onPress={(e) => e.stopPropagation()} style={{ flex: 1 }}>
                    <View style={styles.modalHandle} />
                    <Text style={styles.modalTitle}>Account</Text>
                    <ScrollView 
                      style={{ flex: 1 }}
                      contentContainerStyle={styles.modalScrollContentContainer}
                      showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps="handled" 
                      scrollEventThrottle={16} 
                      bounces={true}
                      nestedScrollEnabled={true}
                    >

                    <Text style={styles.fieldLabel}>Member Type</Text>
                    <Text style={styles.fieldValue}>{member?.member_type ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>First name</Text>
                    <Text style={styles.fieldValue}>{member?.first_name ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Last name</Text>
                    <Text style={styles.fieldValue}>{member?.last_name ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Middle name</Text>
                    <Text style={styles.fieldValue}>{member?.middle_name ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Nick name</Text>
                    <Text style={styles.fieldValue}>{member?.nick_name ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Birthday</Text>
                    <Text style={styles.fieldValue}>{member?.birthday ? new Date(member.birthday).toLocaleDateString() : '—'}</Text>

                    <Text style={styles.fieldLabel}>Blood Type</Text>
                    <Text style={styles.fieldValue}>{member?.blood_type ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Religion</Text>
                    <Text style={styles.fieldValue}>{member?.religion ?? '—'}</Text>
                  </ScrollView>
                  </Pressable>
                </View>
              </Pressable>
            </KeyboardAvoidingView>
          </Modal>

          {/* Member Type Dropdown Modal */}
          <Modal visible={memberTypeDropdown} transparent={true} animationType="fade" onRequestClose={() => setMemberTypeDropdown(false)}>
            <Pressable style={styles.dropdownOverlay} onPress={() => setMemberTypeDropdown(false)}>
              <View style={styles.dropdownMenu}>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setAccountForm((s) => ({ ...s, member_type: 'Rider' })); setMemberTypeDropdown(false); }}>
                  <Text style={styles.dropdownItemText}>Rider</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setAccountForm((s) => ({ ...s, member_type: 'Back Rider' })); setMemberTypeDropdown(false); }}>
                  <Text style={styles.dropdownItemText}>Back Rider</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Modal>

          {/* Blood Type Dropdown Modal */}
          <Modal visible={bloodTypeDropdown} transparent={true} animationType="fade" onRequestClose={() => setBloodTypeDropdown(false)}>
            <Pressable style={styles.dropdownOverlay} onPress={() => setBloodTypeDropdown(false)}>
              <View style={styles.dropdownMenu}>
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                  <TouchableOpacity key={type} style={styles.dropdownItem} onPress={() => { setAccountForm((s) => ({ ...s, blood_type: type })); setBloodTypeDropdown(false); }}>
                    <Text style={styles.dropdownItemText}>{type}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Pressable>
          </Modal>

          {/* Contact Modal */}
          <Modal visible={contactModal} transparent={true} animationType="slide" onRequestClose={() => setContactModal(false)}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
              <Pressable style={styles.modalOverlayDim} onPress={() => setContactModal(false)}>
                <View style={styles.modalCard}>
                  <Pressable onPress={(e) => e.stopPropagation()} style={{ flex: 1 }}>
                    <View style={styles.modalHandle} />
                    <Text style={styles.modalTitle}>Contact</Text>
                    <ScrollView 
                      style={{ flex: 1 }}
                      contentContainerStyle={styles.modalScrollContentContainer}
                      showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps="handled" 
                      scrollEventThrottle={16} 
                      bounces={true}
                      nestedScrollEnabled={true}
                    >

                    <Text style={styles.fieldLabel}>Email</Text>
                    <Text style={styles.fieldValue}>{member?.email ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Contact number</Text>
                    <Text style={styles.fieldValue}>{member?.contact_number ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Emergency contact</Text>
                    <Text style={styles.fieldValue}>{member?.emergency_contact_no ?? '—'}</Text>
                  </ScrollView>
                  </Pressable>
                </View>
              </Pressable>
            </KeyboardAvoidingView>
          </Modal>

          {/* Address Modal */}
          <Modal visible={addressModal} transparent={true} animationType="slide" onRequestClose={() => setAddressModal(false)}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
              <Pressable style={styles.modalOverlayDim} onPress={() => setAddressModal(false)}>
                <View style={styles.modalCard}>
                  <Pressable onPress={(e) => e.stopPropagation()} style={{ flex: 1 }}>
                    <View style={styles.modalHandle} />
                    <Text style={styles.modalTitle}>Address</Text>
                    <ScrollView 
                      style={{ flex: 1 }}
                      contentContainerStyle={styles.modalScrollContentContainer}
                      showsVerticalScrollIndicator={true}
                      keyboardShouldPersistTaps="handled" 
                      scrollEventThrottle={16} 
                      bounces={true}
                      nestedScrollEnabled={true}
                    >

                    <Text style={styles.fieldLabel}>Address line 1</Text>
                    <Text style={styles.fieldValue}>{member?.address_line_1 ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Street</Text>
                    <Text style={styles.fieldValue}>{member?.street ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>City / Municipality</Text>
                    <Text style={styles.fieldValue}>{member?.city_municipality ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Province</Text>
                    <Text style={styles.fieldValue}>{member?.province ?? '—'}</Text>

                    <Text style={styles.fieldLabel}>Location</Text>
                    <Text style={styles.fieldValue}>{member?.location ?? '—'}</Text>
                  </ScrollView>
                  </Pressable>
                </View>
              </Pressable>
            </KeyboardAvoidingView>
          </Modal>

          {/* My QR Modal */}
          <Modal visible={myQrVisible} transparent animationType="fade" onRequestClose={() => setMyQrVisible(false)}>
            <Pressable style={styles.modalOverlayDim} onPress={() => setMyQrVisible(false)}>
              <Pressable style={styles.qrModalCard} onPress={() => {}}>
                <Text style={styles.modalTitle}>My QR</Text>
                {myQrUrl ? (
                  <Image source={{ uri: myQrUrl }} style={styles.qrImage} />
                ) : (
                  <Text style={styles.sectionEmpty}>No QR available.</Text>
                )}
                <TouchableOpacity style={[styles.modalCloseButton, { marginTop: 16 }]} onPress={() => setMyQrVisible(false)} accessibilityRole="button">
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </Pressable>
            </Pressable>
          </Modal>
        </View>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: 20,
    paddingTop: Platform.OS === 'ios' ? 80 : 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  back: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '800',
    fontSize: 22,
  },
  headerLogout: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'stretch',
    marginTop: 12,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '2%',
    marginBottom: 30,
  },
  avatarLeft: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginRight: '6%',
    backgroundColor: 'rgba(255,255,255,0.06)'
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  email: {
    color: 'rgba(255,255,255,0.9)',
    marginTop: 4,
    marginBottom: 0,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: '2%',
  },
  pointsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  qrButton: {
    width: 54,
    height: 34,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 10,
    padding: 6,
    marginBottom: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  tabText: {
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '700',
  },
  tabTextActive: {
    color: '#fff',
  },
  tabContent: {
    marginBottom: 12,
  },
  fieldLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
    marginTop: 8,
    marginBottom: 3,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  fieldValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  chapterItem: {
    color: '#fff',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  sectionEmpty: {
    color: 'rgba(255,255,255,0.75)',
    fontStyle: 'italic',
    paddingVertical: 8,
    marginTop: 8,
    fontSize: 14,
  },
  sectionButton: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 12,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionButtonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  sectionButtonFull: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20a9a6',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalOverlaySolid: {
    flex: 1,
    backgroundColor: '#0c1f26',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalOverlayDim: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 0,
  },
  modalCard: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: '#1a3a47',
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginHorizontal: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },
  modalHandle: {
    width: 50,
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  modalScrollContentContainer: {
    paddingHorizontal: 4,
    paddingBottom: 30,
  },
  modalButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1a3a47',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 14,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  logoutButton: {
    marginTop: 18,
    backgroundColor: '#20a9a6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'center'
  },
  logoutText: {
    color: '#02323a',
    fontWeight: '800',
  },
  cancelButton: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    fontWeight: '600',
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 4,
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginRight: 8,
  },
  statusText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
    fontWeight: '600',
  },
  statusChapter: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 8,
  },
  dropdownButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  dropdownOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dropdownMenu: {
    backgroundColor: '#294d5d',
    borderRadius: 12,
    padding: 8,
    width: '80%',
    maxWidth: 400,
    maxHeight: '60%',
  },
  dropdownItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  dropdownItemText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  vehicleSection: {
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  fieldRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 2,
  },
  fieldHalf: {
    flex: 1,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: -8,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  separatorLabel: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginHorizontal: 12,
  },
  qrModalCard: {
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
  qrImage: {
    width: 220,
    height: 220,
    marginTop: 6,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  /* duplicate sectionEmpty removed (consolidated above) */
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
});
