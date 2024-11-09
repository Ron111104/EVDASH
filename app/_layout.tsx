// app/_layout.tsx
import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../tamagui.config'; 
import { useFonts } from 'expo-font';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function RootLayout() {
  const router = useRouter();
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  // GoogleSignin.configure({
  //   webClientId: '941687054252-r837q3v4d7spbaqf2fdgun1de46d2gls.apps.googleusercontent.com',
  // });
  // Load the Inter font
  let [fontsLoaded] = useFonts({
    'Inter': require('../assets/fonts/Inter/static/Inter_24pt-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/static/Inter_24pt-Bold.ttf'),
  });

  // Check Firebase authentication state
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }

    // Navigate to the appropriate screen based on the user's auth state
    if (user) {
      router.replace('/index'); // Redirect to landing page if the user is logged in
    } else {
      router.replace('/SignInScreen'); // Redirect to sign-in screen if the user is not logged in
    }
  }, [fontsLoaded, router, user]);

  // Wait until the fonts are loaded
  if (!fontsLoaded) {
    return null; // Or show a loading screen
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack>
        <Stack.Screen name="SplashScreen1" options={{ title: 'Splash Screen 1', headerShown: false }} />
        <Stack.Screen name="SplashScreen2" options={{ title: 'Splash Screen 2', headerShown: false }} />
        <Stack.Screen name="index" options={{ title: 'Landing', headerShown: false }} />
        <Stack.Screen name="SignInScreen" options={{ title: 'Sign In', headerShown: false }} />
        <Stack.Screen name="SignUpScreen" options={{ title: 'Sign Up', headerShown: false }} />
        <Stack.Screen name="ForgotPasswordScreen" options={{ title: 'Forgot Pass', headerShown: false }} />
        <Stack.Screen name="ResetPasswordScreen" options={{ title: 'Reset Pass', headerShown: false }} />
        <Stack.Screen name="HomeScreen" options={{ title: 'Home', headerShown: false }} />
      </Stack>
    </TamaguiProvider>
  );
}

