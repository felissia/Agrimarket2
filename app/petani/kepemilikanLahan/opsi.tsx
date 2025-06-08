import BackButton from "@/components/backButtonTopNav";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";

// 🟡 Firebase imports
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "@/firebase"; // Adjust this path if needed

const Opsi = () => {
  const router = useRouter();

  const handleOpsiPress = async (option: string) => {
    // 🔵 Replace with actual user ID (from Firebase Auth or context)
    const userId = "user123"; 

  //   try {
  //     // 🔴 Save the option to Firestore
  //     await setDoc(doc(db, "userAnswers", userId), {
  //       kepemilikanLahan: option,
  //       timestamp: new Date()
  //     }, { merge: true });

  //     console.log("User option saved to Firebase:", option);

      // 🔵 Navigate after saving
      switch (option) {
        case "Sewa":
          router.push("/petani/kepemilikanLahan/opsiSewa");
          break;
        case "Pemilik":
          router.push("/petani/kepemilikanLahan/opsiPemilik");
          break;
      }
  //   } catch (error) {
  //     console.error("Failed to save to Firebase:", error);
  //     Alert.alert("Error", "Gagal menyimpan pilihan ke database.");
  //   }
  };

  return (
    <View style={styles.container}>
      <BackButton />

      <View style={styles.content}>
        <Text style={styles.title}>Kepemilikan{'\n'}Lahan</Text>

        <TouchableOpacity 
          style={styles.opsiButton}
          onPress={() => handleOpsiPress("Sewa")}
        >
          <Text style={styles.opsiText}>Sewa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.opsiButton}
          onPress={() => handleOpsiPress("Pemilik")}
        >
          <Text style={styles.opsiText}>Pemilik</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    marginTop: 160,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  opsiButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 16,
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
