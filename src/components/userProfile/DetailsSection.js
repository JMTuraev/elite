import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsSection({ details }) {
  const items = [
    { icon: '🧑‍🤝‍🧑', label: details.gender },
    { icon: '📏', label: details.height },
    { icon: '🌐', label: details.languages?.join(', ') },
    { icon: '🔮', label: details.zodiac },
    { icon: '🚭', label: `Smoking: ${details.smoking}` },
    { icon: '🍷', label: `Drinking: ${details.drinking}` },
    { icon: '👶', label: `Kids: ${details.kids}` },
    { icon: '💼', label: details.occupation },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Details</Text>
      <View style={styles.wrapper}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  icon: {
    fontSize: 16,
    marginRight: 6,
  },
  label: {
    color: '#eee',
    fontSize: 13,
  },
});
