import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChatHeader() {
  const [showLevelModal, setShowLevelModal] = useState(false);

  return (
    <>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Profile</Text>

      </View>
    </>
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
 
});
