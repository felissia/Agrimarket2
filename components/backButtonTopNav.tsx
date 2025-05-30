import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BackButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.button} onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={20} color="#2E7D32" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    marginLeft: 20,
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2E7D32', // Green border
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default BackButton;
