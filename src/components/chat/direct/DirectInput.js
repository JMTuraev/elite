import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function DirectInput({ text, setText, onSend }) {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Yozing..."
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      <TouchableOpacity onPress={onSend} style={styles.sendBtn}>
        <Text style={styles.sendText}>➤</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#222',
    backgroundColor: '#000',
  },
  input: {
    flex: 1,
    backgroundColor: '#111',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  sendBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sendText: {
    fontSize: 20,
    color: '#007aff',
  },
});
