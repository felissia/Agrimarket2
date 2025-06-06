"use client"

import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function VoucherScreen() {
  const [total, setTotal] = useState(0)
  const [isVoucherSelected, setIsVoucherSelected] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />


      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <View style={styles.backButtonInner}>
            <Ionicons name="arrow-back" size={20} color="#22c55e" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Voucher</Text>
        <View style={styles.headerSpacer}></View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Voucher Item */}
        <View style={styles.voucherCard}>
          <TouchableOpacity onPress={() => setIsVoucherSelected(!isVoucherSelected)} style={styles.checkbox}>
            <View style={[styles.checkboxInner, isVoucherSelected && styles.checkboxChecked]}>
              {isVoucherSelected && <Ionicons name="checkmark" size={16} color="white" />}
            </View>
          </TouchableOpacity>

          <View style={styles.voucherContent}>
            <View style={styles.voucherLeft}>
              <View style={styles.freeShippingBox}>
                <Ionicons name="car-outline" size={24} color="white" />
                <Text style={styles.freeText}>FREE</Text>
                <Text style={styles.shippingText}>SHIPPING</Text>
              </View>
            </View>

            <View style={styles.voucherInfo}>
              <Text style={styles.voucherTitle}>Free Shipping</Text>
              <Text style={styles.voucherCondition}>Minimum spend Rp40.000</Text>
              <Text style={styles.voucherExpiry}>Until 30.3.2025</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      
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
   totalSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
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
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  voucherCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#95deb3",
  },
  checkbox: {
    marginRight: 12,
  },
  checkboxInner: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
  voucherContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  voucherLeft: {
    marginRight: 16,
  },
  freeShippingBox: {
    width: 80,
    height: 80,
    backgroundColor: "#6fc276",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  freeText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 4,
  },
  shippingText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  voucherInfo: {
    flex: 1,
  },
  voucherTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  voucherCondition: {
    fontSize: 12,
    color: "#4b5563",
    marginBottom: 2,
  },
  voucherExpiry: {
    fontSize: 12,
    color: "#4b5563",
  },

})
