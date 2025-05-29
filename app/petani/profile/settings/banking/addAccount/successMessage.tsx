"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useEffect } from "react"
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"

export default function SuccessScreen() {
  const router = useRouter()

  useEffect(() => {
    // Automatically navigate back to add-account after 1 second
    const timer = setTimeout(() => {
      router.replace("/petani/profile/settings/banking")
    }, 800)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <View style={styles.content}>
        <View style={styles.checkmarkContainer}>
          <Ionicons name="checkmark" size={60} color="white" />
        </View>

        <Text style={styles.successText}>
          Rekening baru anda{"\n"}
          telah sukses ditambahkan!
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF4",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  checkmarkContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#48BB78",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#48BB78",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  successText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2D3748",
    textAlign: "center",
    lineHeight: 26,
  },
})
