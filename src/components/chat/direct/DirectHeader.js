import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function DirectHeader({ user, onBackPress, onAvatarPress }) {
  return (
    <TouchableOpacity onPress={onAvatarPress} style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.backBtn}>
        <Text style={styles.backIcon}>{'‹'}</Text>
      </TouchableOpacity>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        {user.isOnline && <View style={styles.onlineBadge} />}
      </View>
      <View>
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  backBtn: { marginRight: 12 },
  backIcon: { color: '#fff', fontSize: 30, marginRight: 4 },
  avatarWrapper: { position: 'relative', marginRight: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  onlineBadge: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 12,
    height: 12,
    backgroundColor: '#00ff00',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#000',
  },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
