"use client"

import { Ionicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface Product {
  id: string
  name: string
  price: number
  rating: number
  image: any
  bestSeller: boolean
}

export default function VegetablesCategoryScreen() {
  // Format number to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
  }

  const products: Product[] = [
    {
      id: "1",
      name: "Pete Raja",
      price: 19000,
      rating: 81,
      image: require("../../../../assets/images/foods/pureHoney.jpeg"),
      bestSeller: true,
    },
    {
      id: "2",
      name: "Deli Shitake",
      price: 19000,
      rating: 81,
      image: require("../../../../assets/images/foods/pureHoney.jpeg"),
      bestSeller: true,
    },
    {
      id: "3",
      name: "Beras Putih Iman",
      price: 19000,
      rating: 81,
      image: require("../../../../assets/images/foods/pureHoney.jpeg"),
      bestSeller: true,
    },
  ]

  const handleProductPress = (product: Product) => {
    // Navigate to product detail page
    router.push(`/pengelolah/product/${product.id}` as any)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kategori</Text>
        <View style={styles.headerSpacer}></View>

        {/* Vegetable Illustration */}
        <View style={styles.categoryIllustration}>
          <Image
            source={require("../../../../assets/images/foods/pureHoney.jpeg")}
            style={styles.illustrationImage}
            contentFit="contain"
          />
        </View>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Category Info */}
        <View style={styles.categoryInfo}>
          <Text style={styles.categoryTitle}>Sayur</Text>
          <Text style={styles.categoryDescription}>
            Temukan berbagai jenis sayur segar langsung dari petani lokal! Kami menghadirkan sayuran berkualitas tinggi,
            dipetik setiap hari dan dikemas dengan standar higienis. Cocok untuk pengolahan lebih lanjut!
          </Text>
        </View>

        {/* Products Section */}
        <View style={styles.productsSection}>
          <Text style={styles.productsTitle}>Produk</Text>

          {products.map((product) => (
            <TouchableOpacity key={product.id} style={styles.productCard} onPress={() => handleProductPress(product)}>
              <Image source={product.image} style={styles.productImage} contentFit="cover" />

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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    position: "relative",
  },
  backButton: {
    padding: 4,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  headerSpacer: {
    flex: 1,
  },
  categoryIllustration: {
    position: "absolute",
    right: 16,
    top: 12,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationImage: {
    width: 50,
    height: 50,
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
    fontSize: 32,
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
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  productsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 16,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
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
    marginRight: 16,
    backgroundColor: "#f3f4f6",
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
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
    marginBottom: 12,
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
