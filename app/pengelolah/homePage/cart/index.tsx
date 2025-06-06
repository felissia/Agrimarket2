"use client"

import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function CartScreen() {
  const [isItemChecked, setIsItemChecked] = useState(false)
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [quantity, setQuantity] = useState(2)
  const [isCoinsToggled, setIsCoinsToggled] = useState(false)
  const [total, setTotal] = useState(0)

  const itemPrice = 10000 // Rp10.000

  useEffect(() => {
    // Calculate total based on quantity and price
    setTotal(quantity * itemPrice)
  }, [quantity])

  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const toggleItemCheck = () => {
    setIsItemChecked(!isItemChecked)
    if (!isItemChecked) {
      setIsAllChecked(true)
    } else {
      setIsAllChecked(false)
    }
  }

  const toggleAllCheck = () => {
    setIsAllChecked(!isAllChecked)
    setIsItemChecked(!isAllChecked)
  }

  // Format number to Indonesian Rupiah
  const formatCurrency = (amount: number) => {
    return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />


      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Keranjang</Text>
        <View style={styles.headerSpacer}></View>
      </View>

      {/* Store Section */}
      <View style={styles.storeSection}>
        <View style={styles.storeInfo}>
          <Image
            source={require("../../../../assets/images/people/profile.jpeg")}
            style={styles.storeAvatar}
/>
          <Text style={styles.storeName}>Pak Iman</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Product Item */}
        <View style={styles.productCard}>
          <TouchableOpacity onPress={toggleItemCheck} style={styles.checkbox}>
            <View style={[styles.checkboxInner, isItemChecked && styles.checkboxChecked]}>
              {isItemChecked && <Ionicons name="checkmark" size={16} color="white" />}
            </View>
          </TouchableOpacity>

          <Image
            source={require("../../../../assets/images/drinks/greenDetoxJuice.jpg")}
            style={styles.productImage}
/>

          <View style={styles.productInfo}>
            <Text style={styles.productName}>Jus Detox Oyong</Text>
            <Text style={styles.productPrice}>{formatCurrency(itemPrice)}</Text>

            <View style={styles.badgeContainer}>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>10%</Text>
              </View>
              <View style={styles.freeBadge}>
                <Text style={styles.freeText}>Free Ongkir</Text>
              </View>
            </View>

            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Total Section */}
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>{formatCurrency(total)}</Text>
        </View>

        {/* Voucher Section */}
        <TouchableOpacity style={styles.voucherSection} onPress={() => router.push("/pengelolah/homePage/cart/voucher" as any)}>
          <Ionicons name="ticket-outline" size={20} color="#22c55e" />
          <Text style={styles.voucherText}>Voucher</Text>
          <Text style={styles.voucherSubtext}>Choose or Enter a Code</Text>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </TouchableOpacity>

        {/* Coins Section */}
        <View style={styles.coinsSection}>
          <View style={styles.coinsLeft}>
            <View style={styles.coinIcon}>
              <Text style={styles.coinText}>C</Text>
            </View>
            <Text style={styles.coinsAmount}>50.000 Coins</Text>
          </View>
          <TouchableOpacity onPress={() => setIsCoinsToggled(!isCoinsToggled)} style={styles.toggleContainer}>
            <View style={[styles.toggle, isCoinsToggled && styles.toggleActive]}>
              <View style={[styles.toggleThumb, isCoinsToggled && styles.toggleThumbActive]}></View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={toggleAllCheck} style={styles.allCheckbox}>
            <View style={[styles.checkboxInner, isAllChecked && styles.checkboxChecked]}>
              {isAllChecked && <Ionicons name="checkmark" size={16} color="white" />}
            </View>
            <Text style={styles.allText}>All</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.buyButton} onPress={() => router.push("/pengelolah/homePage/cart/checkout" as any)}>
            <Text style={styles.buyButtonText}>Beli</Text>
          </TouchableOpacity>
        </View>
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
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginLeft: 12,
  },
  headerSpacer: {
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
  scrollContainer: {
    flex: 1,
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
  checkbox: {
    marginRight: 12,
    marginTop: 4,
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
    marginBottom: 12,
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityButtonText: {
    fontSize: 18,
    color: "#111",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 16,
    minWidth: 20,
    textAlign: "center",
  },
  bottomSection: {
    backgroundColor: "white",
    paddingTop: 16,
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
  voucherSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  voucherText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginLeft: 8,
  },
  voucherSubtext: {
    fontSize: 14,
    color: "#9ca3af",
    flex: 1,
    marginLeft: 8,
  },
  coinsSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  coinsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#22c55e",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  coinText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  coinsAmount: {
    fontSize: 16,
    fontWeight: "500",
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
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  allCheckbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  allText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginLeft: 8,
  },
  buyButton: {
    backgroundColor: "#22c55e",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})
