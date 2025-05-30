"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import { FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

interface Bank {
  id: string
  name: string
  code: string
}


export default function TambahRekeningPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    namaAkun: "",
    selectedBank: "",
    nomorAkun: "",
  })
  const [showBankModal, setShowBankModal] = useState(false)

  const banks: Bank[] = [
    { id: "1", name: "Bank Central Asia (BCA)", code: "BCA" },
    { id: "2", name: "Bank Mandiri", code: "MANDIRI" },
    { id: "3", name: "Bank Negara Indonesia (BNI)", code: "BNI" },
    { id: "4", name: "Bank Rakyat Indonesia (BRI)", code: "BRI" },
    { id: "5", name: "Bank CIMB Niaga", code: "CIMB" },
    { id: "6", name: "Bank Danamon", code: "DANAMON" },
    { id: "7", name: "Bank Permata", code: "PERMATA" },
    { id: "8", name: "Bank OCBC NISP", code: "OCBC" },
    { id: "9", name: "Bank Maybank", code: "MAYBANK" },
    { id: "10", name: "Bank BTN", code: "BTN" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleBankSelect = (bank: Bank) => {
    setFormData((prev) => ({
      ...prev,
      selectedBank: bank.name,
    }))
    setShowBankModal(false)
  }

  const handleSubmit = () => {
    // Validate form
    if (!formData.namaAkun || !formData.selectedBank || !formData.nomorAkun) {
      // Show error message if fields are empty
      return
    }

    // Navigate to success screen 
    router.push("/konsumen/profile/settings/banking/addAccount/successMessage")
  }

  const renderBankItem = ({ item }: { item: Bank }) => (
    <TouchableOpacity style={styles.bankItem} onPress={() => handleBankSelect(item)}>
      <Text style={styles.bankName}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tambah Rekening</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Form Content */}
      <View style={styles.content}>
        {/* Nama Akun */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nama Akun</Text>
          <TextInput
            style={styles.input}
            value={formData.namaAkun}
            onChangeText={(value) => handleInputChange("namaAkun", value)}
            placeholder="Contoh: Cathlyn Shanice Darmawan"
            placeholderTextColor="#999"
          />
        </View>

        {/* Pilih Akun Bank */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Pilih Akun Bank</Text>
          <TouchableOpacity style={styles.dropdownInput} onPress={() => setShowBankModal(true)}>
            <Text style={[styles.dropdownText, !formData.selectedBank && styles.placeholderText]}>
              {formData.selectedBank || "Pilih Akun Bank"}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Nomor Akun */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nomor Akun</Text>
          <TextInput
            style={styles.input}
            value={formData.nomorAkun}
            onChangeText={(value) => handleInputChange("nomorAkun", value)}
            placeholder="Contoh: Cathlyn Shanice Darmawan"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>TAMBAH</Text>
        </TouchableOpacity>
      </View>

      {/* Bank Selection Modal */}
      <Modal visible={showBankModal} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Pilih Bank</Text>
              <TouchableOpacity onPress={() => setShowBankModal(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={banks}
              renderItem={renderBankItem}
              keyExtractor={(item) => item.id}
              style={styles.bankList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
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
    padding: 20,
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
    paddingVertical: 14,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#FFFFFF",
  },
  dropdownInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  placeholderText: {
    color: "#999",
  },
  buttonContainer: {
    padding: 20,
  },
  submitButton: {
    backgroundColor: "#2B6CB0",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  bankList: {
    flex: 1,
  },
  bankItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F8F8F8",
  },
  bankName: {
    fontSize: 16,
    color: "#333",
  },
})
