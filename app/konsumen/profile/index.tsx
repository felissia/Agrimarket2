import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import BottomNavigationConsumer from "../../../components/BottomNavigationConsumer"

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header with settings icon */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("../../../assets/images/people/profile.jpeg")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Agus Sutono</Text>
        <Text style={styles.membershipLevel}>SILVER</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Benefits Section */}
        <Text style={styles.benefitTitle}>Nikmati Benefit dari Tingkat Pembelian!</Text>

        <TouchableOpacity style={styles.benefitCard} onPress={() => router.push("/konsumen/profile/benefits")}>
          <View style={styles.benefitContent}>
            <View style={styles.iconContainer}>
              <Ionicons name="gift-outline" size={28} color="#f97316" />
             </View>
          <View style={styles.benefitTextContainer}>
            <Text style={styles.benefitCardTitle}>SILVER</Text>
            <Text style={styles.benefitDescription}>
              Anda merupakan bagian dari pelanggan pilihan kami yang mendapatkan berbagai keuntungan lebih setiap berbelanja.
            </Text>
          </View>
        </View>
      </TouchableOpacity>

        <TouchableOpacity style={styles.viewMoreButton} onPress={() => router.push("/konsumen/profile/benefits")}>
          <Text style={styles.viewMoreButtonText}>LIHAT BENEFIT TINGKAT LAIN!</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigationConsumer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  settingsButton: {
    padding: 4,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#41980a",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  membershipLevel: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "500",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#111",
  },
  benefitCard: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#41980a",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  benefitContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    marginRight: 12,
  },
  benefitTextContainer: {
    flex: 1,
  },
  benefitCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#111",
  },
  benefitDescription: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
  },
  viewMoreButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#41980a",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  viewMoreButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
})
