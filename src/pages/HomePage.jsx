import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';
import Header from '../components/Header';
import Button from '../components/Button';

export default function HomePage({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Header title="Home" />
      <View style={styles.content}>
        <Text style={GlobalStyles.title}>Welcome to Elite</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
