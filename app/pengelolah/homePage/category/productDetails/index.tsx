"use client"

import { Ionicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function PeteRajaProductScreen() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  // Format number to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
  }

  const relatedProducts = [
    {
      id: 1,
      name: "Beras Putih Dedeng",
      price: 19000,
      rating: 81,
      image: require("../../../../../assets/images/foods/fishes.jpeg"),
      bestSeller: true,
    },
    {
      id: 2,
      name: "Shitake Dedeng",
      price: 19000,
      rating: 90,
      image: require("../../../../../assets/images/foods/fishes.jpeg"),
      bestSeller: true,
    },
    {
      id: 3,
      name: "Jamur Dedeng",
      price: 65000,
      rating: 90,
      image: require("../../../../../assets/images/foods/fishes.jpeg"),
      bestSeller: true,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../../../assets/images/foods/fishes.jpeg")}
            style={styles.productImage}
            contentFit="cover"
          />

          {/* Back Button */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <View style={styles.backButtonInner}>
              <Ionicons name="arrow-back" size={20} color="#22c55e" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <View style={styles.productHeader}>
            <View style={styles.productTitleSection}>
              <Text style={styles.productName}>Pete Raja</Text>
              <Text style={styles.productPrice}>Rp36.000/Kg</Text>
            </View>

            <TouchableOpacity style={styles.partnerButton}>
              <Text style={styles.handshakeEmoji}>🤝</Text>
              <Text style={styles.partnerText}>Jadikan Mitral</Text>
            </TouchableOpacity>
          </View>

          {/* Location Info */}
          <View style={styles.locationSection}>
            <View style={styles.locationItem}>
              <Ionicons name="location-outline" size={16} color="#22c55e" />
              <Text style={styles.locationText}>Ngawi, Jawa Timur</Text>
            </View>
            <Text style={styles.farmName}>Pete's Paradise</Text>
          </View>

          {/* Guarantee Info */}
          <View style={styles.guaranteeSection}>
            <Ionicons name="shield-checkmark-outline" size={16} color="#22c55e" />
            <View style={styles.guaranteeInfo}>
              <Text style={styles.guaranteeTitle}>Garansi Tiba</Text>
              <Text style={styles.guaranteeDate}>10 Maret - 15 Maret</Text>
            </View>
          </View>

          {/* Store Info */}
          <View style={styles.storeSection}>
            <View style={styles.storeHeader}>
              <Image
                source={require("../../../../../assets/images/foods/fishes.jpeg")} // Use a valid local image
                style={styles.storeAvatar}
                contentFit="cover"
                />
              <Text style={styles.storeName}>Pak Iman</Text>
            </View>

            <View style={styles.storeStats}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>4</Text>
                <Text style={styles.statLabel}>Product</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>81%</Text>
                <Text style={styles.statLabel}>Store Rating</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>91%</Text>
                <Text style={styles.statLabel}>Response Chat</Text>
              </View>
            </View>
          </View>

          {/* Product Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionTitle}>Product Description</Text>
            <Text style={styles.descriptionText}>
              Pete Raja adalah varietas pete (petai) premium dengan biji besar, warna hijau terang, dan aroma khas yang
              kuat. Dijual dalam keadaan segar mentah, langsung dari kebun setelah dipanen. Cocok untuk sambal, tumisan,
              atau olahan tradisional seperti nasi goreng pete.
            </Text>
          </View>

          {/* Refund Requirement */}
          <TouchableOpacity style={styles.refundSection}>
            <Text style={styles.refundText}>Refund Requirement</Text>
            <Ionicons name="chevron-down" size={20} color="#9ca3af" />
          </TouchableOpacity>

          {/* Top Category Badge */}
          <View style={styles.topCategoryBadge}>
            <Ionicons name="trophy-outline" size={16} color="#fbbf24" />
            <Text style={styles.topCategoryText}>Top 3 in Strawberry Category</Text>
          </View>

          {/* Review Section */}
          <View style={styles.reviewSection}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewTitle}>Review</Text>
              <TouchableOpacity style={styles.reviewsButton}>
                <Text style={styles.reviewsButtonText}>500 Reviews</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ratingSection}>
              <Ionicons name="star" size={16} color="#fbbf24" />
              <Text style={styles.ratingText}>Rating: 89%</Text>
            </View>

            {/* Customer Review */}
            <View style={styles.customerReview}>
              <View style={styles.reviewerInfo}>
                <Image
                    source={require("../../../../../assets/images/foods/fishes.jpeg")} // Use a valid local image
                    style={styles.storeAvatar}
                    contentFit="cover"
                    />
                <View style={styles.reviewerDetails}>
                  <Text style={styles.reviewerName}>Angga Hamzah</Text>
                  <View style={styles.reviewerRating}>
                    <Ionicons name="star" size={12} color="#fbbf24" />
                    <Text style={styles.reviewerRatingText}>98%</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.reviewText}>
                The mushrooms are delicious and totally worth the price! For just $5.000, you get fresh and flavorful
                mushrooms that taste great in any dish. The texture is soft but still has a nice bite, making it perfect
                for stir-fries or soups.
              </Text>

              {/* Review Images */}
              <View style={styles.reviewImages}>
                <Image
                    source={require("../../../../../assets/images/foods/fishes.jpeg")} 
                    style={styles.storeAvatar}
                    contentFit="cover"
                />
                <Image
                    source={require("../../../../../assets/images/foods/fishes.jpeg")} 
                    style={styles.storeAvatar}
                    contentFit="cover"
                    />
                <Image
                    source={require("../../../../../assets/images/foods/fishes.jpeg")} 
                    style={styles.storeAvatar}
                    contentFit="cover"
                    />
                
              </View>
            </View>

            <TouchableOpacity style={styles.seeMoreButton}>
              <Text style={styles.seeMoreText}>Lihat Selengkapnya</Text>
              <Ionicons name="chevron-down" size={16} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* Related Products */}
          <View style={styles.relatedProductsSection}>
            <Text style={styles.relatedProductsTitle}>Produk lain dari toko ini!</Text>

            {relatedProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={[styles.relatedProductCard, hoveredProduct === product.id && styles.relatedProductCardHovered]}
                onPressIn={() => setHoveredProduct(product.id)}
                onPressOut={() => setHoveredProduct(null)}
              >
                <Image source={require("../../../../../assets/images/foods/fishes.jpeg")}  style={styles.relatedProductImage} contentFit="cover" />

                <View style={styles.relatedProductInfo}>
                  <Text
                    style={[
                      styles.relatedProductName,
                      hoveredProduct === product.id && styles.relatedProductNameHovered,
                    ]}
                  >
                    {product.name}
                  </Text>
                  <Text
                    style={[
                      styles.relatedProductPrice,
                      hoveredProduct === product.id && styles.relatedProductPriceHovered,
                    ]}
                  >
                    {formatCurrency(product.price)}
                  </Text>

                  <View style={styles.relatedProductBadges}>
                    <View style={styles.relatedRatingBadge}>
                      <Ionicons name="thumbs-up" size={10} color="white" />
                      <Text style={styles.relatedRatingText}>{product.rating}%</Text>
                    </View>
                    {product.bestSeller && (
                      <View style={styles.relatedBestSellerBadge}>
                        <Text style={styles.relatedBestSellerText}>Best Seller</Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Bottom Spacing for Footer */}
          <View style={styles.bottomSpacing}></View>
        </View>
      </ScrollView>

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#6b7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => router.push("/konsumen/homePage/cart")}>
          <Ionicons name="bag-outline" size={24} color="#6b7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  scrollContainer: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    height: 300,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
  },
  backButtonInner: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productInfo: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  productTitleSection: {
    flex: 1,
  },
  productName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
  },
  partnerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef3c7",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fbbf24",
  },
  handshakeEmoji: {
    fontSize: 16,
    marginRight: 4,
  },
  partnerText: {
    fontSize: 12,
    color: "#92400e",
    fontWeight: "500",
  },
  locationSection: {
    marginBottom: 16,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  locationText: {
    fontSize: 14,
    color: "#4b5563",
    marginLeft: 4,
  },
  farmName: {
    fontSize: 14,
    color: "#6b7280",
    marginLeft: 20,
  },
  guaranteeSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  guaranteeInfo: {
    marginLeft: 8,
  },
  guaranteeTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111",
  },
  guaranteeDate: {
    fontSize: 12,
    color: "#6b7280",
  },
  storeSection: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  storeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  storeAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  storeStats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  descriptionSection: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
    textAlign: "justify",
  },
  refundSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
    marginBottom: 16,
  },
  refundText: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
  },
  topCategoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef3c7",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  topCategoryText: {
    fontSize: 14,
    color: "#92400e",
    marginLeft: 4,
    fontWeight: "500",
  },
  reviewSection: {
    marginBottom: 24,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  reviewsButton: {
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  reviewsButtonText: {
    fontSize: 12,
    color: "#6b7280",
  },
  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  ratingText: {
    fontSize: 14,
    color: "#111",
    marginLeft: 4,
    fontWeight: "500",
  },
  customerReview: {
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  reviewerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  reviewerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  reviewerDetails: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    marginBottom: 2,
  },
  reviewerRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewerRatingText: {
    fontSize: 12,
    color: "#fbbf24",
    marginLeft: 2,
    fontWeight: "600",
  },
  reviewText: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
    marginBottom: 12,
  },
  reviewImages: {
    flexDirection: "row",
    gap: 8,
  },
  reviewImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  seeMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  seeMoreText: {
    fontSize: 14,
    color: "#6b7280",
    marginRight: 4,
  },
  relatedProductsSection: {
    marginBottom: 20,
  },
  relatedProductsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 16,
  },
  relatedProductCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  relatedProductCardHovered: {
    backgroundColor: "#bbf7d0",
    borderColor: "#22c55e",
  },
  relatedProductImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  relatedProductInfo: {
    flex: 1,
  },
  relatedProductName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  relatedProductNameHovered: {
    color: "white",
  },
  relatedProductPrice: {
    fontSize: 14,
    color: "#111",
    marginBottom: 8,
  },
  relatedProductPriceHovered: {
    color: "white",
  },
  relatedProductBadges: {
    flexDirection: "row",
    gap: 6,
  },
  relatedRatingBadge: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  relatedRatingText: {
    color: "white",
    fontSize: 10,
    fontWeight: "600",
  },
  relatedBestSellerBadge: {
    backgroundColor: "#fbbf24",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
  },
  relatedBestSellerText: {
    color: "white",
    fontSize: 10,
    fontWeight: "600",
  },
  bottomSpacing: {
    height: 80,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  footerButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buyNowText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})
