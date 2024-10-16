import AuthProvider from '~/Providers/AuthProvider';
import '../global.css';

import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
    </AuthProvider>
  );
}
