"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import BottomNavigation from "../../../components/BottomNavigation"

export default function PetaniHomepage() {
  const router = useRouter()

  const currentDate = new Date()
  const dateString = currentDate.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const handleNotificationPress = () => {
    router.push("/petani/homePage/notifications")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.greeting}>
              Halo, <Text style={styles.name}>Pak Iman</Text>
            </Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.location}>Ngawi, Jawa Timur</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>1</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Silahkan cari fitur yang anda ingin gunakan"
            placeholderTextColor="#999"
          />
        </View>

        {/* Weather Widget */}
        <View style={styles.weatherCard}>
          <View style={styles.weatherContent}>
            <Text style={styles.weatherDate}>{dateString}</Text>
            <Text style={styles.temperature}>30°C</Text>
          </View>
          <View style={styles.weatherIcon}>
            <View style={styles.sun} />
            <View style={styles.cloud} />
          </View>
        </View>

        {/* Navigation Icons */}
        <View style={styles.navGrid}>
          <TouchableOpacity style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: "#FFF3E0" }]}>
              <Text style={styles.navEmoji}>🌱</Text>
            </View>
            <Text style={styles.navLabel}>Plantify</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: "#E3F2FD" }]}>
              <Ionicons name="chatbubbles-outline" size={24} color="#1976D2" />
            </View>
            <Text style={styles.navLabel}>Forum</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: "#F3E5F5" }]}>
              <Ionicons name="school-outline" size={24} color="#7B1FA2" />
            </View>
            <Text style={styles.navLabel}>Kursus</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: "#FFF8E1" }]}>
              <Ionicons name="people-outline" size={24} color="#F57C00" />
            </View>
            <Text style={styles.navLabel}>Mitra</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: "#E8F5E8" }]}>
              <Ionicons name="document-text-outline" size={24} color="#388E3C" />
            </View>
            <Text style={styles.navLabel}>Catatan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <View style={[styles.navIcon, { backgroundColor: "#FFF3E0" }]}>
              <Ionicons name="folder-outline" size={24} color="#F57C00" />
            </View>
            <Text style={styles.navLabel}>Berkas</Text>
          </TouchableOpacity>
        </View>

        {/* Orders Section */}
        <View style={styles.ordersSection}>
          <Text style={styles.sectionTitle}>Pesanan Baru!</Text>

          <TouchableOpacity style={styles.orderCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=100&h=100&fit=crop" }}
              style={styles.orderImage}
            />
            <View style={styles.orderContent}>
              <Text style={styles.orderTitle}>1 Order baru saja di pesan oleh</Text>
              <Text style={styles.orderSubtitle}>Cathlyn Shanice, silahkan klik untuk</Text>
              <Text style={styles.orderSubtitle}>lihat detail.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.orderCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop" }}
              style={styles.orderImage}
            />
            <View style={styles.orderContent}>
              <Text style={styles.orderTitle}>1 Order baru saja di pesan oleh</Text>
              <Text style={styles.orderSubtitle}>evermoresatu, silahkan klik untuk</Text>
              <Text style={styles.orderSubtitle}>lihat detail.</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Panen Musim Maret Section */}
        <View style={styles.harvestSection}>
          <Text style={styles.sectionTitle}>Panen Musim Maret</Text>

          <TouchableOpacity style={styles.harvestCard}>
            <View style={styles.harvestIconContainer}>
              <View style={styles.harvestIcon}>
                <Text style={styles.harvestEmoji}>📅</Text>
                <Text style={styles.harvestEmoji}>🌾</Text>
                <Text style={styles.harvestEmoji}>🥬</Text>
              </View>
            </View>
            <View style={styles.harvestContent}>
              <Text style={styles.harvestMonth}>MARET</Text>
              <Text style={styles.harvestDescription}>
                Bulan Maret merupakan masa panen bagi beberapa komoditas pertanian, terutama jagung, padi dan kedelai.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="beranda" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    marginBottom: 80, // Space for bottom navigation
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    color: "#333",
    marginBottom: 4,
  },
  name: {
    color: "#4CAF50",
    fontWeight: "600",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  notificationButton: {
    position: "relative",
    padding: 8,
  },
  notificationBadge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "#F44336",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: "#333",
  },
  weatherCard: {
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#29B6F6",
  },
  weatherContent: {
    flex: 1,
  },
  weatherDate: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 8,
  },
  temperature: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  weatherIcon: {
    position: "relative",
    width: 80,
    height: 60,
  },
  sun: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFD54F",
  },
  cloud: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  navGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  navItem: {
    width: "33.33%",
    alignItems: "center",
    marginBottom: 24,
  },
  navIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  navEmoji: {
    fontSize: 24,
  },
  navLabel: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
  ordersSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  orderCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  orderContent: {
    flex: 1,
    justifyContent: "center",
  },
  orderTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  orderSubtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 18,
  },
  harvestSection: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  harvestCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  harvestIconContainer: {
    marginRight: 16,
    justifyContent: "center",
  },
  harvestIcon: {
    width: 80,
    height: 80,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  harvestEmoji: {
    fontSize: 20,
    margin: 2,
  },
  harvestContent: {
    flex: 1,
    justifyContent: "center",
  },
  harvestMonth: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 8,
  },
  harvestDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
})
