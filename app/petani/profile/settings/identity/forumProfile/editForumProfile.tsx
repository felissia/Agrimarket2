"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"

export default function ForumProfileEditPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nama: "Pak Iman",
    bio: "Sedang menjalani kehidupan...",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

const handleSave = () => {
  router.replace({
    pathname: "/petani/profile/settings/identity/forumProfile",
    params: { nama: formData.nama, bio: formData.bio },
  });
}


//   const handleSave = () => {
//     // Save the changes and navigate back to forum profile
//     Alert.alert("Berhasil", "Profil forum berhasil diperbarui!", [
//       {
//         text: "OK",
//         onPress: () => router.back(),
//       },
//     ])
//   }

  const handleProfileImagePress = () => {
    Alert.alert("Ganti Foto Profil", "Pilih sumber foto", [
      { text: "Kamera", onPress: () => console.log("Open camera") },
      { text: "Galeri", onPress: () => console.log("Open gallery") },
      { text: "Batal", style: "cancel" },
    ])
  }

  const handleMenuPress = () => {
    Alert.alert("Menu", "Pilih opsi", [
      { text: "Simpan", onPress: handleSave },
      { text: "Batal", style: "cancel" },
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/petani/profile/settings/identity")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forum Profile</Text>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={handleProfileImagePress}>
            <Image source={{ uri: "/placeholder.svg?height=120&width=120" }} style={styles.profileImage} />
            <View style={styles.cameraIcon}>
              <Ionicons name="camera" size={16} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* Nama */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama</Text>
            <TextInput
              style={styles.input}
              value={formData.nama}
              onChangeText={(value) => handleInputChange("nama", value)}
              placeholder="Masukkan nama"
              placeholderTextColor="#999"
            />
          </View>

          {/* Bio */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={styles.input}
              value={formData.bio}
              onChangeText={(value) => handleInputChange("bio", value)}
              placeholder="Sedang menjalani kehidupan..."
              placeholderTextColor="#999"
            />
          </View>
        </View>
      </ScrollView>

      {/* Save Button - Hidden in this minimal design, accessible via menu */}
      <View style={styles.hiddenSaveContainer}>
        <TouchableOpacity style={styles.hiddenSaveButton} onPress={handleSave}>
          <Text style={styles.hiddenSaveText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  menuButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  profileImageContainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E0E0E0",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#FFFFFF",
  },
  // Hidden save button (accessible via menu)
  hiddenSaveContainer: {
    position: "absolute",
    bottom: 0, // Hidden off-screen
    left: 0,
    right: 0,
    padding: 20,
  },
  hiddenSaveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  hiddenSaveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
})
