
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
  type: "text" | "product"
  content?: string
  product?: {
    name: string
    price: string
    image: string
  }
  sender: "user" | "contact"
  timestamp: Date
  companyLogo?: string
}

export default function ChatDetail() {
  const router = useRouter()
  const { id } = useLocalSearchParams()
  const [inputText, setInputText] = useState("")
  const [showAttachmentPanel, setShowAttachmentPanel] = useState(false)
  const flatListRef = useRef<FlatList>(null)

  // Mock contact data based on ID
  const getContactInfo = (contactId: string) => {
    const contacts: { [key: string]: { name: string; type: string } } = {
      "1": { name: "Distributor Bandung", type: "individual" },
      "2": { name: "Ulung Distribution", type: "individual" },
      "3": { name: "Distribusi Handal", type: "individual" },
      "4": { name: "Distribusi A", type: "individual" },
      "5": { name: "Distribusi B", type: "company" },
    }
    return contacts[contactId] || { name: "PT. Mitra Bakti", type: "company" }
  }

  const contactInfo = getContactInfo(id as string)
  const [pinnedMessage, setPinnedMessage] = useState(
    contactInfo.type === "company" ? "Batas penggunaan pestisida pada bah..." : null,
  )

  // Different message sets based on contact type
  const getMessages = (): Message[] => {
    if (contactInfo.type === "company") {
      return [
        {
          id: "2",
          type: "text" as const,
          content: "Hari ini jangan lupa untuk semangat lagi ya pak!",
          sender: "user",
          timestamp: new Date(Date.now() - 1000 * 60 * 30),
        },
        {
          id: "3",
          type: "text" as const,
          content:
            "Batas penggunaan pestisida yang ditoleransi oleh distributor dari Spanyol itu 0,01 mg/kg. Jika lebih maka akan dikembalikan. Jadi pastikan tidak ada yang menggunakan lebih dari itu.",
          sender: "contact",
          timestamp: new Date(Date.now() - 1000 * 60 * 20),
          companyLogo: "/placeholder.svg?height=40&width=40",
        },
      ]
    } else {
      // Individual chat 
      return [
        {
          id: "1",
          type: "product" as const,
          product: {
            name: "Pete Raja",
            price: "Rp 18,000",
            image: "/placeholder.svg?height=80&width=80",
          },
          sender: "contact",
          timestamp: new Date(Date.now() - 1000 * 60 * 30),
        },
        {
          id: "2",
          type: "text" as const,
          content: "Saya mau tanya tentang kualitas dari produk strawberry ini. Ini jenis pupuknya apa ya?",
          sender: "contact",
          timestamp: new Date(Date.now() - 1000 * 60 * 25),
        },
        {
          id: "3",
          type: "text" as const,
          content: "Pupuk Lestari Organik Raja, pak.",
          sender: "user",
          timestamp: new Date(Date.now() - 1000 * 60 * 20),
        },
      ]
    }
  }

  const [messages, setMessages] = useState<Message[]>(getMessages())

  const sendMessage = () => {
    if (inputText.trim() === "") return

    const newMessage: Message = {
      id: Date.now().toString(),
      type: "text",
      content: inputText.trim(),
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

  const handleProductAction = (action: "buy" | "cart") => {
    if (action === "buy") {
      console.log("Buy product")
    } else {
      console.log("Add to cart")
    }
  }

  const handleGridPress = () => {
    setShowAttachmentPanel(!showAttachmentPanel)
  }

  const handleAttachmentOption = (option: string) => {
    console.log(`Selected option: ${option}`)
    setShowAttachmentPanel(false)
  }

  const renderMessage = ({ item }: { item: Message }) => {
    if (item.type === "product") {
      return (
        <View style={[styles.messageContainer, item.sender === "user" ? styles.userMessage : styles.contactMessage]}>
          <View style={styles.productCard}>
            <View style={styles.productHeader}>
              <Image source={{ uri: "/placeholder.svg?height=40&width=40" }} style={styles.senderAvatar} />
            </View>
            <View style={styles.productContent}>
              <Image source={{ uri: item.product?.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.product?.name}</Text>
                <Text style={styles.productPrice}>{item.product?.price}</Text>
                <View style={styles.productActions}>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.buyButton]}
                    onPress={() => handleProductAction("buy")}
                  >
                    <Ionicons name="bag" size={16} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.cartButton]}
                    onPress={() => handleProductAction("cart")}
                  >
                    <Ionicons name="cart" size={16} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )
    }

    return (
      <View style={[styles.messageContainer, item.sender === "user" ? styles.userMessage : styles.contactMessage]}>
        <View style={styles.textMessageContainer}>
          {item.sender === "contact" && (
            <View style={styles.contactAvatarContainer}>
              {contactInfo.type === "company" ? (
                <View style={styles.companyLogo}>
                  <View style={styles.companyLogoInner}>
                    <Text style={styles.companyLogoText}>M</Text>
                  </View>
                </View>
              ) : (
                <Image source={{ uri: "/placeholder.svg?height=32&width=32" }} style={styles.messageAvatar} />
              )}
            </View>
          )}
          <View style={[styles.messageBubble, item.sender === "user" ? styles.userBubble : styles.contactBubble]}>
            <Text
              style={[styles.messageText, item.sender === "user" ? styles.userMessageText : styles.contactMessageText]}
            >
              {item.content}
            </Text>
          </View>
          {item.sender === "user" && (
            <Image source={{ uri: "/placeholder.svg?height=32&width=32" }} style={styles.messageAvatar} />
          )}
        </View>
      </View>
    )
  }

  const renderAttachmentPanel = () => {
    if (!showAttachmentPanel) return null

    const options = [
      { id: "produk", icon: "cube-outline", label: "Produk" },
      { id: "kamera", icon: "camera-outline", label: "Kamera" },
      { id: "galeri", icon: "image-outline", label: "Galeri" },
      { id: "voucher", icon: "ticket-outline", label: "Voucher" },
    ]

    return (
      <View style={styles.attachmentPanel}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={option.id}
            style={styles.attachmentOption}
            onPress={() => handleAttachmentOption(option.id)}
          >
            <View style={styles.attachmentIconContainer}>
              <Ionicons name={option.icon as any} size={24} color="#4CAF50" />
            </View>
            <Text style={styles.attachmentLabel}>{option.label}</Text>
            {index < options.length - 1 && <View style={styles.attachmentDivider} />}
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={() => router.replace("/konsumen/chat")}>
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>
          <Text style={styles.contactName}>{contactInfo.name}</Text>
          
        </View>

        {/* Pinned Message */}
        {pinnedMessage && (
          <View style={styles.pinnedMessageContainer}>
            <Ionicons name="pin" size={16} color="#4CAF50" style={styles.pinnedIcon} />
            <Text style={styles.pinnedText}>{pinnedMessage}</Text>
          </View>
        )}

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

        {/* Attachment Panel */}
        {renderAttachmentPanel()}

        {/* Input */}
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.gridButton} onPress={handleGridPress}>
            <Ionicons name="grid" size={20} color="#4CAF50" />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Tell the chat"
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
  backButtonContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    // backgroundColor: "#E8F5E8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  contactName: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  moreButton: {
    padding: 4,
  },
  // Pinned Message
  pinnedMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E8",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D8EBD8",
    marginBottom: 4,
  },
  pinnedIcon: {
    marginRight: 8,
    transform: [{ rotate: "45deg" }],
  },
  pinnedText: {
    flex: 1,
    fontSize: 14,
    color: "#2E7D32",
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
    marginVertical: 4,
  },
  userMessage: {
    alignItems: "flex-end",
  },
  contactMessage: {
    alignItems: "flex-start",
  },
  textMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    maxWidth: "85%",
  },
  contactAvatarContainer: {
    marginRight: 8,
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E0E0E0",
    marginLeft: 8,
  },
  companyLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FF5722",
    justifyContent: "center",
    alignItems: "center",
  },
  companyLogoInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#D32F2F",
    justifyContent: "center",
    alignItems: "center",
  },
  companyLogoText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    maxWidth: "100%",
  },
  userBubble: {
    backgroundColor: "#E8E8E8",
  },
  contactBubble: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: "#333",
  },
  contactMessageText: {
    color: "#333",
  },
  // Product Card Styles
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    maxWidth: 280,
  },
  productHeader: {
    marginBottom: 8,
  },
  senderAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  productContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  productActions: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButton: {
    backgroundColor: "#4CAF50",
  },
  cartButton: {
    backgroundColor: "#FF9800",
  },
  // Attachment Panel
  attachmentPanel: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  attachmentOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    position: "relative",
  },
  attachmentIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  attachmentLabel: {
    fontSize: 16,
    color: "#333",
  },
  attachmentDivider: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 1,
    backgroundColor: "#F0F0F0",
  },
  // Input Styles
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  gridButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
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

