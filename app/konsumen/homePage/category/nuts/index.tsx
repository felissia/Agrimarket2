"use client"

import { Ionicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function VegetablesCategoryScreen() {
  // Format number to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
  }

  const vegetableProducts = [
    {
      id: 1,
      name: "Pete Raja",
      price: 19000,
      rating: 81,
      image: "/placeholder.svg?height=80&width=80",
      bestSeller: true,
    },
    {
      id: 2,
      name: "Deli Shitake",
      price: 19000,
      rating: 81,
      image: "/placeholder.svg?height=80&width=80",
      bestSeller: true,
    },
    {
      id: 3,
      name: "Beras Putih Iman",
      price: 19000,
      rating: 81,
      image: "/placeholder.svg?height=80&width=80",
      bestSeller: true,
    },
    {
      id: 4,
      name: "Kangkung Segar",
      price: 15000,
      rating: 75,
      image: "/placeholder.svg?height=80&width=80",
      bestSeller: false,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/konsumen/homePage")} style={styles.backButton}>
          <View style={styles.backButtonInner}>
            <Ionicons name="arrow-back" size={20} color="#22c55e" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kategori</Text>
        <View style={styles.headerSpacer}></View>

        {/* Vegetable Illust */}
        <View style={styles.vegetableIllustration}>
                    <Image
                        source={require("../../../../../assets/images/icons/vegetable.png")}
                     style={{ width: 160, height: 160, resizeMode: "contain" }}
                    />
                </View>
              </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Category Info */}
        <View style={styles.categoryInfo}>
          <Text style={styles.categoryTitle}>Kacang</Text>
          <Text style={styles.categoryDescription}>
            Temukan berbagai jenis kacang segar langsung dari petani lokal! Kami menghadirkan sayuran berkualitas tinggi,
            dipetik setiap hari dan dikemas dengan standar higienis. Cocok untuk pengolahan lebih lanjut!
          </Text>
        </View>

        {/* Products Section */}
        <View style={styles.productsSection}>
          <Text style={styles.productsTitle}>Produk</Text>

         {vegetableProducts.map((product) => (
  <TouchableOpacity
    key={product.id}
    style={styles.productCard}
    onPress={() => {
       {
        router.push("/konsumen/homePage/category/productDetails" as any);
      }
      // You can add more conditions for other products if needed
    }}
  >
    <Image source={{ uri: product.image }} style={styles.productImage} contentFit="cover" />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{formatCurrency(product.price)}</Text>
      <View style={styles.badgeContainer}>
        <View style={styles.ratingBadge}>
          <Ionicons name="thumbs-up" size={12} color="white" />
          <Text style={styles.ratingText}>{product.rating}%</Text>
        </View>
        {product.bestSeller && (
          <View style={styles.bestSellerBadge}>
            <Text style={styles.bestSellerText}>Best Seller</Text>
          </View>
        )}
      </View>
    </View>
  </TouchableOpacity>
))}
        </View>

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
    paddingVertical: 24,
    minHeight: 80,
    backgroundColor: "white",
    position: "relative",
    zIndex: 10,
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
  vegetableIllustration: {
  position: "absolute",
  right: -1,
  top: 10,            
  width: 60,
  height: 60,
  
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  zIndex: 11,
  },
  vegetableEmoji: {
    fontSize: 24,
  },
  crateEmoji: {
    fontSize: 20,
    marginLeft: -8,
  },
  scrollContainer: {
    flex: 1,
  },
  categoryInfo: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
  },
  categoryDescription: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
    textAlign: "justify",
  },
  productsSection: {
    paddingHorizontal: 16,
  },
  productsTitle: {
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#f3f4f6",
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
