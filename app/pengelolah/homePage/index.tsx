"use client"

import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useEffect, useRef, useState } from "react"
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import BottomNavigationPengelolah from "../../../components/BottomNavigationPengelolah"

const { width } = Dimensions.get("window")

interface CarouselItem {
  id: string
  title: string
  subtitle: string
  image: any
  backgroundColor: string
}

export default function PengelolahHomeScreen() {
  const [searchText, setSearchText] = useState("")
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const carouselRef = useRef<FlatList>(null)

  const carouselData: CarouselItem[] = [
    {
      id: "1",
      title: "Diskon 50%",
      subtitle: "untuk Kategori Sayur",
      image: require("../../../assets/images/banner/vegetables.jpg"),
      backgroundColor: "#4CAF50",
    },
    {
      id: "2",
      title: "Promo Buah",
      subtitle: "Beli 2 Gratis 1",
      image: require("../../../assets/images/banner/fruits.jpg"),
      backgroundColor: "#FF9800",
    },
    {
      id: "3",
      title: "Flash Sale",
      subtitle: "Produk Organik",
      image: require("../../../assets/images/banner/organic.jpg"),
      backgroundColor: "#2196F3",
    },
  ]

  // Format number to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
  }

  const actionButtons: {
    id: number
    title: string
    icon: "star" | "people" | "clipboard" | "folder"
    color: string
    route: string
  }[] = [
    {
      id: 1,
      title: "Plantify",
      icon: "star",
      color: "#fbbf24",
      route: "/pengelolah/plantify",
    },
    {
      id: 2,
      title: "Mitra",
      icon: "people",
      color: "#3b82f6",
      route: "/pengelolah/mitra",
    },
    {
      id: 3,
      title: "Catatan",
      icon: "clipboard",
      color: "#8b5cf6",
      route: "/pengelolah/catatan",
    },
    {
      id: 4,
      title: "Berkas",
      icon: "folder",
      color: "#06b6d4",
      route: "/pengelolah/berkas",
    },
  ]

  const categories = [
    {
      id: 1,
      image: require('../../../assets/images/foods/fishes.jpeg'),
      route: "/pengelolah/category/fish",
    },
    {
      id: 2,
      image: require('../../../assets/images/foods/fishes.jpeg'),
      route: "/pengelolah/category/fish",
    },
    {
      id: 3,
      image: require('../../../assets/images/foods/fishes.jpeg'),
      route: "/pengelolah/category/fish",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Pete Raja",
      price: 19000,
      rating: 91,
       image: require("../../../assets/images/foods/fishes.jpeg"),
      bestSeller: true,
      route: "/pengelolah/product/pete-raja",
    },
    {
      id: 2,
      name: "Beras Premium",
      price: 25000,
      rating: 88,
      image: require("../../../assets/images/foods/fishes.jpeg"),
      bestSeller: true,
      route: "/pengelolah/product/beras-premium",
    },
    {
      id: 3,
      name: "Jagung Manis",
      price: 15000,
      rating: 85,
       image: require("../../../assets/images/foods/fishes.jpeg"),
      bestSeller: false,
      route: "/pengelolah/product/jagung-manis",
    },
    {
      id: 4,
      name: "Kedelai Organik",
      price: 22000,
      rating: 89,
    image: require("../../../assets/images/foods/fishes.jpeg"),
      bestSeller: true,
      route: "/pengelolah/product/kedelai-organik",
    },
  ]

  // Auto-slide carousel
  useEffect(() => {
    if (carouselData.length <= 1) return

    const interval = setInterval(() => {
      setCurrentCarouselIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % carouselData.length
        if (carouselRef.current && !isNaN(nextIndex) && nextIndex >= 0 && nextIndex < carouselData.length) {
          carouselRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
            viewPosition: 0,
          })
        }
        return nextIndex
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselData.length])

  const handleActionPress = (action: { id: number; title: string; icon: string; color: string; route: string }) => {
    router.push(action.route as any)
  }

  const handleCategoryPress = (category: { id: number; image: string; route: string }) => {
    router.push(category.route as any)
  }

  const handleProductPress = (product: {
    id: number
    name: string
    price: number
    rating: number
    image: string
    bestSeller: boolean
    route: string
  }) => {
    router.push(product.route as any)
  }

  const handleCartPress = () => {
    router.push("/pengelolah/homePage/cart" as any)
  }

  const handleNotificationPress = () => {
    router.push("/pengelolah/homePage/notification" as any)
  }

  const renderCarouselItem = ({ item }: { item: CarouselItem }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselBackgroundImage} resizeMode="cover" />
      <View style={[styles.carouselOverlay]}>
        <View style={styles.carouselContent}>
          <View style={styles.carouselText}>
            <Text style={styles.carouselTitle}>{item.title}</Text>
            <Text style={styles.carouselSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
      </View>
    </View>
  )

  const onCarouselScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width
    const index = event.nativeEvent.contentOffset.x / slideSize
    const roundIndex = Math.round(index)

    if (roundIndex !== currentCarouselIndex) {
      setCurrentCarouselIndex(roundIndex)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView style={styles.scrollContainer} 
       contentContainerStyle={{ paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}>
        {/* Carousel Banner with Notification */}
        <View style={styles.carouselContainer}>
          <FlatList
            ref={carouselRef}
            data={carouselData}
            renderItem={renderCarouselItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onCarouselScroll}
            scrollEventThrottle={16}
            getItemLayout={(data, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
          />

          {/* Notification Icon */}
          <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
            <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>5</Text>
            </View>
          </TouchableOpacity>

          {/* Carousel Indicators */}
          <View style={styles.carouselIndicators}>
            {carouselData.map((_, index) => (
              <View key={index} style={[styles.indicator, currentCarouselIndex === index && styles.activeIndicator]} />
            ))}
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Cari produk"
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
            <Ionicons name="cart-outline" size={24} color="#4CAF50" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          {actionButtons.map((action) => (
            <TouchableOpacity key={action.id} style={styles.actionButton} onPress={() => handleActionPress(action)}>
              <View style={[styles.actionIcon, { backgroundColor: `${action.color}20` }]}>
                <Ionicons name={action.icon} size={24} color={action.color} />
              </View>
              <Text style={styles.actionText}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} onPress={() => router.push("/pengelolah/categories" as any)}>
            <Text style={styles.sectionTitle}>Kategori</Text>
            <Ionicons name="chevron-forward" size={20} color="#6b7280" />
          </TouchableOpacity>

          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => handleCategoryPress(category)}
              >
                <Image source={{ uri: category.image }} style={styles.categoryImage} resizeMode="cover" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Products Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Produk</Text>
          </View>

          <View style={styles.productsContainer}>
            {products.map((product) => (
              <TouchableOpacity key={product.id} style={styles.productCard} onPress={() => handleProductPress(product)}>
                <Image source={{ uri: product.image }} style={styles.productImage} resizeMode="cover" />

                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productPrice}>{formatCurrency(product.price)}</Text>

                  <View style={styles.productBadges}>
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
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing}></View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigationPengelolah activeTab="beranda" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flex: 1,
  },
  // Carousel Styles
  carouselContainer: {
    height: 180,
    position: "relative",
  },
  carouselItem: {
    width: width,
    height: 180,
    position: "relative",
  },
  carouselBackgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  carouselOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
  },
  carouselContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  carouselText: {
    flex: 1,
  },
  carouselTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  carouselSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.9,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  carouselIndicators: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  activeIndicator: {
    backgroundColor: "#FFFFFF",
  },
  // Notification Styles
  notificationButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF5722",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  // Search Styles
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 48,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  cartButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF5722",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  // Action Buttons
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  actionButton: {
    alignItems: "center",
    flex: 1,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: "#374151",
    fontWeight: "500",
  },
  // Section Styles
  section: {
    backgroundColor: "white",
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
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
    color: "#111",
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f3f4f6",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  productsContainer: {
    gap: 12,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 12,
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
    marginBottom: 8,
  },
  productBadges: {
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
    height: 40,
  },
})
