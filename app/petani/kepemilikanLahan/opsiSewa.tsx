import BackButton from '@/components/backButtonTopNav';
import React, { useCallback } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Sewa: React.FC = () => {
  const onUploadPress = useCallback(() => {
    // Handle upload logic here
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.backWrapper}>
        <BackButton />
      </View>

      <Text style={styles.header}>Dokumen yang Dibutuhkan</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nomor Induk Berusaha (NIB)</Text>
        <View style={styles.inputBox}>
          <Text style={styles.placeholder}>Contoh: 3564712890123</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.uploadContainer} onPress={onUploadPress}>
        <Text style={styles.label}>Kartu Tanda Penduduk (KTP)</Text>
        <View style={styles.uploadBox}>
          <View style={styles.uploadContent}>
            <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.icon} /> 
            <Text>Mengunggah</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.uploadContainer}>
        <Text style={styles.label}>Surat Perjanjian Sewa Lahan</Text>
        <View style={styles.uploadBox}>
          <View style={styles.uploadContent}>
            <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.icon} />
            <Text>Mengunggah</Text>
          </View>
        </View>
      </View>

      <View style={styles.uploadContainer}>
        <Text style={styles.label}>Surat Izin Usaha Perdagangan (SIUP)</Text>
        <View style={styles.uploadBox}>
          <View style={styles.uploadContent}>
            <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.icon} />
            <Text>Mengunggah</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>KIRIM</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onUploadPress}>
        <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.floatingIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },  
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 110,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 30,
  },
  label: {
    fontWeight: '600',
    marginBottom: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  placeholder: {
    color: '#a0a0a0',
    fontSize: 15,
    fontWeight: '600',
  },
  uploadContainer: {
    marginBottom: 30,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    height: 110,
    justifyContent: 'center',
  },
  uploadContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontWeight: 'bold',
  },
  floatingIcon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default Sewa;
