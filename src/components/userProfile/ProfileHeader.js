import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileHeader({ profilePhoto, isPremium, onChatPress }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profilePhoto }}
        style={styles.profilePhoto}
      />

      {isPremium && (
        <Ionicons
          name="star"
          size={28}
          color="#00e676"
          style={styles.premiumIcon}
        />
      )}

      <TouchableOpacity style={styles.chatButton} onPress={onChatPress}>
        <Ionicons name="chatbubble-ellipses" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    position: 'relative',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#00e676',
  },
  premiumIcon: {
    position: 'absolute',
    top: 5,
    left: 20,
  },
  chatButton: {
    position: 'absolute',
    top: 5,
    right: 20,
    backgroundColor: '#00e676',
    padding: 8,
    borderRadius: 25,
  },
});
