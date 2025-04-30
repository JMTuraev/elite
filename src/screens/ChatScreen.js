import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const mockChats = [
  {
    id: 1,
    name: 'Laylo',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    lastMessage: 'Hi, how are you?',
    time: '14:20',
    unreadCount: 2,
    isOnline: true,
    isSender: true,
    isRead: true,
    direction: 'out',
  },
  {
    id: 2,
    name: 'Malika',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    lastMessage: 'See you soon!',
    time: '13:11',
    unreadCount: 0,
    isOnline: false,
    isSender: true,
    isRead: false,
    direction: 'in',
  },
  {
    id: 3,
    name: 'Zilola',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    lastMessage: 'typing...',
    time: '',
    unreadCount: 0,
    isOnline: true,
    isSender: false,
    isRead: false,
    isTyping: true,
    direction: 'in',
  },
  {
    id: 4,
    name: 'Guli',
    avatar: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8',
    lastMessage: 'Let’s complete it soon!',
    time: '12:30',
    unreadCount: 0,
    isOnline: true,
    isSender: true,
    isRead: true,
    progressBadge: '6/10',
    direction: 'out',
  },
  {
    id: 5,
    name: 'Dilnoza',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    lastMessage: 'Thanks!',
    time: '11:15',
    unreadCount: 0,
    isOnline: false,
    isSender: true,
    isRead: true,
    progressBadge: '10/10',
    direction: 'out',
  },
];

export default function ChatScreen() {
  const [activeTab, setActiveTab] = useState('out');
  const [tabLayouts, setTabLayouts] = useState({});
  const translateX = useRef(new Animated.Value(0)).current;
  const underlineWidth = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const tabs = [
    { key: 'out', label: 'Started by You' },
    { key: 'in', label: 'Requested You' },
  ];

  const handleTabPress = (key) => {
    if (key === activeTab) return;

    const isRight = tabs.findIndex(t => t.key === key) > tabs.findIndex(t => t.key === activeTab);
    const direction = isRight ? 30 : -30;

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: direction,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setActiveTab(key);
      fadeAnim.setValue(0);
      slideAnim.setValue(-direction);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    });

    const layout = tabLayouts[key];
    if (layout) {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: layout.x,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(underlineWidth, {
          toValue: layout.width,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  const onTabLayout = (key, e) => {
    const layout = e.nativeEvent.layout;
    setTabLayouts((prev) => ({ ...prev, [key]: layout }));
    if (key === activeTab && translateX._value === 0) {
      translateX.setValue(layout.x);
      underlineWidth.setValue(layout.width);
    }
  };

  const filteredChats = mockChats.filter((c) => c.direction === activeTab);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>

      <View style={styles.tabs}>
        {tabs.map(({ key, label }) => (
          <TouchableOpacity
            key={key}
            onPress={() => handleTabPress(key)}
            onLayout={(e) => onTabLayout(key, e)}
            style={styles.tabWrapper}
          >
            <Text style={[styles.tabText, activeTab === key && styles.activeTabText]}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
        <Animated.View
          style={[
            styles.underline,
            {
              transform: [{ translateX }],
              width: underlineWidth,
            },
          ]}
        />
      </View>

      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
        }}
      >
        <FlatList
          data={filteredChats}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
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
                  <Text style={[styles.lastMessage, item.isTyping && styles.typingText]} numberOfLines={1}>
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
          )}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginVertical: 14 },
  tabs: { flexDirection: 'row', position: 'relative', borderBottomWidth: 1, borderColor: '#111', marginBottom: 10 },
  tabWrapper: { flex: 1, alignItems: 'center', paddingVertical: 10 },
  tabText: { fontSize: 14, color: '#888' },
  activeTabText: { color: '#00e676' }, // 🔄 no bold
  underline: {
    position: 'absolute',
    bottom: 0,
    height: 1, // ✅ 2 barobar ingichka
    backgroundColor: '#00e676',
    borderRadius: 10,
  },
  list: { paddingBottom: 20 },
  chatItem: { flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 12 },
  avatarWrapper: { position: 'relative', marginRight: 12 },
  avatar: { width: 54, height: 54, borderRadius: 27 },
  onlineBadge: { position: 'absolute', bottom: 0, right: 2, width: 12, height: 12, borderRadius: 6, backgroundColor: '#00e676', borderWidth: 2, borderColor: '#000' },
  content: { flex: 1, justifyContent: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nameWithProgress: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  progressInlineBadge: { borderWidth: 1, borderColor: '#888', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2 },
  progressInlineText: { color: '#888', fontSize: 12, fontWeight: '600' },
  metaRight: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  time: { color: '#888', fontSize: 12 },
  checkWrapper: { position: 'relative', width: 20, height: 14, marginRight: 4 },
  check1: { position: 'absolute', left: 2, top: 0 },
  check2: { position: 'absolute', left: 6, top: 0 },
  lastMessage: { color: '#999', fontSize: 13, marginTop: 4, flex: 1 },
  typingText: { color: '#00e676', fontStyle: 'italic', fontWeight: '500' },
  unreadBadge: { backgroundColor: '#229ED9', borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2, marginLeft: 6 },
  unreadText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  separator: { height: 1, backgroundColor: '#111', marginLeft: 82 },
});
