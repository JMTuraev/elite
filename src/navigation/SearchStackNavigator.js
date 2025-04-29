import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import UserPublicProfile from '../screens/UserPublicProfile';

const Stack = createNativeStackNavigator();

export default function SearchStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* SearchScreen: foydalanuvchi qidiruvi sahifasi */}
      <Stack.Screen name="SearchScreen" component={SearchScreen} />

      {/* UserPublicProfile: dinamik profil sahifasi */}
      <Stack.Screen name="UserPublicProfile" component={UserPublicProfile} />
    </Stack.Navigator>
  );
}
