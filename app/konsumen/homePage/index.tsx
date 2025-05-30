"use client"
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BottomNavigationConsumer from "../../../components/BottomNavigationConsumer";

const { width } = Dimensions.get("window")

interface Product {
  id: string
  name: string
  price: string
  image: string | number
  rating?: number
  badge?: string
}

interface Category {
  id: string
  name: string
  image: string | number 
}

interface CarouselItem {
  id: string
  title: string
  subtitle: string
  image: string | number 
  backgroundColor: string
}

export default function ConsumerHomePage() {
  const router = useRouter()
  const [searchText, setSearchText] = useState("")
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const carouselRef = useRef<FlatList>(null)

  const carouselData: CarouselItem[] = [
    {
      id: "1",
      title: "Diskon 50%",
      subtitle: "untuk Kategori Sayur",
      image: require('../../../assets/images/drinks/greenDetoxJuice.jpg'),
      backgroundColor: "#4CAF50",
    },
    {
      id: "2",
      title: "Promo Buah",
      subtitle: "Beli 2 Gratis 1",
      image: "https://www.fastandup.in/nutrition-world/wp-content/uploads/2023/06/fruit-min.png",
      backgroundColor: "#FF9800",
    },
    {
      id: "3",
      title: "Flash Sale",
      subtitle: "Produk Organik",
      image: "https://australianorganicproducts.com.au/cdn/shop/files/WE_RE_MOVING_INTO_A_NEW_WAREHOUSE_1781_x_1117_px_1920_x_1280_px_500x.png?v=1716435857",
      backgroundColor: "#2196F3",
    },
  ]

  const categories: Category[] = [
    {
      id: "1",
      name: "Ikan",
      image: require('../../../assets/images/drinks/greenDetoxJuice.jpg'),
    },
    {
      id: "2",
      name: "Buah",
      image: "https://www.snexplores.org/wp-content/uploads/2022/10/1440_SS_fruit_feat.jpg",
    },
    {
      id: "3",
      name: "Sayuran",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSH-j-YJf88B94jYV3qpKtFEvuccxE62YygA&s",
    },
    {
      id: "4",
      name: "Daging",
      image: "https://www.hayesmeats.com/wp-content/uploads/2018/11/test2.jpg",
    },
    {
      id: "5",
      name: "Kacang",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL76TFAhDLVXREZBX10fc70Xp_n1xt4nkgGQ&s",
    },
    {
      id: "6",
      name: "Jus",
      image: "https://www.tasteofhome.com/wp-content/uploads/2019/06/juices-shutterstock_121270552.jpg",
}]

  const products: Product[] = [
    {
      id: "1",
      name: "Jus Detox Oyong", 
      price: "Rp10,000",
      image: require('../../../assets/images/drinks/greenDetoxJuice.jpg'),
      rating: 98,
      badge: "Best Seller",
    },
    {
      id: "2",
      name: "Selai Strawberry",
      price: "Rp25,000",
       image: require('../../../assets/images/foods/Strawberry-Jam.png'), 
      rating: 95,
    },
    {
      id: "3",
      name: "Madu Murni Organik",
      price: "Rp45,000",
       image: require('../../../assets/images/foods/pureHoney.jpeg'), 
      rating: 99,
      badge: "Organic",
    },
    {
      id: "4",
      name: "Keripik Singkong Pedas",
      price: "Rp15,000",
      image: require('../../../assets/images/foods/spicyCassavas.jpg'),  
      rating: 92,
    },
  ]

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselData.length <= 1) return

      const nextIndex = (currentCarouselIndex + 1) % carouselData.length
      carouselRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
        viewPosition: 0,
      })
      setCurrentCarouselIndex(nextIndex)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [currentCarouselIndex, carouselData.length])

  const handleSearch = () => {
    console.log("Search:", searchText)
  }

  const handleCartPress = () => {
    router.push("/konsumen/homePage/cart" as any)
  }

const handleNotificationPress = () => {
  router.push("/konsumen/homePage/notification" as any);
};
  const handleCategoryPress = (category: Category) => {
    // router.push(`/konsumen/category/${category.id}`)
  }

  const handleProductPress = (product: Product) => {
    // router.push(`/konsumen/product/${product.id}`)
  }

  const renderCarouselItem = ({ item }: { item: CarouselItem }) => (
    <View style={styles.carouselItem}>
      <Image
        source={
          typeof item.image === "string"
            ? { uri: item.image }
            : item.image
        }
        style={styles.carouselBackgroundImage}
      />
      <View style={styles.carouselOverlay}>
        <View style={styles.carouselContent}>
          <View style={styles.carouselText}>
            <Text style={styles.carouselTitle}>{item.title}</Text>
            <Text style={styles.carouselSubtitle}>{item.subtitle}</Text>
          </View>
        </View>
      </View>
    </View>
  )

  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress(item)}>
      <Image
        source={
          typeof item.image === "string"
            ? { uri: item.image }
            : item.image
        }
        style={styles.categoryImage}
      />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  )

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => handleProductPress(item)}>
      <Image
        source={
          typeof item.image === "string"
            ? { uri: item.image }
            : item.image
        }
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.productMeta}>
          {item.rating && (
            <View style={styles.ratingContainer}>
              <Ionicons name="thumbs-up" size={14} color="#4CAF50" />
              <Text style={styles.ratingText}>{item.rating}%</Text>
            </View>
          )}
          {item.badge && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{item.badge}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
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
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
              <Text style={styles.notificationBadgeText}>3</Text>
            </View>
          </TouchableOpacity>

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
              onSubmitEditing={handleSearch}
            />
          </View>
          <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
            <Ionicons name="cart-outline" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kategori</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Products */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Produk</Text>
          <View style={styles.productsList}>
            {products.map((product) => (
              <View key={product.id} style={styles.productRow}>
                {renderProduct({ item: product })}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavigationConsumer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
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
    resizeMode: "cover",
  },
  carouselOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
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
  },
  // Section Styles
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  // Categories Styles
  categoriesList: {
    gap: 16,
    paddingRight: 20,
  },
  categoryItem: {
    alignItems: "center",
    width: 80,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#F8F9FA",
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    fontWeight: "500",
  },
  // Products Styles
  productsList: {
    gap: 16,
  },
  productRow: {
    marginBottom: 16,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 8,
  },
  productMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "500",
  },
  badgeContainer: {
    backgroundColor: "#FF9800",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "500",
  },
})
