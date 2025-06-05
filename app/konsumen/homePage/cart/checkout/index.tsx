"use client"

import { Ionicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function CheckoutScreen() {
    const handlePlaceOrder = () => {
    // Navigate to success page
    router.push("/konsumen/homePage/cart/checkout/success-co")
  }
  const [isCoinsToggled, setIsCoinsToggled] = useState(false)

  // Format number to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace("/konsumen/homePage/cart")} style={styles.backButton}>
          <View style={styles.backButtonInner}>
            <Ionicons name="arrow-back" size={20} color="#22c55e" />
          </View>
        </TouchableOpacity >
        <Text style={styles.headerTitle}>Beli</Text>
        <View style={styles.headerSpacer}></View>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Store Section */}
        <View style={styles.storeSection}>
          <View style={styles.storeInfo}>
            <Image
                source={require("../../../../../assets/images/people/profile.jpeg")}
                style={styles.storeAvatar}
            />
            <Text style={styles.storeName}>Pak Iman</Text>
          </View>
        </View>

        {/* Product Item */}
        <View style={styles.productCard}>
          <Image
            source={require("../../../../../assets/images/drinks/greenDetoxJuice.jpg")}
            style={styles.productImage}
            contentFit="cover"
          />

          <View style={styles.productInfo}>
            <Text style={styles.productName}>Jus Detox Oyong</Text>
            <Text style={styles.productPrice}>{formatCurrency(19000)}</Text>

            <View style={styles.badgeContainer}>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>10%</Text>
              </View>
              <View style={styles.freeBadge}>
                <Text style={styles.freeText}>Free Ongkir</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Voucher Section */}
        <TouchableOpacity style={styles.optionSection}>
          <View style={styles.optionLeft}>
            <Ionicons name="ticket-outline" size={20} color="#22c55e" />
            <Text style={styles.optionText}>Voucher</Text>
          </View>
          <View style={styles.optionRight}>
            <Text style={styles.optionValue}>FREE SHIPPING</Text>
            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
          </View>
        </TouchableOpacity>

        {/* Payment Section */}
        <TouchableOpacity style={styles.optionSection}>
          <View style={styles.optionLeft}>
            <Ionicons name="card-outline" size={20} color="#22c55e" />
            <Text style={styles.optionText}>Payment</Text>
          </View>
          <View style={styles.optionRight}>
            <Text style={styles.optionValue}>BCA</Text>
            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
          </View>
        </TouchableOpacity>

        {/* Message Section */}
        <TouchableOpacity style={styles.optionSection}>
          <Text style={styles.messageText}>Message for the farmer</Text>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>

        {/* Coins Section */}
        <View style={styles.coinsSection}>
          <Text style={styles.coinsText}>Pay with 50.000 Coin</Text>
          <TouchableOpacity onPress={() => setIsCoinsToggled(!isCoinsToggled)} style={styles.toggleContainer}>
            <View style={[styles.toggle, isCoinsToggled && styles.toggleActive]}>
              <View style={[styles.toggleThumb, isCoinsToggled && styles.toggleThumbActive]}></View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Delivery Option */}
        <View style={styles.deliverySection}>
          <View style={styles.deliveryHeader}>
            <Text style={styles.deliveryTitle}>Delivery Option</Text>
            <View style={styles.deliveryRight}>
              <Text style={styles.otherOption}>Other Option</Text>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </View>
          </View>

          <View style={styles.deliveryOption}>
            <Text style={styles.regularText}>Regular</Text>
            <Text style={styles.estimationText}>Arrival Estimation: 11 - 13 March 2025</Text>

            <View style={styles.discountVoucher}>
              <Ionicons name="ticket-outline" size={16} color="#22c55e" />
              <Text style={styles.discountVoucherText}>10% Discount if the product doesn't arrive in 5 days</Text>
            </View>
          </View>
        </View>

        {/* Payment Details */}
        <View style={styles.paymentDetailsSection}>
          <Text style={styles.paymentDetailsTitle}>Payment Details</Text>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Product Subtotal</Text>
            <Text style={styles.paymentValue}>{formatCurrency(36000)}</Text>
          </View>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Delivery Fee</Text>
            <Text style={styles.paymentValue}>{formatCurrency(8000)}</Text>
          </View>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Service Fee</Text>
            <Text style={styles.paymentValue}>{formatCurrency(2000)}</Text>
          </View>

          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Voucher Discount</Text>
            <Text style={[styles.paymentValue, styles.discountValue]}>-{formatCurrency(8000)}</Text>
          </View>

          <View style={[styles.paymentRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total Payment</Text>
            <Text style={styles.totalValue}>{formatCurrency(38000)}</Text>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing}></View>
      </ScrollView>

      {/* Fixed Bottom Button */}
      <View style={styles.bottomButton}>
        <TouchableOpacity style={styles.orderButton} onPress={handlePlaceOrder}>
          <Text style={styles.orderButtonText}>Beli</Text>
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
  scrollContainer: {
    flex: 1,
  },
  storeSection: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,
  },
  storeInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  storeAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
  },
  productCard: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "#111",
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 8,
  },
  discountBadge: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  freeBadge: {
    backgroundColor: "#fbbf24",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  freeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  optionSection: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginLeft: 8,
  },
  optionRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionValue: {
    fontSize: 14,
    color: "#6b7280",
    marginRight: 8,
  },
  messageText: {
    fontSize: 16,
    color: "#111",
    flex: 1,
  },
  coinsSection: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coinsText: {
    fontSize: 16,
    color: "#111",
  },
  toggleContainer: {
    padding: 4,
  },
  toggle: {
    width: 48,
    height: 24,
    backgroundColor: "#d1d5db",
    borderRadius: 12,
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  toggleActive: {
    backgroundColor: "#bbf7d0",
  },
  toggleThumb: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleThumbActive: {
    alignSelf: "flex-end",
  },
  deliverySection: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,
  },
  deliveryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  deliveryRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  otherOption: {
    fontSize: 14,
    color: "#6b7280",
    marginRight: 4,
  },
  deliveryOption: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  regularText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  estimationText: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 8,
  },
  discountVoucher: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#22c55e",
  },
  discountVoucherText: {
    fontSize: 12,
    color: "#22c55e",
    marginLeft: 4,
    flex: 1,
  },
  paymentDetailsSection: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    padding: 16,
  },
  paymentDetailsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 16,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  paymentLabel: {
    fontSize: 14,
    color: "#6b7280",
  },
  paymentValue: {
    fontSize: 14,
    color: "#111",
  },
  discountValue: {
    color: "#22c55e",
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    paddingTop: 12,
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  bottomSpacing: {
    height: 80,
  },
  bottomButton: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  orderButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  orderButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})
