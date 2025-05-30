import BackButton from "@/components/backButtonTopNav";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Opsi = () => {
    const handleOpsiPress = (Option: string) => {
        const router = useRouter();
        switch (Option) {
        case "Sewa":
            router.push("./petani/kepemilikanLahan/opsiSewa");
            break;
        case "Pemilik":
            router.push("./petani/kepemilikanLahan/opsiPemilik");
            break;
        } 
    };

    return (
        <View style={styles.container}>
            <BackButton />

            <View style={styles.content}>
                <Text style={styles.title}>Kepemilikan{'\n'}Lahan</Text>

                <TouchableOpacity 
                style={styles.opsiButton}
                onPress={() => handleOpsiPress("Sewa")}>
                    <Text style={styles.opsiText}>Sewa</Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={styles.opsiButton}
                onPress={() => handleOpsiPress("Pemilik")}>
                    <Text style={styles.opsiText}>Pemilik</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    marginTop: 80,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  opsiButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  opsiText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Opsi;