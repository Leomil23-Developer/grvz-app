import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import GradientBackground from "../../components/background"; 
// Project-level config (create c:\workspace\grvz-portal-app\grvz-app\config.ts and export API_URL there to override).
// Use a runtime require + fallback so the app still compiles when ../../config is not present.
const API_URL: string = (() => {
  try {
    // silence static TS import resolution by requiring at runtime
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const cfg = require('../../config');
    return (cfg && cfg.API_URL) || 'http://10.0.2.2:3000';
  } catch {
    // default for emulators / development; change to your device IP if testing on a physical device
    return 'http://10.0.2.2:3000';
  }
})();

export default function Login({ onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Use your computer's IP address instead of localhost for physical devices
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        Alert.alert('Login failed', data.error || 'Invalid credentials');
        return;
      }

      // Store token and user data, then navigate to Home
      console.log('Auth response:', data);
      // TODO: store tokens securely (AsyncStorage or secure store)
      onLoginSuccess(data.user);
    } catch (err) {
      console.error(err);
      Alert.alert('Connection Error', 'Cannot connect to server. Make sure the server is running and the IP address is correct.');
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

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.9}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
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
    backgroundColor: "#06b6d4",
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  loginButtonText: {
    color: "#02323a",
    fontSize: 18,
    fontWeight: "700",
  }
});
