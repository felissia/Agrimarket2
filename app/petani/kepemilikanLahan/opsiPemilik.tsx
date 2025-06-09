// import BackButton from '@/components/backButtonTopNav';
// import React, { useCallback } from 'react';
// import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// const Pemilik: React.FC = () => {
//   const onUploadPress = useCallback(() => {
//     // Handle upload logic here
//   }, []);

//   return (

//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.backWrapper}>
//         <BackButton />
//       </View>

//       <Text style={styles.header}>Dokumen yang Dibutuhkan</Text>

//       <View style={styles.inputGroup}>
//         <Text style={styles.label}>Nomor Induk Berusaha (NIB)</Text>
//         <View style={styles.inputBox}>
//           <Text style={styles.placeholder}>Contoh: 3564712890123</Text>
//         </View>
//       </View>

//       <TouchableOpacity style={styles.uploadContainer} onPress={onUploadPress}>
//         <Text style={styles.label}>Kartu Tanda Penduduk (KTP)</Text>
//         <View style={styles.uploadBox}>
//           <View style={styles.uploadContent}>
//             <Image source={require("../../../assets/images/upload_icon.png")} style={styles.icon} />
//             <Text>Mengunggah</Text>
//           </View>
//         </View>
//       </TouchableOpacity>

//       <View style={styles.uploadContainer}>
//         <Text style={styles.label}>Sertifikat Tanah</Text>
//         <View style={styles.uploadBox}>
//           <View style={styles.uploadContent}>
//             <Image source={require("../../../assets/images/upload_icon.png")} style={styles.icon} />
//             <Text>Mengunggah</Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.uploadContainer}>
//         <Text style={styles.label}>Surat Izin Usaha Perdagangan (SIUP)</Text>
//         <View style={styles.uploadBox}>
//           <View style={styles.uploadContent}>
//             <Image source={require("../../../assets/images/upload_icon.png")} style={styles.icon} />
//             <Text>Mengunggah</Text>
//           </View>
//         </View>
//       </View>

//       <TouchableOpacity style={styles.submitButton} onPress={onUploadPress}>
//         <Text style={styles.submitText}>KIRIM</Text>
//       </TouchableOpacity>

//       {/* <TouchableOpacity onPress={onUploadPress}>
//         <Image source={require("../../../assets/images/upload_icon.png")} style={styles.floatingIcon} />
//       </TouchableOpacity> */}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   backWrapper: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     zIndex: 10,
//   }, 
//   container: {
//     backgroundColor: '#fff',
//     padding: 20,
//     paddingTop: 110,
//   },
//   header: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   inputGroup: {
//     marginBottom: 30,
//   },
//   label: {
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   inputBox: {
//     borderWidth: 1,
//     borderColor: '#84b067',
//     borderRadius: 10,
//     height: 50,
//     justifyContent: 'center',
//     paddingLeft: 20,
//   },
//   placeholder: {
//     color: '#a0a0a0',
//     fontSize: 15,
//     fontWeight: '600',
//   },
//   uploadContainer: {
//     marginBottom: 30,
//   },
//   uploadBox: {
//     borderWidth: 1,
//     borderColor: '#84b067',
//     borderRadius: 10,
//     height: 110,
//     justifyContent: 'center',
//   },
//   uploadContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 20,
//   },
//   icon: {
//     width: 25,
//     height: 25,
//   },
//   submitButton: {
//     borderWidth: 1,
//     borderColor: '#84b067',
//     borderRadius: 10,
//     height: 55,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   submitText: {
//     fontWeight: 'bold',
//   },
//   floatingIcon: {
//     width: 25,
//     height: 25,
//     alignSelf: 'center',
//     marginVertical: 20,
//   },
// });

// export default Pemilik;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DocumentUploadScreen = () => {
  const [nib, setNib] = useState('');
  const [nibError, setNibError] = useState(false);

  // Placeholder for handling document uploads
  const handleDummyUpload = (docName: string) => {
    Alert.alert(`Upload Placeholder`, `This would upload ${docName} to Firebase`);
    // TODO: Implement actual upload to Firebase here
  };

  const handleSubmit = () => {
    if (!nib.trim()) {
      setNibError(true);
      Alert.alert('Error', 'Nomor Induk Berusaha (NIB) harus diisi.');
      return;
    }

    // ✅ Passed validation
    Alert.alert('Sukses', 'Semua data valid. Data akan dikirim ke backend.');

    // TODO: Send `nib` and uploaded file references to Firebase Firestore here
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backWrapper}>
          <Ionicons name="arrow-back" size={24} color="#4b8a3f" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Dokumen yang Dibutuhkan</Text>

        {/* NIB Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nomor Induk Berusaha (NIB)</Text>
          <View style={[styles.inputBox, nibError && styles.inputError]}>
            <TextInput
              placeholder="Contoh: 3564712890123"
              style={styles.textInput}
              placeholderTextColor="#a0a0a0"
              keyboardType="numeric"
              value={nib}
              onChangeText={(text) => {
                setNib(text);
                setNibError(false);
              }}
            />
          </View>
          {nibError && <Text style={styles.errorText}>NIB tidak boleh kosong</Text>}
        </View>

        {/* Upload Boxes */}
        {[
          'Kartu Tanda Penduduk (KTP)',
          'Sertifikat Tanah',
          'Surat Izin Usaha Perdagangan (SIUP)',
        ].map((doc, index) => (
          <View key={index} style={styles.uploadContainer}>
            <Text style={styles.label}>{doc}</Text>
            <TouchableOpacity
              style={styles.uploadBox}
              onPress={() => handleDummyUpload(doc)} // Dummy upload handler
            >
              <Ionicons name="cloud-upload-outline" size={24} color="#000" />
              <Text style={styles.uploadText}>Mengunggah</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Kirim Dokumen</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DocumentUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 70,
  },
  backWrapper: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#84b067',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  inputError: {
    borderColor: '#ff5a5f',
  },
  errorText: {
    color: '#ff5a5f',
    marginTop: 4,
    fontSize: 12,
  },
  uploadContainer: {
    marginBottom: 20,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
  },
  uploadText: {
    fontSize: 16,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#4b8a3f',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  submitText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});