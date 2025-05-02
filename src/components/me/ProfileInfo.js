import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Visitors from './Visitiors'; // 👈 Visitors komponenti shu joyda import qilinadi

export default function ProfileInfo({ avatar, name, age, wallet, onSettings }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Avatar with gradient border */}
        <LinearGradient
          colors={['#FFD700', '#000']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.avatarBorder}
        >
          <Image source={{ uri: avatar }} style={styles.avatar} />
        </LinearGradient>

        <View style={styles.infoBlock}>
          <Text style={styles.name}>{name}, {age}</Text>
          <View style={styles.walletRow}>
            <Ionicons name="wallet-outline" size={16} color="#ccc" />
            <Text style={styles.walletText}>${wallet}</Text>
          </View>
        </View>

        <View style={styles.visitorWrapper}>
          <Visitors count={7} onPress={() => console.log('Visitors opened')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 12,
    marginBottom: 20,
    paddingHorizontal: 24,
    position: 'relative',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 12,
  },
  avatarBorder: {
    width: 106,
    height: 106,
    borderRadius: 53,
    padding: 3,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 53,
  },
  infoBlock: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  walletText: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '500',
  },
  visitorWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
