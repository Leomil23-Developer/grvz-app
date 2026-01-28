import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import GradientBackground from "../../components/background"; 
import { API_URL } from '../config';

export default function Login({ onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState(__DEV__ ? 'admin-leyy' : '');
  const [password, setPassword] = useState(__DEV__ ? 'Leomil39' : '');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      console.log('🔐 Attempting login to:', API_URL);
      console.log('📤 Username:', username);
      
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      console.log('📥 Response status:', res.status);
      
      const data = await res.json();
      console.log('📥 Response data:', data);
      
      if (!res.ok) {
        Alert.alert('Login failed', data.error || 'Invalid credentials');
        return;
      }

      // Store token and user data, then navigate to Home
      console.log('Auth response:', data);
      // TODO: store tokens securely (AsyncStorage or secure store)
      onLoginSuccess(data.user);
    } catch (err) {
      console.error('❌ Login error:', err);
      Alert.alert('Connection Error', 'Cannot connect to server. Make sure the server is running and the IP address is correct.');
    } finally {
      setLoading(false);
    }
  }; 

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../../assets/GRVZLogo.png")} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Welcome to GRVZ Portal</Text>
          <Text style={styles.subtitle}>Please login to continue</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="person" size={20} color="rgba(255,255,255,0.9)" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="rgba(255,255,255,0.8)"
              autoCapitalize="none"
              autoCorrect={false}
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock" size={20} color="rgba(255,255,255,0.9)" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.8)"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => setShowPassword((s) => !s)} style={styles.inputRightIcon} accessibilityLabel={showPassword ? "Hide password" : "Show password"}>
              <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={20} color="rgba(255,255,255,0.9)" />
            </TouchableOpacity>
          </View>

          <View style={styles.rememberRow}>
            <TouchableOpacity style={styles.rememberToggle} onPress={() => setRememberMe((r) => !r)} accessibilityLabel={rememberMe ? "Uncheck Remember me" : "Check Remember me"}>
              <MaterialIcons name={rememberMe ? "check-box" : "check-box-outline-blank"} size={22} color="rgba(255,255,255,0.95)" />
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember me</Text>
          </View>

          <TouchableOpacity 
            style={[styles.loginButton, loading && styles.loginButtonDisabled]} 
            onPress={handleLogin} 
            activeOpacity={0.9}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#02323a" size="small" />
            ) : (
              <Text style={styles.loginButtonText}>Login</Text>
            )}
          </TouchableOpacity>

          {/* Separator */}
          <View style={styles.separatorRow}>
            <View style={styles.sepLine} />
            <Text style={styles.sepText}>Follow us</Text>
            <View style={styles.sepLine} />
          </View>

          {/* Social login buttons */}
          <View style={styles.socialRow}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => console.log('Facebook login')}
              accessibilityLabel="Login with Facebook"
            >
              <Image source={{ uri: 'https://img.icons8.com/color/48/000000/facebook-new.png' }} style={styles.socialLogo} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => console.log('Discord login')}
              accessibilityLabel="Login with Discord"
            >
              <Image source={{ uri: 'https://img.icons8.com/color/48/000000/discord-logo.png' }} style={styles.socialLogo} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => console.log('TikTok login')}
              accessibilityLabel="Login with TikTok"
            >
              <Image source={{ uri: 'https://img.icons8.com/color/48/000000/tiktok--v1.png' }} style={styles.socialLogo} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </GradientBackground>
  );
}      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 80,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    opacity: 0.95,
  },
  form: {
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 30,
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingHorizontal: 14,
    borderRadius: 28,
    marginBottom: 14,
    height: 56,
    overflow: "hidden",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 0,
    fontSize: 16,
    fontWeight: "600",
  },
  inputRightIcon: {
    marginLeft: 10,
    padding: 8,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 4,
    paddingHorizontal: 2,
  },
  rememberToggle: {
    padding: 6,
  },
  rememberText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#1ba9a6",
    height: 56,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    color: "#02323a",
    fontSize: 18,
    fontWeight: "700",
  },
  separatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 16,
  },
  sepLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.18)',
    marginHorizontal: 12,
  },
  sepText: {
    color: '#fff',
    opacity: 0.9,
    fontSize: 12,
    fontWeight: '600',
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  socialButton: {
    flex: 1,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderColor: "transparent",
    elevation: 0,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  socialLogo: {
    width: 40,
    height: 40,
  }
});
