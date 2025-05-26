import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrasi Akun</Text>
      <Text style={styles.subtitle}>Nomor Telepon</Text>

      
            <View style={styles.phoneInputRow}>
        <View style={styles.prefixBox}>
            <Text style={styles.prefixText}>+62</Text>
        </View>
        <TextInput
            style={styles.inputBox}
            keyboardType="number-pad"
            placeholder="8xxxxxxxxxx"
            value={phone}
            onChangeText={setPhone}
        />
     </View>


      <Text style={styles.sendCodeLabel}>Kirim Kode</Text>

      <TouchableOpacity onPress={() => router.push('/login/verif')}
      style={styles.buttonWhatsApp}>
        {/* <Image source={require('../../../assets/image/whatsapp.png')} style={styles.icon} /> */}
        <Text style={styles.buttonText}>Whatsapp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSMS}>
        {/* <Image source={require('../../../assets/image/sms.png')} style={styles.icon} /> */}
        <Text style={styles.buttonText}>SMS</Text>
      </TouchableOpacity>


         <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Sudah punya akun?</Text>
        <TouchableOpacity onPress={() => router.push('/login/index' as any)}>
            <Text style={[styles.loginLink, { textDecorationLine: 'underline' }]}>Masuk ke akun anda</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    phoneInputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12, // Space between +62 box and input
        marginBottom: 24,
      },
      
      prefixBox: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#84b067',
        borderRadius: 8,
      },
      
      prefixText: {
        fontSize: 16,
        color: '#333',
      },
      
      inputBox: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#84b067',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
      },
      
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#84b067',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
    marginBottom: 12,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 24,
  }, 
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
  },
  sendCodeLabel: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
  },
  buttonWhatsApp: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  buttonSMS: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  footerLink: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 32,
    left: 20,
  },
  
  bottomText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  
  loginLink: {
    fontSize: 14,
    color: '#000000',
    marginTop: 4,
  },
  
});
