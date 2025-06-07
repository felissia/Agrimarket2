"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import BottomNavigationDistributor from "../../../components/BottomNavigationDistributor"

interface ChatContact {
  id: string
  name: string
  lastMessage: string
  avatar: string
  timestamp: string
  unreadCount?: number
}

export default function ChatIndex() {
  
const router = useRouter()
  const [searchText, setSearchText] = useState("")


  const handleChatPress = () => {
    router.push("/distributor/chat" as any)
  }
  const chatContacts: ChatContact[] = [
    {
      id: "1",
      name: "PT. Distribusi Maju",
      lastMessage: "Saya ingin bertanya mengenai pr...",
      avatar: "/placeholder.svg?height=50&width=50",
      timestamp: "10:30",
    },
    {
      id: "2",
      name: "PT. Distribusi Jaya",
      lastMessage: "Saya ingin mengembalikan, kira...",
      avatar: "/placeholder.svg?height=50&width=50",
      timestamp: "09:45",
    },
    {
      id: "3",
      name: "PT. Distribusi Ayam",
      lastMessage: "Saya mau beli 1000 kg bisa tidak...",
      avatar: "/placeholder.svg?height=50&width=50",
      timestamp: "08:20",
    },
    {
      id: "4",
      name: "PT. Distribusi Biru",
      lastMessage: "Saya ingin bertanya mengenai pr...",
      avatar: "/placeholder.svg?height=50&width=50",
      timestamp: "07:15",
    },
    {
      id: "5",
      name: "欧阳娜娜",
      lastMessage: "我想订购三公斤草莓, 我还想要三公斤西瓜和果汁...",
      avatar: "/placeholder.svg?height=50&width=50",
      timestamp: "Kemarin",
    },
  ]

  const filteredContacts = chatContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase()),
  )

  const renderChatItem = ({ item }: { item: ChatContact }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => router.push(`/distributor/chat/${item.id}` as any)}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <View style={styles.headerRight} />
      </View> */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat</Text>
        <View style={styles.headerRight} />
    </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9E9E9E" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari kontak atau keyword"
          placeholderTextColor="#9E9E9E"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredContacts}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        style={styles.chatList}
        showsVerticalScrollIndicator={false}
      />
      <BottomNavigationDistributor activeTab="chat" />
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
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  headerRight: {
    width: 32, // Same width as back button for centering
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F8F8F8",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: "#E0E0E0",
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
  contactName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  timestamp: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
    lineHeight: 18,
  },
})
