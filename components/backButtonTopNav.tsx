import React from 'react';
import { TouchableOpacity, StyleSheet, Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    // Safely navigate back, or fallback
    if (router.canGoBack?.()) {
      router.back();
    } else {
      router.push('/'); // fallback to home or main route
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Ionicons name="arrow-back" size={20} color="#2E7D32" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40, // adjusts for status bar
    paddingLeft: 20,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default BackButton;
