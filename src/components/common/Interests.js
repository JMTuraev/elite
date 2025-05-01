// 📁 src/components/common/Interests.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Interests({ interests = [], editable = false, onPress }) {
  return (
    <View style={styles.card}>
      {editable ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.titleEditable}>Interests</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.title}>Interests</Text>
      )}

      {interests.length > 0 ? (
        <View style={styles.wrap}>
          {interests.map((interest, index) => (
            <View key={index} style={styles.item}>
              <MaterialCommunityIcons
                name={interest.icon || 'star-outline'}
                size={18}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.text}>{interest.label}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.placeholder}>You haven’t added any interests yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1d',
    marginHorizontal: 24,
    marginVertical: 14,
    borderRadius: 14,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  titleEditable: {
    color: '#4dabf7',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
    marginRight: 8,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  placeholder: {
    color: '#666',
    fontStyle: 'italic',
    fontSize: 13,
  },
});
