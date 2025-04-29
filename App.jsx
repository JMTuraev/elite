// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer> {/* ✅ Faqat shu yerda bo‘lsin */}
    <BottomTabNavigator>
      <AppNavigator/>
      </BottomTabNavigator>
    </NavigationContainer>
  );
}
