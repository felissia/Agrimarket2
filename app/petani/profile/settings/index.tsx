"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function SettingsScreen() {
  const router = useRouter()

  const handleLogout = () => {
    Alert.alert("Keluar Akun", "Apakah Anda yakin ingin keluar dari akun?", [
      {
        text: "Batal",
        style: "cancel",
      },
      {
        text: "Keluar",
        style: "destructive",
        onPress: () => {
          try {
            console.log("Logging out user...")
            // Navigate to registration screen
            router.replace("/login/registrasi-akun")
          } catch (error) {
            console.error("Logout navigation error:", error)
            // Fallback to login index
            router.replace("/login")
          }
        },
      },
    ])
  }

  const handleMenuPress = (menuItem: string) => {
    console.log(`Pressed: ${menuItem}`)

    switch (menuItem) {
      case "Uang & Rekening":
        router.push("/petani/profile/settings/banking" as any)
        break
      case "Keamanan Akun":
        console.log("Navigate to security settings")
        break
      case "Alamat Toko":
        console.log("Navigate to store address")
        break
      case "Nama Petani":
        console.log("Navigate to edit farmer name")
        break
      case "Foto Petani":
        console.log("Navigate to edit farmer photo")
        break
      case "Deskripsi Toko Petani":
        console.log("Navigate to edit store description")
        break
      case "Status Verifikasi":
        console.log("Navigate to verification status")
        break
      case "Nomor Telepon":
        console.log("Navigate to edit phone number")
        break
      default:
        console.log(`No handler for: ${menuItem}`)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pengaturan</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Akun Saya Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Akun Saya</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </View>

          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress("Keamanan Akun")}>
              <Text style={styles.menuText}>Keamanan Akun</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress("Alamat Toko")}>
              <Text style={styles.menuText}>Alamat Toko</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, styles.lastMenuItem]}
              onPress={() => handleMenuPress("Uang & Rekening")}
            >
              <Text style={styles.menuText}>Uang & Rekening</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Identitas Section */}
        <View style={styles.section}>
          <TouchableOpacity
  style={styles.sectionHeader}
  activeOpacity={0.7}
onPress={() => router.push("/petani/profile/settings/identity" as never)}
>
  <Text style={styles.sectionTitle}>Identitas</Text>
  <Ionicons name="chevron-forward" size={20} color="#999" />
</TouchableOpacity>

          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress("Nama Petani")}>
              <Text style={styles.menuText}>Nama Petani</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress("Foto Petani")}>
              <Text style={styles.menuText}>Foto Petani</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress("Deskripsi Toko Petani")}>
              <Text style={styles.menuText}>Deskripsi Toko Petani</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress("Status Verifikasi")}>
              <Text style={styles.menuText}>Status Verifikasi</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, styles.lastMenuItem]}
              onPress={() => handleMenuPress("Nomor Telepon")}
            >
              <Text style={styles.menuText}>Nomor Telepon</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Keluar Akun Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Keluar Akun</Text>

          <TouchableOpacity style={styles.logoutButton} onPress={() => router.push('/login/registrasi-akun')}>
            <Text style={styles.logoutButtonText}>Keluar</Text>
          </TouchableOpacity>
        </View>

        {/* Extra padding at bottom for better scrolling */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginRight: 32,
  },
  headerSpacer: {
    width: 32,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
    backgroundColor: "#fff",
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logoutButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  bottomPadding: {
    height: 40,
  },
})
