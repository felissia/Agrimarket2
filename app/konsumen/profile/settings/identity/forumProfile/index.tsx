


import { Ionicons } from "@expo/vector-icons"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface ForumPost {
  id: string
  author: string
  authorAvatar: string
  timeAgo: string
  content: string
  likes: number
  comments: number
  shares: number
  liked?: boolean
}

export default function ForumProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"posts" | "favorites">("posts")

  const params = useLocalSearchParams();
  // fallback to default if not present
  const userProfile = {
    name: params.nama ? String(params.nama) : "Pak Iman",
    subtitle: params.bio ? String(params.bio) : "Sedang menjalani kehidupan...",
    followers: 50,
    posts: 2,
    favorites: 1,
    avatar: "/placeholder.svg?height=120&width=120",
  };

  // Use state for posts so we can update likes and liked status
  const [userPosts, setUserPosts] = useState<ForumPost[]>([
    {
      id: "1",
      author: "Pak Iman",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      timeAgo: "5 hours ago",
      content: "Pete apa yang paling bau ya..?",
      likes: 500,
      comments: 40,
      shares: 40,
      liked: false,
    },
    {
      id: "2",
      author: "Pak Iman",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      timeAgo: "11 hours ago",
      content: "Kira-kira hasil panen apa yang lagi tren...",
      likes: 500,
      comments: 3,
      shares: 40,
      liked: false,
    },
  ])

  const [favoritePosts, setFavoritePosts] = useState<ForumPost[]>([
    {
      id: "1",
      author: "Anthony Salim",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      timeAgo: "3 hours ago",
      content: "Apa varietas strawberry yang paling tahan terhadap hama dan cocok untuk dataran rendah?",
      likes: 500,
      comments: 40,
      shares: 40,
      liked: false,
    },
  ])

  const handleEditProfile = () => {
    router.push("/petani/profile/settings/identity/forumProfile/editForumProfile")
  }

  const handleMenuPress = () => {
    // Show menu options
  }

  // Handle like button for both tabs
  const handleLike = (postId: string, tab: "posts" | "favorites") => {
    if (tab === "posts") {
      setUserPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? {
                ...post,
                liked: !post.liked,
                likes: post.liked ? post.likes - 1 : post.likes + 1,
              }
            : post
        )
      )
    } else {
      setFavoritePosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? {
                ...post,
                liked: !post.liked,
                likes: post.liked ? post.likes - 1 : post.likes + 1,
              }
            : post
        )
      )
    }
  }

  const renderPost = ({ item }: { item: ForumPost }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.authorAvatar }} style={styles.postAuthorAvatar} />
        <View style={styles.postAuthorInfo}>
          <Text style={styles.postAuthorName}>{item.author}</Text>
          <Text style={styles.postTimeAgo}>{item.timeAgo}</Text>
        </View>
      </View>

      <Text style={styles.postContent}>{item.content}</Text>

      <View style={styles.postActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleLike(item.id, activeTab)}
        >
          <Ionicons
            name={item.liked ? "heart" : "heart-outline"}
            size={20}
            color={item.liked ? "#FFD600" : "#666"}
          />
          <Text style={[styles.actionText, { color: item.liked ? "#FFD600" : "#666" }]}>
            {item.likes}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color="#666" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark-outline" size={20} color="#666" />
          <Text style={styles.actionText}>{item.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forum Profile</Text>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Ionicons name="pencil" size={16} color="#666" />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>

          <View style={styles.profileImageContainer}>
            <Image source={{ uri: userProfile.avatar }} style={styles.profileImage} />
          </View>

          <Text style={styles.profileName}>{userProfile.name}</Text>
          <Text style={styles.profileSubtitle}>{userProfile.subtitle}</Text>
          <Text style={styles.followersCount}>{userProfile.followers} Pengikut</Text>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <TouchableOpacity
              style={[styles.statItem, activeTab === "posts" && styles.activeStatItem]}
              onPress={() => setActiveTab("posts")}
            >
              <Text style={[styles.statNumber, activeTab === "posts" && styles.activeStatText]}>
                {userProfile.posts}
              </Text>
              <Text style={[styles.statLabel, activeTab === "posts" && styles.activeStatText]}>Unggahan</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.statItem, activeTab === "favorites" && styles.activeStatItem]}
              onPress={() => setActiveTab("favorites")}
            >
              <Text style={[styles.statNumber, activeTab === "favorites" && styles.activeStatText]}>
                {userProfile.favorites}
              </Text>
              <Text style={[styles.statLabel, activeTab === "favorites" && styles.activeStatText]}>Favorit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Posts Section */}
        <View style={styles.postsSection}>
          {activeTab === "posts" && (
            <FlatList
              data={userPosts}
              renderItem={renderPost}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          )}

          {activeTab === "favorites" && (
            <FlatList
              data={favoritePosts}
              renderItem={renderPost}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </ScrollView>
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
  menuButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  editButton: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 16,
    backgroundColor: "#FAFAFA",
  },
  editText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  profileImageContainer: {
    marginTop: 20,
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E0E0E0",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  profileSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  followersCount: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeStatItem: {
    borderBottomColor: "#4CAF50",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  activeStatText: {
    color: "#4CAF50",
  },
  postsSection: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  postAuthorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    marginRight: 12,
  },
  postAuthorInfo: {
    flex: 1,
  },
  postAuthorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 2,
  },
  postTimeAgo: {
    fontSize: 12,
    color: "#999",
  },
  postContent: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actionText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 6,
  },
})


