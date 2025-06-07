"use client"

import { Ionicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import BottomNavigationPengelolah from "../../../components/BottomNavigationPengelolah"

export default function PengelolahProfileScreen() {
  const handleSettingsPress = () => {
    router.push("/pengelolah/profile/settings" as any)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header with settings icon */}
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Company Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Image source={{ uri: "/placeholder.svg?height=80&width=80" }} style={styles.logo} contentFit="contain" />
          </View>
          <Text style={styles.companyName}>PT. Mitra Bakti</Text>
        </View>

        {/* Company Description */}
        <Text style={styles.roleTitle}>Pengelolah Mitra Bakti</Text>

        {/* Company Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoCardContent}>
            <View style={styles.marketIconContainer}>
              <Text style={styles.marketIcon}>MARKET</Text>
            </View>
            <View style={styles.infoCardTextContainer}>
              <Text style={styles.infoCardTitle}>PT. Mitra Bakti</Text>
              <Text style={styles.infoCardDescription}>
                Pengelolah yang berpengalaman untuk menyediakan produk berkualitas tinggi dengan pelayanan terpercaya.
              </Text>
            </View>
          </View>
        </View>

        {/* Titles Section */}
        <View style={styles.titlesSection}>
          <Text style={styles.sectionTitle}>Title yang Sudah Dikumpulkan</Text>

          {/* Sahabat Semua Badge */}
          <View style={styles.badgeCard}>
            <View style={styles.badgeContent}>
              <View style={styles.badgeIconContainer}>
                <Text style={styles.badgeEmoji}>🤝</Text>
              </View>
              <View style={styles.badgeTextContainer}>
                <Text style={styles.badgeTitle}>Sahabat Semua</Text>
                <Text style={styles.badgeDescription}>
                  Telah bermitra dan berbisnis dengan lebih dari 100 petani Indonesia!
                </Text>
              </View>
            </View>
            <View style={styles.badgeActionContainer}>
              <TouchableOpacity style={styles.badgeActionButton}>
                <Text style={styles.badgeActionText}>Pakai</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Penjual Ulung Badge */}
          <View style={styles.badgeCard}>
            <View style={styles.badgeContent}>
              <View style={styles.badgeIconContainer}>
                <Text style={styles.badgeEmoji}>⭐</Text>
              </View>
              <View style={styles.badgeTextContainer}>
                <Text style={styles.badgeTitle}>Penjual Ulung</Text>
                <Text style={styles.badgeDescription}>
                  Berhasil meraih 5 juta pertama dalam jangka waktu satu tahun setelah pendaftaran.
                </Text>
              </View>
            </View>
            <View style={styles.badgeActionContainer}>
              <TouchableOpacity style={[styles.badgeActionButton, styles.badgeActionButtonActive]}>
                <Text style={styles.badgeActionTextActive}>Sedang dipakai</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Additional content for scrolling */}
          <View style={styles.additionalSpace} />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigationPengelolah activeTab="profil" />
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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  headerSpacer: {
    width: 24,
  },
  settingsButton: {
    padding: 4,
  },
  scrollContainer: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: "white",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    overflow: "hidden",
  },
  logo: {
    width: 80,
    height: 80,
  },
  companyName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  infoCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  marketIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#22c55e",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  marketIcon: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },
  infoCardTextContainer: {
    flex: 1,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  infoCardDescription: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
  },
  titlesSection: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 16,
  },
  badgeCard: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  badgeContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  badgeIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#fef3c7",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  badgeEmoji: {
    fontSize: 20,
  },
  badgeTextContainer: {
    flex: 1,
  },
  badgeTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  badgeDescription: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 20,
  },
  badgeActionContainer: {
    alignItems: "flex-end",
    marginTop: 12,
  },
  badgeActionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "white",
  },
  badgeActionButtonActive: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
  badgeActionText: {
    fontSize: 14,
    color: "#111",
    fontWeight: "500",
  },
  badgeActionTextActive: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
  },
  additionalSpace: {
    height: 100,
  },
})
