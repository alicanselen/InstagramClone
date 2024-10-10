import { Link, Redirect, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';
import { useAuth } from '~/Providers/AuthProvider';

export default function TabLayout() {
  const {isAuthenticated} = useAuth();

  if(!isAuthenticated){
      return <Redirect href="/(auth)"/>
  }
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarShowLabel: false,
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        headerTitle: 'For you',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={26} color={color} />
        ),
      }}
    />

    <Tabs.Screen
      name="new"
      options={{
        headerTitle: 'Create post',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="plus-square-o" size={30} color={color} />
        ),
      }}
    />

    <Tabs.Screen
      name="profile"
      options={{
        headerTitle: 'Profile',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user" size={26} color={color} />
        ),
      }}
    />
  </Tabs>
  );
}
