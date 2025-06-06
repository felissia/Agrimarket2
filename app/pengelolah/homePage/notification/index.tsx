"use client"

import { Ionicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface NotificationItem {
  id: string
  title: string
  date: string
  image: any
  type: "pembelian" | "toko"
}

export default function NotificationsScreen() {
  const [activeTab, setActiveTab] = useState<"pembelian" | "toko">("pembelian")

  const notifications: NotificationItem[] = [
    // Pembelian notifications
    {
      id: "1",
      title: "Strawberry Dedeng telah sampai di tempat anda!",
      date: "24 April 2025, 12:07 PM",
      image: require("../../../../assets/images/foods/strawberry-notif.jpg"),
      type: "pembelian",
    },
    {
      id: "2",
      title: "Oyong Iman telah sampai di tempat anda!",
      date: "23 April 2025, 10:06 PM",
      image: require("../../../../assets/images/foods/strawberry-notif.jpg"),
      type: "pembelian",
    },
    // Toko notifications
    {
      id: "3",
      title: "Selai Strawberry (OR1101) telah sampai di Port Klang!",
      date: "24 April 2025, 12:07 PM",
      image: require("../../../../assets/images/foods/strawberry-notif.jpg"),
      type: "toko",
    },
    {
      id: "4",
      title: "Jus Detox Oyong (OR1102) telah sampai di Port Jimbara!",
      date: "16 April 2025, 21:34 AM",
      image: require("../../../../assets/images/foods/strawberry-notif.jpg"),
      type: "toko",
    },
    {
      id: "5",
      title: "Jus Detox Oyong (OR1103) telah sampai di Port Jimbara!",
      date: "15 April 2025, 20:06 AM",
      image: require("../../../../assets/images/foods/strawberry-notif.jpg"),
      type: "toko",
    },
  ]

  const filteredNotifications = notifications.filter((notification) => notification.type === activeTab)

  const handleTabPress = (tab: "pembelian" | "toko") => {
    setActiveTab(tab)
  }

  const handleNotificationPress = (notification: NotificationItem) => {
    // Handle notification item press
    console.log("Notification pressed:", notification.title)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/pengelolah/homePage")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifikasi</Text>
        <View style={styles.headerSpacer}></View>
      </View>

      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "pembelian" && styles.activeTabButton]}
          onPress={() => handleTabPress("pembelian")}
        >
          <Text style={[styles.tabButtonText, activeTab === "pembelian" && styles.activeTabButtonText]}>Pembelian</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === "toko" && styles.activeTabButton]}
          onPress={() => handleTabPress("toko")}
        >
          <Text style={[styles.tabButtonText, activeTab === "toko" && styles.activeTabButtonText]}>Toko</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationsList} showsVerticalScrollIndicator={false}>
        {filteredNotifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={styles.notificationItem}
            onPress={() => handleNotificationPress(notification)}
          >
            <Image source={notification.image} style={styles.notificationImage} contentFit="cover" />

            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationDate}>{notification.date}</Text>
            </View>

            <View style={styles.notificationIcon}>
              <Ionicons name="notifications" size={20} color="#ef4444" />
            </View>
          </TouchableOpacity>
        ))}

        {filteredNotifications.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>Tidak ada notifikasi</Text>
          </View>
        )}
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
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
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
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "white",
    gap: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#f9fafb",
    alignItems: "center",
  },
  activeTabButton: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6b7280",
  },
  activeTabButtonText: {
    color: "white",
  },
  notificationsList: {
    flex: 1,
    backgroundColor: "white",
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  notificationImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#f3f4f6",
  },
  notificationContent: {
    flex: 1,
    marginRight: 12,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111",
    lineHeight: 20,
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 12,
    color: "#6b7280",
  },
  notificationIcon: {
    padding: 4,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#6b7280",
  },
})
