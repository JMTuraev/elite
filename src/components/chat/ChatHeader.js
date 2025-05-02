import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LevelModal from './LevelModal';

export default function ChatHeader() {
  const [showLevelModal, setShowLevelModal] = useState(false);

  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>Chats</Text>

      <TouchableOpacity style={styles.levelBadge} onPress={() => setShowLevelModal(true)}>
        <Ionicons name="shield-half-outline" size={16} color="#FFD700" />
        <Text style={styles.levelText}>Level 12</Text>
      </TouchableOpacity>

      <LevelModal visible={showLevelModal} onClose={() => setShowLevelModal(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  levelText: {
    color: '#FFD700',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '600',
  },
});
