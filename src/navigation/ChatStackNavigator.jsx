// 📁 src/navigation/ChatStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../screens/ChatScreen';
import DirectScreen from '../screens/DirectScreen';

const Stack = createNativeStackNavigator();

export default function ChatStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{
        headerShown: false,         // Hech bir ekranda header ko‘rsatilmaydi
        animation: 'fade_from_bottom', // Yumshoq screen o'tish effekti (UI-friendly)
      }}
    >
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="DirectScreen" component={DirectScreen} />
    </Stack.Navigator>
  );
}
