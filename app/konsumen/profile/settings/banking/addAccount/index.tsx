"use client"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const { width, height } = Dimensions.get("window")

export default function AddAccountPage() {
  const router = useRouter()


  
  const handleCreateAccount = () => {
    // Navigate to account creation form
    router.push("/konsumen/profile/settings/banking/addAccount/accountDataFilling")
    
  }

  const handleMaybeLater = () => {
    // Go back to previous screen
    router.back()
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <LinearGradient
        colors={["#FFF8E7", "#FFFFFF"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.content}>
          {/* 3D Cards Illustration */}
          <View style={styles.illustrationContainer}>
            <View style={styles.cardsStack}>
              {/* Purple Card (Back) */}
              <View style={[styles.card, styles.purpleCard]}>
                <View style={styles.chip} />
                <View style={styles.cardNumber}>
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                </View>
              </View>

              {/* Orange Card (Middle) */}
              <View style={[styles.card, styles.orangeCard]}>
                <View style={styles.chip} />
                <View style={styles.cardNumber}>
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                </View>
              </View>

              {/* Blue Card (Front) */}
              <View style={[styles.card, styles.blueCard]}>
                <View style={styles.chip} />
                <View style={styles.cardNumber}>
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                  <View style={styles.numberDot} />
                </View>
                <View style={styles.cardDetails}>
                  <View style={styles.cardLine} />
                  <View style={styles.cardLine} />
                </View>
              </View>

              {/* Golden Coin */}
              <View style={styles.coin}>
                <View style={styles.coinInner} />
              </View>
            </View>
          </View>

          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              Pastikan nama pada{"\n"}
              rekening anda sama dengan{"\n"}
              nama di KTP anda
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleCreateAccount} activeOpacity={0.8}>
              <Text style={styles.primaryButtonText}>YUK BUAT!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton} onPress={handleMaybeLater} activeOpacity={0.8}>
              <Text style={styles.secondaryButtonText}>NANTI AJA DEH...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  cardsStack: {
    position: "relative",
    width: 200,
    height: 140,
  },
  card: {
    position: "absolute",
    width: 160,
    height: 100,
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  purpleCard: {
    backgroundColor: "#B794F6",
    top: 0,
    left: 40,
    transform: [{ rotate: "15deg" }],
  },
  orangeCard: {
    backgroundColor: "#F6AD55",
    top: 10,
    left: 20,
    transform: [{ rotate: "8deg" }],
  },
  blueCard: {
    backgroundColor: "#4299E1",
    top: 20,
    left: 0,
    transform: [{ rotate: "0deg" }],
  },
  chip: {
    width: 24,
    height: 18,
    backgroundColor: "#F7FAFC",
    borderRadius: 4,
    marginBottom: 8,
  },
  cardNumber: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 8,
  },
  numberDot: {
    width: 6,
    height: 6,
    backgroundColor: "#F7FAFC",
    borderRadius: 3,
  },
  cardDetails: {
    gap: 4,
  },
  cardLine: {
    width: 60,
    height: 2,
    backgroundColor: "#F7FAFC",
    borderRadius: 1,
  },
  coin: {
    position: "absolute",
    bottom: -10,
    right: 10,
    width: 40,
    height: 40,
    backgroundColor: "#F6E05E",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  coinInner: {
    width: 28,
    height: 28,
    backgroundColor: "#ECC94B",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#D69E2E",
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2D3748",
    textAlign: "center",
    lineHeight: 26,
  },
  buttonContainer: {
    width: "100%",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#2B6CB0",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#2B6CB0",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  secondaryButtonText: {
    color: "#4A5568",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
})
