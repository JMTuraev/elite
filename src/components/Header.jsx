import { View, Text, StyleSheet, Platform } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/GlobalStyles';

export default function Header({ title }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={GlobalStyles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: Colors.backgroundDark,
    paddingTop: Platform.OS === 'android' ? 30 : 40,
    zIndex: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  container: {
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2c2c2c',
  },
});
