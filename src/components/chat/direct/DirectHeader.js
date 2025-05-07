import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DirectHeader({ user, onBackPress, onAvatarPress, progressBadge }) {
  const isLocked = progressBadge === '10/10';

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
        {progressBadge && (
          isLocked ? (
            <View style={styles.lockIconWrapper}>
              <Ionicons name="lock-closed-outline" size={16} color="#FFD700" />
            </View>
          ) : (
            <Text style={styles.badge}>{progressBadge}</Text>
          )
        )}
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
  badge: {
    backgroundColor: '#333',
    color: '#FFD700',
    fontSize: 12,
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  lockIconWrapper: {
    marginTop: 4,
    backgroundColor: '#333',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: 'flex-start',
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
