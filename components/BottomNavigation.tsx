"use client"

import { Ionicons } from "@expo/vector-icons"
import { usePathname, useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface BottomNavigationProps {
  activeTab?: string
}

export default function BottomNavigation({ activeTab }: BottomNavigationProps) {
  const router = useRouter()
  const pathname = usePathname()

  const getActiveTab = () => {
    if (activeTab) return activeTab

    // Auto-detect active tab based on current route
    if (
      pathname === "/petani/homepagePetani" ||
      (pathname.includes("/petani") && !pathname.includes("/profile") && !pathname.includes("/notifications"))
    )
      return "beranda"
    if (pathname.includes("/profile")) return "profil"
    if (pathname.includes("/toko")) return "toko"
    if (pathname.includes("/chat")) return "percakapan"
    return "beranda"
  }

  const currentTab = getActiveTab()

  const handleBerandaPress = () => {
    console.log("Beranda pressed - navigating to homepage")
    router.push("/petani/homepagePetani")
  }

  const navigateToTab = (tab: string) => {
    switch (tab) {
      case "beranda":
        handleBerandaPress()
        break
      case "toko":
        console.log("Toko navigation - route not implemented yet")
        break
      case "percakapan":
        console.log("Percakapan navigation - route not implemented yet")
        break
      case "profil":
        router.push("/petani/profile")
        break
    }
  }

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.bottomNavItem} onPress={handleBerandaPress}>
        <Ionicons name="home" size={24} color={currentTab === "beranda" ? "#4CAF50" : "#999"} />
        <Text style={[styles.bottomNavLabel, { color: currentTab === "beranda" ? "#4CAF50" : "#999" }]}>Beranda</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigateToTab("toko")}>
        <Ionicons name="storefront-outline" size={24} color={currentTab === "toko" ? "#4CAF50" : "#999"} />
        <Text style={[styles.bottomNavLabel, { color: currentTab === "toko" ? "#4CAF50" : "#999" }]}>Toko</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigateToTab("percakapan")}>
        <Ionicons name="chatbubble-outline" size={24} color={currentTab === "percakapan" ? "#4CAF50" : "#999"} />
        <Text style={[styles.bottomNavLabel, { color: currentTab === "percakapan" ? "#4CAF50" : "#999" }]}>
          Percakapan
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigateToTab("profil")}>
        <Ionicons name="person-outline" size={24} color={currentTab === "profil" ? "#4CAF50" : "#999"} />
        <Text style={[styles.bottomNavLabel, { color: currentTab === "profil" ? "#4CAF50" : "#999" }]}>Profil</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomNavItem: {
    flex: 1,
    alignItems: "center",
  },
  bottomNavLabel: {
    fontSize: 12,
    marginTop: 4,
  },
})
