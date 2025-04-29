import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomePage} options={{headerShown:false}} />
      <Stack.Screen name='Profile' component={ProfilePage} />
    </Stack.Navigator>
  );
}
