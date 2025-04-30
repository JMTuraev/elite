
import React, { useState, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import ChatHeader from '../components/chat/ChatHeader';
import ChatTabs from '../components/chat/ChatTabs'; 
import ChatList from '../components/chat/ChatList'; 
import mockChats from '../../data/mockChats'; 

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
      <ChatHeader />

      <ChatTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
        onTabLayout={onTabLayout}
        underlineTranslateX={translateX}
        underlineWidth={underlineWidth}
      />

      <ChatList
        data={filteredChats}
        fadeAnim={fadeAnim}
        slideAnim={slideAnim}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
