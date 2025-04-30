import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchStackNavigator from '../navigation/SearchStackNavigator';
import ChatStackNavigator from '../navigation/ChatStackNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          switch (route.name) {
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Chat':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color="#fff"
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
