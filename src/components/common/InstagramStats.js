import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function InstagramStats({ followers, following, posts, profileUrl }) {
  const handlePress = () => {
    if (!profileUrl) return;
    Linking.openURL(profileUrl).catch(err => console.error('❌ URL ochilmadi:', err));
  };

  return (
    <LinearGradient
      colors={['#1c1c1e', '#121212']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Ionicons name="logo-instagram" size={48} color="#aaa" style={styles.logo} />

      <View style={styles.infoBlock}>
        <Text style={styles.text}>
          <Text style={styles.accent}>{followers}</Text> followers ·{' '}
          <Text style={styles.accent}>{following}</Text> following ·{' '}
          <Text style={styles.accent}>{posts}</Text> posts
        </Text>

        <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
          <Text style={styles.link}>View Instagram Profile</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 16,
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 4,
  },
  accent: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    color: '#4dabf7',
    fontWeight: '600',
    fontSize: 13,
  },
});
