import React, { useState } from 'react';
import { Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text, Input, YStack, XStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleNext = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Check Your Email', 'A password reset link has been sent.');
      navigation.navigate('ResetPasswordScreen', { email });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <LinearGradient
      colors={['#191146', '#2A2E88', '#2F46C8']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="space-evenly"
        paddingHorizontal={20}
        paddingVertical={20}
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 180, height: 180, resizeMode: 'contain' }}
        />
        <Text fontSize={32} fontWeight="bold" color="#ffffff">
          Reset Password
        </Text>
        <Text fontSize={18} color="#ffffff" opacity={0.8} textAlign="center">
          Don’t worry! It happens. Enter your email to receive a reset link.
        </Text>
        <YStack width="100%" marginBottom={20}>
          <Text fontSize={16} color="#ffffff" marginBottom={5}>
            E-Mail
          </Text>
          <Input
            placeholder="someone@example.com"
            placeholderTextColor="#9ca3af"
            backgroundColor="rgba(255, 255, 255, 0.1)"
            color="#ffffff"
            borderRadius={8}
            paddingHorizontal={15}
            height={55}
            value={email}
            onChangeText={setEmail}
          />
        </YStack>
        <YStack
          width="50%"
          backgroundColor="#1F206C"
          borderRadius={10}
          paddingVertical={5}
          alignItems="center"
          justifyContent="center"
          marginBottom={20}
        >
          <Button backgroundColor="#1F206C" borderRadius={10} onPress={handleNext}>
            <Text color="#ffffff" fontSize={20} fontWeight="600">
              Send Code
            </Text>
          </Button>
        </YStack>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <XStack justifyContent="center" alignItems="center">
            <Text color="#ffffff" fontSize={14} opacity={0.7}>
              Remember the password?{' '}
            </Text>
            <Text color="#ffffff" fontWeight="bold" fontSize={14} underline>
              Sign In
            </Text>
          </XStack>
        </TouchableOpacity>
      </YStack>
    </LinearGradient>
  );
}
