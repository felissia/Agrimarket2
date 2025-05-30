import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function BenefitsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/konsumen/profile")} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Silver Header with Handshake */}
      <View style={styles.silverHeader}>
        <Text style={styles.silverTitle}>SILVER</Text>
        <View style={styles.handshakeContainer}>
          <Text style={styles.handshakeEmoji}>🤝</Text>
          <Text style={styles.sparkleEmoji}>✨</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Benefits Title */}
        <Text style={styles.benefitsTitle}>Keuntungan</Text>

        {/* Benefit Cards */}
        <View style={styles.benefitCard}>
          <View style={styles.benefitRow}>
            <View style={[styles.iconContainer, styles.yellowIcon]}>
              <Text style={styles.iconEmoji}>🎫</Text>
            </View>
            <Text style={styles.benefitText}>Voucher Spesial Tiap Bulan</Text>
          </View>
        </View>

        <View style={styles.benefitCard}>
          <View style={styles.benefitRow}>
            <View style={[styles.iconContainer, styles.redIcon]}>
              <Text style={styles.iconEmoji}>📢</Text>
            </View>
            <Text style={styles.benefitText}>Akses Awal untuk Promo</Text>
          </View>
        </View>

        {/* Benefits Description */}
        <Text style={styles.descriptionText}>
          Agrimarket memberikan voucher ekslusif kepada member Silver setiap awal bulan, seperti:
        </Text>

        <View style={styles.bulletContainer}>
          <Text style={styles.bulletText}>• Gratis ongkir tanpa minimum belanja</Text>
          <Text style={styles.bulletText}>• Cashback koin Shopee</Text>
          <Text style={styles.bulletText}>• Diskon produk tertentu</Text>
        </View>

        <Text style={styles.finalText}>
          Keuntungan lainnya yaitu akses untuk promo 5.5 spesial Agrimarket setiap 5 Mei untuk tiap tahun.
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 4,
  },
  silverHeader: {
    alignItems: "center",
    paddingVertical: 24,
  },
  silverTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 16,
  },
  handshakeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  handshakeEmoji: {
    fontSize: 36,
    marginRight: 8,
  },
  sparkleEmoji: {
    fontSize: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  benefitsTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
    marginBottom: 24,
  },
  benefitCard: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#136d15",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  yellowIcon: {
    backgroundColor: "#fef3c7",
  },
  redIcon: {
    backgroundColor: "#fee2e2",
  },
  iconEmoji: {
    fontSize: 24,
  },
  benefitText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    flex: 1,
  },
  descriptionText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 16,
  },
  bulletContainer: {
    marginBottom: 16,
  },
  bulletText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 4,
  },
  finalText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    marginBottom: 32,
  },
})
