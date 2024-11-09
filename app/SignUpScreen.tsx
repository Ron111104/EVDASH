// SignUpScreen.tsx

import React, { useState } from 'react';
import { View, Image, Dimensions, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text, Input, YStack, XStack } from 'tamagui';
import { Link, useRouter } from 'expo-router';
import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get('window');

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Handle Email Sign-Up
  const handleSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created successfully!');
      router.push('/HomeScreen');  // Redirect to HomeScreen after sign-up
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
        justifyContent="space-around"
        paddingHorizontal={20}
        paddingVertical={height * 0.03}
      >
        <YStack alignItems="center">
          <Image
            source={require('../assets/images/logo2.png')}
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain',
              marginBottom: 10,
            }}
          />
          <Text fontSize={32} fontWeight="bold" color="#ffffff" textAlign="center" marginBottom={30}>
            Sign Up
          </Text>
        </YStack>

        <YStack width="100%">
          <Text fontSize={16} color="#ffffff" marginBottom={5} marginLeft={5}>
            E-Mail
          </Text>
          <Input
            placeholder="someone@evdash.com"
            placeholderTextColor="#9ca3af"
            backgroundColor="rgba(255, 255, 255, 0.1)"
            color="#ffffff"
            borderRadius={8}
            paddingHorizontal={15}
            height={55}
            marginBottom={20}
            value={email}
            onChangeText={setEmail}
          />
        </YStack>

        <YStack width="100%">
          <Text fontSize={16} color="#ffffff" marginBottom={5} marginLeft={5}>
            Phone Number
          </Text>
          <Input
            placeholder="2451369850"
            placeholderTextColor="#9ca3af"
            backgroundColor="rgba(255, 255, 255, 0.1)"
            color="#ffffff"
            borderRadius={8}
            paddingHorizontal={15}
            height={55}
            marginBottom={20}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </YStack>

        <YStack width="100%">
          <Text fontSize={16} color="#ffffff" marginBottom={5} marginLeft={5}>
            Password
          </Text>
          <Input
            placeholder="***************"
            placeholderTextColor="#9ca3af"
            backgroundColor="rgba(255, 255, 255, 0.1)"
            color="#ffffff"
            borderRadius={8}
            paddingHorizontal={15}
            height={55}
            secureTextEntry
            marginBottom={10}
            value={password}
            onChangeText={setPassword}
          />
        </YStack>

        <Button
          backgroundColor="#1F206C"
          borderRadius={10}
          width="60%"
          height={50}
          alignItems="center"
          justifyContent="center"
          marginBottom={20}
          shadowOpacity={0.2}
          shadowRadius={5}
          shadowColor="#000"
          shadowOffset={{ width: 0, height: 4 }}
          onPress={handleSignUp}
        >
          <Text color="#ffffff" fontSize={18} fontWeight="600">
            Sign up
          </Text>
        </Button>

        <XStack justifyContent="center" alignItems="center" width="100%">
          <Text color="#ffffff" fontSize={14}>Already have an account?</Text>
          <Link href="/SignInScreen" passHref>
            <Text color="#38bdf8" marginLeft={5} fontWeight="600" fontSize={14}>
              Sign in ➔
            </Text>
          </Link>
        </XStack>
      </YStack>
    </LinearGradient>
  );
}
