import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
// import { auth } from '../../firebase';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
// import { firebaseApp } from '../../firebase'; 
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { doc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';
import { db, firebaseApp } from '../../lib/firebase';




export default function LoginScreen() {
  const router = useRouter();
  // const recaptchaVerifier = useRef(null);
  const recaptchaVerifier = useRef<FirebaseRecaptchaVerifierModal>(null);
  const auth = getAuth(firebaseApp);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState<string | null>(null);

  const sendVerification = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const id = await phoneProvider.verifyPhoneNumber(
        '+62' + phoneNumber,
        recaptchaVerifier.current!

      );
      setVerificationId(id);
      Alert.alert('Kode dikirim', 'Silakan periksa WhatsApp Anda');
    } catch (err) {
      if (err instanceof Error) {
        Alert.alert('Error', err.message);
      } else {
        Alert.alert('Error', 'Terjadi kesalahan');
      }
    }
  };

  const confirmCode = async () => {
      if (!verificationId) {

    Alert.alert('Error', 'Verifikasi belum dimulai.');
    return;
  }
    try {

      const credential = PhoneAuthProvider.credential(verificationId, code);
      await signInWithCredential(auth, credential);
      const user = auth.currentUser;

       if (user) {
      await setDoc(doc(db, 'users', user.uid), {
        phone: user.phoneNumber,
        role: 'petani', // ganti sesuai pilihan user
        createdAt: new Date(),
      });
    }



      Alert.alert('Sukses', 'Verifikasi berhasil!');
      router.push('/login/registrasi-akun');




    } catch (err) {
      Alert.alert('Gagal', 'Kode salah atau kedaluwarsa');
    }
  };

  return (
    <View style={styles.login}>
      {/* <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={auth.app.options}
      /> */}
      <FirebaseRecaptchaVerifierModal
  ref={recaptchaVerifier}
  firebaseConfig={firebaseApp.options}
/>


      <View style={styles.groupParent}>
        <Text style={styles.title}>Registrasi Akun</Text>
        <Text style={styles.subtitle}>Nomor Telepon</Text>
      </View>

      <View style={styles.inputGroup}>
        <View style={styles.prefixBox}>
          <Text style={styles.prefixText}>+62</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="81234567890"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <View style={styles.kirimKodeContainer}>
        <Text style={styles.kirimKodeLabel}>Kirim Kode</Text>
        <TouchableOpacity style={styles.codeButton}
        onPress={() => router.push('/login/verif')
        /* sendVerification */}>
          <View style={styles.buttonContent}>
            <Image
              style={styles.icon}
            />
            <Text style={styles.buttonTextGreen}>Whatsapp</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.codeButton}
        onPress={() => router.push('/login/verif')
        /* sendVerification */
        }>
          <View style={styles.buttonContent}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/messages 1.png')}
            />
            <Text style={styles.buttonTextBlue}>SMS</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Belum punya akun?</Text>
        <TouchableOpacity onPress={() => router.push('/login/registrasi-akun')}>
          <Text style={styles.link}>Buat akun sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  groupParent: {
    marginTop: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    color: '#84b067',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 4,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  prefixBox: {
    width: 70,
    height: 60,
    borderColor: '#91c077',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  prefixText: {
    fontSize: 20,
  },
  phoneInput: {
    flex: 1,
    height: 60,
    borderColor: '#91c077',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  kirimKodeContainer: {
    marginTop: 30,
  },
  kirimKodeLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  codeButton: {
    borderColor: '#84b067',
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 44,
    marginBottom: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonTextGreen: {
    color: '#84b067',
    fontSize: 16,
  },
  buttonTextBlue: {
    color: '#007aff',
    fontSize: 16,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerText: {
    fontWeight: '600',
  },
  link: {
    fontSize: 15,
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});
