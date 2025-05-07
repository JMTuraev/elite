import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
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

  const TitleBox = ({ editable }) => (
    <LinearGradient
      colors={['#FFD700', '#222']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View style={styles.innerBox}>
        <Text style={editable ? styles.titleEditable : styles.title}>Details</Text>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.card}>
      {editable ? (
        <TouchableOpacity onPress={onPress}>
          <TitleBox editable />
        </TouchableOpacity>
      ) : (
        <TitleBox />
      )}

      <View style={styles.wrap}>
        {fields?.map(
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
    backgroundColor: '#0b0b0c',
    marginHorizontal: 24,
    marginVertical: 14,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  gradientBorder: {
    borderRadius: 10,
    padding: 1.5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  innerBox: {
    backgroundColor: '#1a1a1d', // ichki fon qora
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  titleEditable: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
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
