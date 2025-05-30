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

export default function IdentityScreen() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nama: "Pak Iman",
    deskripsi: "Petani yang berkomitmen untuk menyediakan produk berkualitas tinggi dengan pelayanan terpercaya..",
    nomorTelepon: "081298092227",
  })
  const [isVerified] = useState(true)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSaveChanges = () => {
    // Navigate to forum profile page
    router.push("/petani/profile/settings/identity/forumProfile")
  }

  const handleProfileImagePress = () => {
    Alert.alert("Ganti Foto Profil", "Pilih sumber foto", [
      { text: "Kamera", onPress: () => console.log("Open camera") },
      { text: "Galeri", onPress: () => console.log("Open gallery") },
      { text: "Batal", style: "cancel" },
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identitas</Text>
        <View style={styles.headerRight} />
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
              placeholder="Masukkan nama lengkap"
              placeholderTextColor="#999"
            />
          </View>

          {/* Deskripsi Petani */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Deskripsi Petani</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.deskripsi}
              onChangeText={(value) => handleInputChange("deskripsi", value)}
              placeholder="Ceritakan tentang diri Anda sebagai petani"
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          {/* Nomor Telepon */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nomor Telepon</Text>
            <TextInput
              style={styles.input}
              value={formData.nomorTelepon}
              onChangeText={(value) => handleInputChange("nomorTelepon", value)}
              placeholder="Masukkan nomor telepon"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>

          {/* Status Verifikasi */}
          <View style={styles.verificationContainer}>
            <Text style={styles.label}>Status Verifikasi</Text>
            <View style={styles.verificationStatus}>
              <Text style={[styles.verificationText, isVerified && styles.verifiedText]}>
                {isVerified ? "Terverifikasi" : "Belum Terverifikasi"}
              </Text>
              {isVerified && <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>SIMPAN PERUBAHAN</Text>
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
  headerRight: {
    width: 32,
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
    borderColor: "#4CAF50",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#FFFFFF",
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
  verificationContainer: {
    marginBottom: 24,
  },
  verificationStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  verificationText: {
    fontSize: 16,
    color: "#666",
  },
  verifiedText: {
    color: "#4CAF50",
    fontWeight: "500",
  },
  buttonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  saveButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  saveButtonText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
})
