"use client"

import { Ionicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function OrderSuccessScreen() {
  // Format number to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
  }

  const navigateToHomePage = () => {
    // Navigate to consumer homePage
    router.push("/pengelolah/homePage")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToHomePage} style={styles.backButton}>
          <View style={styles.backButtonInner}>
            <Ionicons name="arrow-back" size={20} color="#22c55e" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pemesanan Berhasil</Text>
        <View style={styles.headerSpacer}></View>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Success Message */}
        <View style={styles.successCard}>
          <Text style={styles.successMessage}>
            Anda berhasil membayar sebesar Rp0, pemesanan telah berhasil dilakukan!
          </Text>
        </View>

        {/* Other Products Section */}
        <Text style={styles.sectionTitle}>Cek produk lain dari toko ini!</Text>

        {/* Product 1 - Selai Strawberry */}
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require("../../../../../assets/images/foods/Strawberry-Jam.png")}
            style={styles.productImage}
          />

          <View style={styles.productInfo}>
            <Text style={styles.productName}>Selai Strawberry</Text>
            <Text style={styles.productPrice}>{formatCurrency(25000)}</Text>

            <View style={styles.badgeContainer}>
              <View style={styles.ratingBadge}>
                <Ionicons name="thumbs-up" size={12} color="white" />
                <Text style={styles.ratingText}>81%</Text>
              </View>
              <View style={styles.bestSellerBadge}>
                <Text style={styles.bestSellerText}>Best Seller</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Product 2 - Keripik Strawberry */}
        <TouchableOpacity style={styles.productCard}>
          <Image
            source={require("../../../../../assets/images/foods/Strawberry-Jam.png")}
            style={styles.productImage}
          />

          <View style={styles.productInfo}>
            <Text style={styles.productName}>Keripik Strawberry</Text>
            <Text style={styles.productPrice}>{formatCurrency(30000)}</Text>

            <View style={styles.badgeContainer}>
              <View style={styles.ratingBadge}>
                <Ionicons name="thumbs-up" size={12} color="white" />
                <Text style={styles.ratingText}>67%</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  timeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
  statusIcons: {
    alignItems: "center",
  },
  notch: {
    width: 8,
    height: 8,
    backgroundColor: "#111",
    borderRadius: 4,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  signalBars: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 1,
  },
  bar: {
    width: 3,
    backgroundColor: "#111",
    borderRadius: 1,
  },
  bar1: { height: 8 },
  bar2: { height: 10 },
  bar3: { height: 12 },
  bar4: { height: 6, backgroundColor: "#d1d5db" },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: "#111",
    borderRadius: 2,
    padding: 1,
  },
  batteryLevel: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: 1,
    width: "75%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  backButton: {
    marginRight: 12,
  },
  backButtonInner: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#22c55e",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  headerSpacer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  successCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  successMessage: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#111",
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 8,
  },
  ratingBadge: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  bestSellerBadge: {
    backgroundColor: "#fbbf24",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  bestSellerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  bottomSpacing: {
    height: 32,
  },
})


