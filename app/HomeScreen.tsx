// app/HomeScreen.tsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#191146', '#2A2E88', '#2F46C8']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* Text "Let's connect your Device" */}
      <Text style={styles.title}>Let's connect your Device</Text>

      {/* Plus Icon Placeholder */}
      <View style={styles.plusIcon}>
        <Text style={styles.plusText}>+</Text>
      </View>

      {/* Scan Button */}
      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.scanButtonText}>Scan</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
  plusIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  plusText: {
    fontSize: 40,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  scanButton: {
    width: 100,
    paddingVertical: 10,
    backgroundColor: '#3A4BAE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

