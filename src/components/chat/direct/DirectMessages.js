import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function DirectMessages({ messages }) {
  return (
    <FlatList
      data={messages}
      inverted
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 8 }}
      renderItem={({ item }) => (
        <View
          style={[
            styles.bubbleWrapper,
            item.isMe ? styles.rightAlign : styles.leftAlign,
          ]}
        >
          <View
            style={[styles.bubble, item.isMe ? styles.bubbleRight : styles.bubbleLeft]}
          >
            <Text style={styles.bubbleText}>{item.text}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  bubbleWrapper: {
    marginVertical: 4,
    flexDirection: 'row',
    maxWidth: '100%',
  },
  leftAlign: { justifyContent: 'flex-start' },
  rightAlign: { justifyContent: 'flex-end' },
  bubble: {
    padding: 10,
    borderRadius: 16,
    maxWidth: '75%',
  },
  bubbleLeft: {
    backgroundColor: '#333',
    borderBottomLeftRadius: 4,
  },
  bubbleRight: {
    backgroundColor: '#007aff',
    borderBottomRightRadius: 4,
  },
  bubbleText: { color: '#fff', fontSize: 14 },
  timeText: {
    color: '#ccc',
    fontSize: 10,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
});
