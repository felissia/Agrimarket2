"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BottomNavigation from "../../../components/BottomNavigation"

export default function ProfileScreen() {
  const router = useRouter()

  const handleSettingsPress = () => {
    router.push("/petani/profile/settings")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerSpacer} />
          <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Toko Pak Iman</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.crownEmoji}>👑</Text>
            <Text style={styles.profileTitle}>Raja Pete</Text>
          </View>
        </View>

        {/* Toko Petani Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Toko Petani</Text>
          <View style={styles.storeCard}>
            <View style={styles.storeIcon}>
              <Text style={styles.storeEmoji}>🏪</Text>
            </View>
            <View style={styles.storeContent}>
              <Text style={styles.storeTitle}>Toko Pak Iman</Text>
              <Text style={styles.storeDescription}>
                Petani yang berkomitmen untuk menyediakan produk berkualitas tinggi dengan pelayanan terpercaya.
              </Text>
            </View>
          </View>
        </View>

        {/* Achievements Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Title yang Sudah Dikumpulkan</Text>
          <View style={styles.achievementCard}>
            <View style={styles.achievementIcon}>
              <Text style={styles.achievementEmoji}>👑</Text>
            </View>
            <View style={styles.achievementContent}>
              <Text style={styles.achievementTitle}>Raja Pete</Text>
              <Text style={styles.achievementDescription}>
                Sosok yang tidak hanya memiliki hasil panen berkualitas tinggi...
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="profil" />
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerSpacer: {
    width: 24,
  },
  settingsButton: {
    padding: 8,
  },
  profileSection: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  crownEmoji: {
    fontSize: 16,
    marginRight: 6,
  },
  profileTitle: {
    fontSize: 16,
    color: "#F57C00",
    fontWeight: "500",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  storeCard: {
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
  storeIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#E8F5E8",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  storeEmoji: {
    fontSize: 28,
  },
  storeContent: {
    flex: 1,
    justifyContent: "center",
  },
  storeTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  storeDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  achievementCard: {
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
  achievementIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  achievementEmoji: {
    fontSize: 28,
  },
  achievementContent: {
    flex: 1,
    justifyContent: "center",
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F57C00",
    marginBottom: 6,
  },
  achievementDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
})
