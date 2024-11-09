// app/index.tsx
import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingScreen(): JSX.Element {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#191146', '#2A2E88', '#2F46C8']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Image source={require('../assets/images/sunglasses.png')} style={styles.sunglasses} />
      <TouchableOpacity style={styles.button} onPress={() => router.push('/SignInScreen')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  sunglasses: {
    width: 360,
    height: 180,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#1e3b70',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
