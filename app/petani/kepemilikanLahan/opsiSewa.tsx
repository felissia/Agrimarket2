import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import BackButton from '@/components/backButtonTopNav';

const Sewa: React.FC = () => {
  const [nib, setNib] = useState('');
  const [ktpImage, setKtpImage] = useState<any>(null);
  const [sewaImage, setSewaImage] = useState<any>(null);
  const [siupImage, setSiupImage] = useState<any>(null);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async (setter: React.Dispatch<any>) => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert('Akses ke galeri dibutuhkan.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setter(result.assets[0]);
      }
    } catch (error) {
      console.log('Image Picker Error:', error);
      alert('Gagal memilih gambar.');
    }
  };

  const uploadToFirestore = async () => {
    if (!nib || !ktpImage || !sewaImage || !siupImage) {
      setSubmitStatus('error');
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    const userId = 'user123';

    const payload = {
      nib,
      ktp: ktpImage.base64,
      surat_sewa: sewaImage.base64,
      siup: siupImage.base64,
      createdAt: new Date(),
    };

    try {
      await setDoc(doc(db, 'dokumenSewa', userId), payload);
      setSubmitStatus('success');
    } catch (error) {
      console.log('Upload Error:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const renderImageUpload = (label: string, image: any, onPress: () => void) => (
    <TouchableOpacity style={styles.uploadContainer} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.uploadBox}>
        {!image ? (
          <View style={styles.uploadContent}>
            <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.icon} />
            <Text>Mengunggah</Text>
          </View>
        ) : (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 10, borderRadius: 10 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BackButton />
      <Text style={styles.header}>Dokumen yang Dibutuhkan</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nomor Induk Berusaha (NIB)</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Contoh: 3564712890123"
            value={nib}
            onChangeText={setNib}
            style={styles.input}
            placeholderTextColor="#a0a0a0"
          />
        </View>
      </View>

      {renderImageUpload('Kartu Tanda Penduduk (KTP)', ktpImage, () => pickImage(setKtpImage))}
      {renderImageUpload('Surat Perjanjian Sewa Lahan', sewaImage, () => pickImage(setSewaImage))}
      {renderImageUpload('Surat Izin Usaha Perdagangan (SIUP)', siupImage, () => pickImage(setSiupImage))}

      <TouchableOpacity
        style={[styles.submitButton, loading && { backgroundColor: '#ccc' }]}
        onPress={uploadToFirestore}
        disabled={loading}
      >
        <Text style={styles.submitText}>
          {loading ? 'MENGIRIM...' : 'KIRIM'}
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="small" color="#84b067" style={{ marginTop: 15 }} />}
      {submitStatus === 'success' && (
        <Text style={styles.successMessage}>✅ Dokumen berhasil diunggah!</Text>
      )}
      {submitStatus === 'error' && (
        <Text style={styles.errorMessage}>❌ Gagal mengunggah. Pastikan semua dokumen sudah diisi.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 0,
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
  input: {
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
    paddingVertical: 10,
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
    marginBottom: 10,
  },
  submitText: {
    fontWeight: 'bold',
  },
  successMessage: {
    color: 'green',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  errorMessage: {
    color: 'red',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Sewa;