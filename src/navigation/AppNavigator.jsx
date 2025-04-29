import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import UserPublicProfile from '../screens/UserPublicProfile'; // ✅ ShU JOY MUHIM

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={ProfilePage} />
      
      <Stack.Screen name='UserPublicProfile' component={UserPublicProfile} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}  