import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginPage() {
    const [phone, setPhone] = useState('');
    const router = useRouter();

    const handleSendCode = () => {
        // Corrected template string
        console.log(`Sending code to +62${phone}`);
        // Navigate to verify page or call API
        router.push('/login/registrasi-akun'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Masuk ke Akun</Text>
            <Text style={styles.subtitle}>Nomor Telepon</Text>

            <View style={styles.phoneInputContainer}>
                <View style={styles.countryCodeContainer}>
                    <Text style={styles.countryCode}>+62</Text>
                </View>
                <TextInput
                    style={styles.phoneInput}
                    placeholder="Nomor Telepon"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSendCode}>
                <Text style={styles.buttonText}>Kirim Kode</Text>
            </TouchableOpacity>
        </View>
    );
}

// Add basic styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        color: '#84b067',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Sora',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    countryCodeContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginRight: 10,
    },
    countryCode: {
        fontSize: 16,
    },
    phoneInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
