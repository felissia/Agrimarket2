import BackButton from '@/components/backButtonTopNav';
import React, { useCallback } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Pemilik: React.FC = () => {
  const onUploadPress = useCallback(() => {
    // Handle upload logic here
  }, []);

  return (

    <ScrollView contentContainerStyle={styles.container}>
        <BackButton />
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
        <Text style={styles.label}>Sertifikat Tanah</Text>
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

      <View style={styles.backButton}>
        <View style={styles.backButtonInner}>
          <View style={styles.backBox} />
          <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.backIcon} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 40,
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonInner: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  backBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#91c077',
  },
  backIcon: {
    position: 'absolute',
    top: '30%',
    left: '30%',
    width: 16,
    height: 16,
  },
});

export default Pemilik;
