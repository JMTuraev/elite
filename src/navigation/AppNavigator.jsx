import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import UserPublicProfile from '../screens/UserPublicProfile'; // ✅ ShU JOY MUHIM
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={ProfilePage} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name='UserPublicProfile' component={UserPublicProfile}
       options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}  