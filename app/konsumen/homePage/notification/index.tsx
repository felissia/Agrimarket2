"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Notification {
  id: string
  productName: string
  orderNumber: string
  message: string
  productImage: string
  timestamp: string
  isRead: boolean
}

export default function NotificationsPage() {
  const router = useRouter()

  const notifications: Notification[] = [
    {
      id: "1",
      productName: "Selai Strawberry",
      orderNumber: "OR3001",
      message: "telah sampai di rumah anda!",
      productImage: "https://www.mckenziesfoods.com.au/wp-content/uploads/2015/01/Strawberry-Jam.png",
      timestamp: "17 Mei 2025, 15:08 PM",
      isRead: false,
    },
    {
      id: "2",
      productName: "Jus Detox Oyong",
      orderNumber: "OR3002",
      message: "telah sampai di rumah anda!",
      productImage: "https://www.allrecipes.com/thmb/HLzzHgRXlA4yujAHsmFA19ejKko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230642-Healthy-Green-Juice-083-4x3-d8c13b4cb3504d44a701f8d3a2f5d24e.jpg",
      timestamp: "2 Mei 2025, 21:54 AM",
      isRead: false,
    },
    {
      id: "3",
      productName: "Jus Detox Oyong",
      orderNumber: "OR3003",
      message: "telah sampai di rumah anda!",
      productImage: "https://www.allrecipes.com/thmb/HLzzHgRXlA4yujAHsmFA19ejKko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230642-Healthy-Green-Juice-083-4x3-d8c13b4cb3504d44a701f8d3a2f5d24e.jpg",
      timestamp: "17 April 2025, 19:06 AM",
      isRead: true,
    },
  ]

  const handleNotificationPress = (notification: Notification) => {
    // Navigate to order details or product page
    // router.push(`/konsumen/order/${notification.orderNumber}`)
  }

  const renderNotification = ({ item }: { item: Notification }) => (
    <TouchableOpacity
      style={[styles.notificationCard, !item.isRead && styles.unreadCard]}
      onPress={() => handleNotificationPress(item)}
    >
      <Image source={{ uri: item.productImage }} style={styles.productImage} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>
          {item.productName} ({item.orderNumber}) {item.message}
        </Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifikasi</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        style={styles.notificationsList}
        contentContainerStyle={styles.notificationsContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  headerRight: {
    width: 40, // Same width as back button for centering
  },
  notificationsList: {
    flex: 1,
  },
  notificationsContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
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
  unreadCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E8F5E8",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    lineHeight: 22,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
})
