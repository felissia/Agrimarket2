import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


// const confirmation = JSON.parse(confirmationString);

export default function OTPVerificationPage() {
  const router = useRouter();
  const { confirmationString } = useLocalSearchParams();
  const [phone, setPhone] = useState('');

  // Safely parse confirmationString (handle string | string[])
  const confirmation = React.useMemo(() => {
    try {
      return JSON.parse(
        Array.isArray(confirmationString) ? confirmationString[0] : confirmationString || '{}'
      );
    } catch {
      return null;
    }
  }, [confirmationString]);
  
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  // To confirm in the backend
  const confirmCode = async () => {
  const code = otp.join('');
  try {
    await confirmation.confirm(code);
    // Success! Navigate to Choose Role
    router.push('/login/choose-role');
  } catch (error) {
    console.log('Invalid code.');
    Alert.alert('Error', 'Kode OTP salah');
  }
};
  
   

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verifikasi OTP</Text>
      <Text style={styles.subtitle}>Silahkan isi nomor OTP yang telah dikirimkan melalui Whatsapp.</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity 
      onPress={() => router.push('/login/choose-role')}style={styles.confirmButton}>
        <Text style={styles.confirmText}>Konfirmasi</Text>
      </TouchableOpacity>

      <View style={styles.bottomSection}>
        <Text style={styles.notReceived}>Tidak mendapat pesan?</Text>

        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendText}>Kirim Ulang</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.tryOther}>Atau coba cara lain</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 24,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#7AA35A',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: '#888',
      marginBottom: 24,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 32,
    },
    otpInput: {
      borderWidth: 1,
      borderColor: '#7AA35A',
      borderRadius: 8,
      width: 56,
      height: 56,
      textAlign: 'center',
      fontSize: 20,
      color: '#000',
    },
    confirmButton: {
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 12,
      paddingVertical: 12,
      alignItems: 'center',
      marginBottom: 32,
    },
    confirmText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    bottomSection: {
      alignItems: 'flex-start',
    },
    notReceived: {
      fontSize: 14,
      marginBottom: 8,
    },
    resendButton: {
      borderWidth: 1,
      borderRadius: 8,
      paddingVertical: 6,
      paddingHorizontal: 16,
      marginBottom: 8,
    },
    resendText: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    tryOther: {
      fontSize: 14,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
  });
  