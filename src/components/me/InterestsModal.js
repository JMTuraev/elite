// 📁 src/components/me/InterestsModal.js

import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const INTEREST_OPTIONS = [
  { label: 'Music', icon: 'music' },
  { label: 'Travel', icon: 'airplane' },
  { label: 'Reading', icon: 'book-open-page-variant' },
  { label: 'Fitness', icon: 'dumbbell' },
  { label: 'Gaming', icon: 'gamepad-variant' },
  { label: 'Art', icon: 'palette' },
  { label: 'Movies', icon: 'filmstrip' },
  { label: 'Cooking', icon: 'silverware-fork-knife' },
  { label: 'Dancing', icon: 'dance-ballroom' },
  { label: 'Photography', icon: 'camera' },
  { label: 'Shopping', icon: 'shopping' },
  { label: 'Nature', icon: 'tree' },
  { label: 'Technology', icon: 'laptop' },
  { label: 'Meditation', icon: 'meditation' },
  { label: 'Cars', icon: 'car' },
  { label: 'Animals', icon: 'dog' },
  { label: 'Fashion', icon: 'tshirt-crew' },
  { label: 'Design', icon: 'vector-square' },
  { label: 'Writing', icon: 'pen' },
  { label: 'Languages', icon: 'alphabet-latin' },
];

export default function InterestsModal({ visible, selected = [], onClose, onSave }) {
  const [selectedInterests, setSelectedInterests] = useState(selected);

  const toggleInterest = (interest) => {
    if (selectedInterests.some((i) => i.label === interest.label)) {
      setSelectedInterests(selectedInterests.filter((i) => i.label !== interest.label));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Edit Interests</Text>
          <TouchableOpacity onPress={onClose}>
            <MaterialCommunityIcons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.wrap}>
          {INTEREST_OPTIONS.map((item) => {
            const selected = selectedInterests.some((i) => i.label === item.label);
            return (
              <TouchableOpacity
                key={item.label}
                style={[styles.item, selected && styles.selected]}
                onPress={() => toggleInterest(item)}
              >
                <MaterialCommunityIcons name={item.icon} size={18} color="#fff" style={{ marginRight: 6 }} />
                <Text style={styles.text}>{item.label}</Text>
                {selected && (
                  <TouchableOpacity onPress={() => toggleInterest(item)}>
                    <MaterialCommunityIcons name="close" size={16} color="#fff" style={{ marginLeft: 8 }} />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => onSave(selectedInterests)}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0c',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  wrap: {
    paddingHorizontal: 24,
    paddingBottom: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    margin: 4,
  },
  selected: {
    backgroundColor: '#00e676',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  saveBtn: {
    backgroundColor: '#00e676',
    padding: 14,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
});
