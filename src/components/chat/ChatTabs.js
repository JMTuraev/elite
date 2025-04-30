import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';

export default function ChatTabs({
  tabs,
  activeTab,
  onTabPress,
  onTabLayout,
  underlineTranslateX,
  underlineWidth,
}) {
  return (
    <View style={styles.tabs}>
      {tabs.map(({ key, label }) => (
        <TouchableOpacity
          key={key}
          onPress={() => onTabPress(key)}
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
            transform: [{ translateX: underlineTranslateX }],
            width: underlineWidth,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#111',
    marginBottom: 10,
  },
  tabWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 14,
    color: '#888',
  },
  activeTabText: {
    color: '#00e676',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    height: 1,
    backgroundColor: '#00e676',
    borderRadius: 10,
  },
});
