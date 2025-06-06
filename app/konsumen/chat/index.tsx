"use client"

import { Ionicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ChatListScreen() {
  const chatList = [
    {
      id: 1,
      name: "Distributor Bandung",
      lastMessage: "Kira-kira jika beli hari ini bisa sa...",
      avatar: "/placeholder.svg?height=48&width=48",
      time: "10:30",
      unread: 2,
    },
    {
      id: 2,
      name: "Ulung Distribution",
      lastMessage: "Saya ingin mengembalikan, kira...",
      avatar: "/placeholder.svg?height=48&width=48",
      time: "09:15",
      unread: 0,
    },
    {
      id: 3,
      name: "Distribusi Handal",
      lastMessage: "Kualitas hasil pengolahan anda...",
      avatar: "/placeholder.svg?height=48&width=48",
      time: "Yesterday",
      unread: 1,
    },
  ]

  const handleChatPress = (chatId: number) => {
    router.push(`/konsumen/chat/${chatId}` as any)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />


      {/* Header */}
      <View style={styles.header}>
        
        <Text style={styles.headerTitle}>Chat</Text>
        <View style={styles.headerSpacer}></View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#9ca3af" />
          <TextInput style={styles.searchInput} placeholder="Cari kontak atau keyword" placeholderTextColor="#9ca3af" />
        </View>
      </View>

      {/* Chat List */}
      <ScrollView style={styles.chatList} showsVerticalScrollIndicator={false}>
        {chatList.map((chat) => (
          <TouchableOpacity key={chat.id} style={styles.chatItem} onPress={() => handleChatPress(chat.id)}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: chat.avatar }} style={styles.avatar} contentFit="cover" />
              {chat.unread > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{chat.unread}</Text>
                </View>
              )}
            </View>

            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{chat.name}</Text>
                <Text style={styles.chatTime}>{chat.time}</Text>
              </View>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {chat.lastMessage}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/konsumen/homePage")}>
          <Ionicons name="home-outline" size={24} color="#9ca3af" />
          <Text style={styles.navText}>Beranda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Ionicons name="chatbubbles" size={24} color="#22c55e" />
          <Text style={[styles.navText, styles.navTextActive]}>Percakapan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/konsumen/profile")}>
          <Ionicons name="person-outline" size={24} color="#9ca3af" />
          <Text style={styles.navText}>Profil</Text>
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
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  timeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
  statusIcons: {
    alignItems: "center",
  },
  notch: {
    width: 8,
    height: 8,
    backgroundColor: "#111",
    borderRadius: 4,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  signalBars: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 1,
  },
  bar: {
    width: 3,
    backgroundColor: "#111",
    borderRadius: 1,
  },
  bar1: { height: 8 },
  bar2: { height: 10 },
  bar3: { height: 12 },
  bar4: { height: 6, backgroundColor: "#d1d5db" },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: "#111",
    borderRadius: 2,
    padding: 1,
  },
  batteryLevel: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: 1,
    width: "75%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  backButton: {
    marginRight: 12,
  },
  backButtonInner: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#22c55e",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  headerSpacer: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#111",
    marginLeft: 8,
  },
  chatList: {
    flex: 1,
    backgroundColor: "white",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  avatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f3f4f6",
  },
  unreadBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "#ef4444",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  unreadText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  chatTime: {
    fontSize: 12,
    color: "#9ca3af",
  },
  lastMessage: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 18,
  },
  bottomNavigation: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  navItemActive: {
    // Active state styling handled by icon and text color
  },
  navText: {
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 4,
  },
  navTextActive: {
    color: "#22c55e",
    fontWeight: "500",
  },
})
