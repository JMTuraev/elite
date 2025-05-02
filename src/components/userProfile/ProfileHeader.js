import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileHeader({ profilePhoto, isPremium, onChatPress }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFD700', '#000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.borderWrapper}
      >
        <View style={styles.innerWrapper}>
          <Image
            source={{ uri: profilePhoto }}
            style={styles.profilePhoto}
          />
        </View>
      </LinearGradient>

      {isPremium && (
        <Ionicons
          name="star"
          size={28}
          color="#FFD700"
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
  borderWrapper: {
    borderRadius: 75,
    padding: 3,
  },
  innerWrapper: {
    backgroundColor: '#000',
    borderRadius: 70,
    overflow: 'hidden',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
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
    backgroundColor: '#FFD700',
    padding: 8,
    borderRadius: 25,
  },
});
