import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ChatListItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        {item.isOnline && <View style={styles.onlineDot} />}
      </View>

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}, {item.age}</Text>
          {item.progressBadge && (
            <Text style={styles.progressBadge}>{item.progressBadge}</Text>
          )}
        </View>

        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.isTyping ? 'typing...' : item.lastMessage || 'No messages yet'}
        </Text>
      </View>

      <View style={styles.rightSide}>
        {item.time ? <Text style={styles.time}>{item.time}</Text> : null}
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    backgroundColor: '#00e676',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
  },
  info: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  progressBadge: {
    fontSize: 12,
    color: '#FFD700',
    backgroundColor: '#333',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: 'hidden',
    marginLeft: 8,
  },
  lastMessage: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  time: {
    color: '#666',
    fontSize: 12,
  },
  unreadBadge: {
    marginTop: 4,
    backgroundColor: '#f44336',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
