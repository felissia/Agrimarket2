"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface NotificationItem {
  id: string
  productName: string
  orderCode: string
  message: string
  timestamp: string
  image: any 
}

export default function NotificationsScreen() {
  const router = useRouter()

  const notifications: NotificationItem[] = [
    {
      id: "1",
      productName: "Strawberry Iman",
      orderCode: "ORO001",
      message: "telah sampai ditujuan!",
      timestamp: "12 April 2025, 10:07 PM",
      image: require("../../../assets/images//foods/strawberry-notif.jpg"), 
    },
    {
      id: "2",
      productName: "Oyong Iman",
      orderCode: "ORO002",
      message: "telah sampai ditujuan!",
      timestamp: "13 April 2025, 10:06 PM",
      image: require("../../../assets/images/foods/cucumber-notif.jpeg"), 
    },
    {
      id: "3",
      productName: "Oyong Iman",
      orderCode: "ORO004",
      message: "telah sampai ditujuan!",
      timestamp: "14 April 2025, 09:08 PM",
      image: require("../../../assets/images/foods/cucumber-notif.jpeg"), 
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/petani/homePage" as any)}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifikasi</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.notificationsList}>
          {notifications.map((notification) => (
            <TouchableOpacity key={notification.id} style={styles.notificationCard} activeOpacity={0.7}>
              <Image source={notification.image} style={styles.productImage} />
              <View style={styles.notificationContent}>
                <Text style={styles.productTitle}>
                  {notification.productName} ({notification.orderCode}) {notification.message}
                </Text>
                <Text style={styles.timestamp}>{notification.timestamp}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginRight: 32,
  },
  headerSpacer: {
    width: 32,
  },
  scrollView: {
    flex: 1,
  },
  notificationsList: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    lineHeight: 20,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: "#999",
  },
})
