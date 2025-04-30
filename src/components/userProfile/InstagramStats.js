import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function InstagramStats({ followers, following, posts }) {
  return (
    <LinearGradient
      colors={['#00c853', '#00e676']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Ionicons name="logo-instagram" size={24} color="#fff" />
      <Text style={styles.text}>
        {followers} followers · {following} following · {posts} posts
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});
