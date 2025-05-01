import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import mockDetails from '../../../data/mockDetails'; 

export default function Details({ data = mockDetails, onPress, editable = false }) {
  const fields = [
    { icon: 'account-heart-outline', label: data.relationship },
    { icon: 'ruler', label: `${data.height} cm (${data.heightInches})` },
    { icon: 'alphabet-latin', label: data.languages?.join(', ') },
    { icon: `zodiac-${data.zodiac?.toLowerCase()}`, label: data.zodiac },
    { icon: 'smoking-off', label: data.smoking },
    { icon: 'glass-cocktail', label: data.drinking },
    { icon: 'baby-face-outline', label: data.kids },
    { icon: 'briefcase-outline', label: data.job },
  ];

  return (
    <View style={styles.card}>
      {editable ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.titleEditable}>Details</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.title}>Details</Text>
      )}

      <View style={styles.wrap}>
        {fields.map(
          (item, index) =>
            item.label && (
              <View key={index} style={styles.item}>
                <MaterialCommunityIcons name={item.icon} size={20} color="#bbb" style={styles.icon} />
                <Text style={styles.text}>{item.label}</Text>
              </View>
            )
        )}
      </View>
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
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
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
});
