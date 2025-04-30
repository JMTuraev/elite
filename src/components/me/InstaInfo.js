import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InstaInfo({ username, posts, followers, following }) {
  return (
    <View style={styles.card}>
      {/* Dekorativ "Instagram Info" pastki o‘ng burchakda */}
      <Text style={styles.decorativeLabel}>Instagram Info</Text>

      {/* Username */}
      <View style={styles.usernameRow}>
        <Text style={styles.username}>@{username}</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{posts}</Text>
          <Text style={styles.statLabel}>posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{followers}</Text>
          <Text style={styles.statLabel}>followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{following}</Text>
          <Text style={styles.statLabel}>following</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1d',
    borderRadius: 14,
    padding: 16,
    marginVertical: 14,
    flexGrow: 1,
    flexShrink: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  decorativeLabel: {
    position: 'absolute',
    bottom: 6,
    right: 12,
    color: '#444',
    fontSize: 12,
    fontStyle: 'italic',
    opacity: 0.4,
    zIndex: 0,
  },
  usernameRow: {
    alignItems: 'center',
    marginBottom: 12,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 8,
  },
  statItem: {
    alignItems: 'center',
    minWidth: 60,
  },
  statNumber: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  statLabel: {
    color: '#bbb',
    fontSize: 13,
    marginTop: 2,
  },
});
