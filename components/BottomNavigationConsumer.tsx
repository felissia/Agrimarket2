"use client"
import { Ionicons } from "@expo/vector-icons"
import { usePathname, useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function BottomNavigationConsumer() {
  const router = useRouter()
  const pathname = usePathname()

  const tabs = [
    {
      name: "Beranda",
      icon: "home-outline",
      activeIcon: "home",
      route: "/konsumen/homePage",
    },
    {
      name: "Percakapan",
      icon: "chatbubble-outline",
      activeIcon: "chatbubble",
      route: "/konsumen/chat",
    },
    {
      name: "Profil",
      icon: "person-outline",
      activeIcon: "person",
      route: "/konsumen/profil",
    },
  ]

  const isActive = (route: string) => {
    return pathname.startsWith(route)
  }

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = isActive(tab.route)
        return (
          <TouchableOpacity key={tab.name} style={styles.tab} onPress={() => router.push(tab.route as any)}>
            <Ionicons
              name={active ? (tab.activeIcon as any) : (tab.icon as any)}
              size={24}
              color={active ? "#4CAF50" : "#9E9E9E"}
            />
            <Text style={[styles.tabText, active && styles.activeTabText]}>{tab.name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 8,
    paddingBottom: 20, // For safe area
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 4,
  },
  tabText: {
    fontSize: 12,
    color: "#9E9E9E",
    marginTop: 2,
  },
  activeTabText: {
    color: "#4CAF50",
    fontWeight: "500",
  },
})
