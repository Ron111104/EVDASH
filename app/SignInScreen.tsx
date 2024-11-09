// SignInScreen.tsx

import React, { useState } from 'react';
import { View, Image, Dimensions, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Button, Text, Input, YStack, XStack } from 'tamagui';
import { Link, useRouter } from 'expo-router';
import auth from '@react-native-firebase/auth';

const { width, height } = Dimensions.get('window');

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  // Handle Sign-In with Email/Password
  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Signed in successfully!');
      router.push('/HomeScreen');  // Redirect to HomeScreen on successful sign-in
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
            Sign In
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

        <XStack
          justifyContent="space-around"
          width="80%"
          alignItems="center"
          paddingHorizontal={10}
          marginBottom={20}
        >
          <BouncyCheckbox
            size={20}
            fillColor="#3b82f6"
            unfillColor="transparent"
            text="keep me logged in"
            textStyle={{
              color: '#ffffff',
              textDecorationLine: 'none',
              fontSize: 14,
            }}
            iconStyle={{
              borderColor: '#ffffff',
              borderRadius: 0,
            }}
            innerIconStyle={{ borderWidth: 1.5 }}
            isChecked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Button transparent onPress={() => router.push('/ForgotPasswordScreen')}>
            <Text color="#a5b4fc" textAlign="right" fontSize={14}>
              forgot password?
            </Text>
          </Button>
        </XStack>

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
          onPress={handleSignIn}
        >
          <Text color="#ffffff" fontSize={18} fontWeight="600">
            Sign in
          </Text>
        </Button>

        <XStack justifyContent="center" alignItems="center" width="100%">
          <Text color="#ffffff" fontSize={14}>Don’t have an account?</Text>
          <Link href="/SignUpScreen" passHref>
            <Text color="#38bdf8" marginLeft={5} fontWeight="600" fontSize={14}>
              Sign up ➔
            </Text>
          </Link>
        </XStack>
      </YStack>
    </LinearGradient>
  );
}
