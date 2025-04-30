import React from 'react';
import { Animated, FlatList, View, StyleSheet } from 'react-native';
import ChatListItem from './ChatListItem';

export default function ChatList({ data, fadeAnim, slideAnim }) {
  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        transform: [{ translateX: slideAnim }],
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <ChatListItem item={item} />}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#111',
    marginLeft: 82,
  },
});
