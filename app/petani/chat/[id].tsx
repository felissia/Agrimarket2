"use client"

import { Ionicons } from "@expo/vector-icons"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useRef, useState } from "react"
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"

interface Message {
  id: string
  text: string
  sender: "user" | "contact"
  timestamp: Date
}

export default function ChatDetail() {
  const router = useRouter()
  const { id } = useLocalSearchParams()
  const [inputText, setInputText] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Halo, saya tertarik dengan produk Anda",
      sender: "contact",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: "2",
      text: "Terima kasih atas minatnya. Produk mana yang ingin Anda tanyakan?",
      sender: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 25),
    },
    {
      id: "3",
      text: "Saya ingin bertanya mengenai harga dan kualitas beras",
      sender: "contact",
      timestamp: new Date(Date.now() - 1000 * 60 * 20),
    },
  ])
  const flatListRef = useRef<FlatList>(null)

  // Mock contact data based on ID
  const getContactName = (contactId: string) => {
    const contacts: { [key: string]: string } = {
      "1": "Ananda Anang",
      "2": "Rando Emil",
      "3": "Kick Andy",
      "4": "Emery Susanto",
      "5": "PT. Mitra Bakti",
    }
    return contacts[contactId] || "Unknown Contact"
  }

  const sendMessage = () => {
    if (inputText.trim() === "") return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputText("")

    // Scroll to bottom
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true })
    }, 100)
  }

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[styles.messageContainer, item.sender === "user" ? styles.userMessage : styles.contactMessage]}>
      <Text style={[styles.messageText, item.sender === "user" ? styles.userMessageText : styles.contactMessageText]}>
        {item.text}
      </Text>
      <Text style={styles.messageTime}>
        {item.timestamp.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <View style={styles.contactInfo}>
            <Image source={{ uri: "/placeholder.svg?height=40&width=40" }} style={styles.contactAvatar} />
            <View>
              <Text style={styles.contactName}>{getContactName(id as string)}</Text>
              <Text style={styles.contactStatus}>Online</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Ionicons name="ellipsis-vertical" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          style={styles.messagesList}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        />

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ketik pesan..."
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[styles.sendButton, inputText.trim() ? styles.sendButtonActive : null]}
            onPress={sendMessage}
            disabled={inputText.trim() === ""}
          >
            <Ionicons name="send" size={20} color={inputText.trim() ? "white" : "#999"} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  contactInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  contactAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: "#E0E0E0",
  },
  contactName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  contactStatus: {
    fontSize: 12,
    color: "#4CAF50",
  },
  moreButton: {
    padding: 4,
  },
  messagesList: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  messagesContent: {
    paddingVertical: 10,
  },
  messageContainer: {
    marginHorizontal: 16,
    marginVertical: 3,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
  },
  contactMessage: {
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 18,
  },
  userMessageText: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
  contactMessageText: {
    backgroundColor: "white",
    color: "#333",
  },
  messageTime: {
    fontSize: 11,
    color: "#999",
    marginTop: 3,
    marginHorizontal: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
    fontSize: 16,
    backgroundColor: "#F8F9FA",
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
  },
  sendButtonActive: {
    backgroundColor: "#4CAF50",
  },
})
