// ✅ LevelPage – Fullscreen Modal with ChatHeader styling
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const LevelPage = ({ visible, onClose }) => {
  const currentLevel = 12;
  const levelPrice = 10;
  const [wallet, setWallet] = useState(7.2); // current earned amount
  const [selectedLevel, setSelectedLevel] = useState(currentLevel);

  const progress = Math.min(wallet / 12, 1);

  const handleLevelChange = (direction) => {
    setSelectedLevel((prev) => {
      let next = direction === 'up' ? prev + 1 : prev - 1;
      if (next < 1) next = 1;
      if (next > 20) next = 20;
      return next;
    });
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropOpacity={0.6}
      style={styles.modal}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.backIcon}>
          <Ionicons name="chevron-back" size={24} color="#FFD700" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.levelInfoIcon}>
          <Text style={styles.levelText}>Level {currentLevel}</Text>
        </TouchableOpacity>

        <View style={styles.progressBox}>
          <View style={styles.customProgressWrapper}>
            <View style={[styles.customProgressFill, { width: `${progress * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>{(progress * 100).toFixed(0)}% to next level</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 How it works</Text>
          <Text style={styles.sectionText}>Each dialog earns you $1.2. Earn $12 to unlock next level.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎯 Choose your level</Text>

          <View style={styles.levelSelector}>
            <TouchableOpacity onPress={() => handleLevelChange('down')} style={styles.levelBtn}>
              <Ionicons name="remove" size={20} color="#FFD700" />
            </TouchableOpacity>

            <Text style={styles.levelNumber}>{selectedLevel}</Text>

            <TouchableOpacity onPress={() => handleLevelChange('up')} style={styles.levelBtn}>
              <Ionicons name="add" size={20} color="#FFD700" />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionText}>Level {selectedLevel} × ${levelPrice} = ${selectedLevel * levelPrice}</Text>

          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy Level</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
  },
  container: {
    width: width,
    height: height,
    backgroundColor: '#000',
    padding: 24,
    justifyContent: 'flex-start',
  },
  backIcon: {
    position: 'absolute',
    top: 30,
    left: 24,
    zIndex: 10,
  },
  levelInfoIcon: {
    position: 'absolute',
    top: 30,
    right: 24,
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
    fontWeight: '600',
  },
  progressBox: {
    marginTop: 80,
    marginBottom: 20,
  },
  customProgressWrapper: {
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    overflow: 'hidden',
  },
  customProgressFill: {
    height: 10,
    backgroundColor: '#FFD700',
  },
  progressText: {
    color: '#aaa',
    marginTop: 6,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  sectionText: {
    color: '#aaa',
    fontSize: 14,
  },
  levelSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  levelBtn: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 20,
    padding: 8,
    marginHorizontal: 16,
  },
  levelNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  buyBtn: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    borderRadius: 16,
    marginTop: 12,
  },
  buyBtnText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LevelPage;
