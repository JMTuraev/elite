import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChatListItem({ item }) {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        {item.isOnline && <View style={styles.onlineBadge} />}
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.nameWithProgress}>
            <Text style={styles.name}>{item.name}</Text>
            {item.progressBadge === '10/10' ? (
              <Ionicons name="lock-closed-outline" size={16} color="#ff4d4d" />
            ) : item.progressBadge ? (
              <View style={styles.progressInlineBadge}>
                <Text style={styles.progressInlineText}>{item.progressBadge}</Text>
              </View>
            ) : null}
          </View>

          <View style={styles.metaRight}>
            {item.isSender && (
              <View style={styles.checkWrapper}>
                {item.isRead ? (
                  <>
                    <MaterialIcons name="done" size={15} color="#00e676" style={styles.check1} />
                    <MaterialIcons name="done" size={15} color="#00e676" style={styles.check2} />
                  </>
                ) : (
                  <MaterialIcons name="done" size={15} color="#00e676" />
                )}
              </View>
            )}
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text
            style={[styles.lastMessage, item.isTyping && styles.typingText]}
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>

          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00e676',
    borderWidth: 2,
    borderColor: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameWithProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressInlineBadge: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  progressInlineText: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
  },
  metaRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
  checkWrapper: {
    position: 'relative',
    width: 20,
    height: 14,
    marginRight: 4,
  },
  check1: {
    position: 'absolute',
    left: 2,
    top: 0,
  },
  check2: {
    position: 'absolute',
    left: 6,
    top: 0,
  },
  lastMessage: {
    color: '#999',
    fontSize: 13,
    marginTop: 4,
    flex: 1,
  },
  typingText: {
    color: '#00e676',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  unreadBadge: {
    backgroundColor: '#229ED9',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 6,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
