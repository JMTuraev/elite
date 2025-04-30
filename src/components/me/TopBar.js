import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TopBar({ wallet = 0, onLogout }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.walletBtn}>
        <Ionicons name="wallet" size={18} color="#fff" />
        <Text style={styles.walletText}>${wallet}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogout}>
        <Ionicons name="log-out-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  walletBtn: {
    flexDirection: 'row',
    backgroundColor: '#000a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
  },
  walletText: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 14,
  },
});
