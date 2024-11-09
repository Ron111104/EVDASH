import React, { useState } from 'react';
import { Alert, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text, Input, YStack, XStack } from 'tamagui';
import { useNavigation, useRoute } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState('');
  const { email } = useRoute().params as { email: string };
  const navigation = useNavigation();

  // Handle Sign-In with Email/Password
  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Signed in successfully!');
      navigation.navigate('/HomeScreen'); // Navigate to home or desired screen after sign-in
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  // Handle Resend Reset Email
  const handleResendResetEmail = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email sent.');
    } catch (error: any) {
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
          Enter your new password.
        </Text>
        <YStack width="100%" marginBottom={20}>
          <Text fontSize={16} color="#ffffff" marginBottom={5}>
            New Password
          </Text>
          <Input
            placeholder="Enter new password"
            placeholderTextColor="#9ca3af"
            secureTextEntry
            backgroundColor="rgba(255, 255, 255, 0.1)"
            color="#ffffff"
            borderRadius={8}
            paddingHorizontal={15}
            height={55}
            value={password}
            onChangeText={setPassword}
          />
        </YStack>
        <YStack
          width="50%"
          backgroundColor="#1F206C"
          borderRadius={10}
          paddingVertical={10}
          alignItems="center"
          justifyContent="center"
        >
          <Button backgroundColor="#1F206C" borderRadius={10} onPress={handleSignIn}>
            <Text color="#ffffff" fontSize={20} fontWeight="600">
              Sign In
            </Text>
          </Button>
        </YStack>

        {/* Resend Reset Email as TouchableOpacity */}
        <TouchableOpacity onPress={handleResendResetEmail}>
          <XStack justifyContent="center" alignItems="center">
            <Text color="#ffffff" fontSize={14} opacity={0.7}>
              Didn’t receive the email?{' '}
            </Text>
            <Text color="#ffffff" fontWeight="bold" fontSize={14} underline>
              Resend Email
            </Text>
          </XStack>
        </TouchableOpacity>

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
