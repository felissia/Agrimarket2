import NavbarFAQ from "@/components/navbarFAQ";
import React, { useCallback, useState } from "react";
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Faq = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => setFrameOpen(true), []);
  const closeFrame = useCallback(() => setFrameOpen(false), []);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.vectorIcon2} />
        <Text style={styles.cariPertanyaan}>Cari pertanyaan yang anda inginkan</Text>
      </View>

      {/* Back Text */}
      <View style={styles.backText}>
        <View style={styles.back}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupChild} />
            <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.vectorIcon} />
          </View>
        </View>
        <Text style={styles.ktp}>Pertanyaan Umum</Text>
      </View>

      <Text style={styles.cekKategori}>Cek Kategori Pertanyaan</Text>

      {/* Kategori icon */}
        <TouchableOpacity onPress={openFrame}>
          <Image source={require("../../../assets/images/people/profile.jpeg")} style={styles.kategoriIcon} />
        </TouchableOpacity>

      {/* Modal Frame */}
      <Modal visible={isFrameOpen} transparent animationType="fade" onRequestClose={closeFrame}>
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={closeFrame}>
          <View style={styles.modalContent}>
            <NavbarFAQ />
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Pertanyaan */}
      <ScrollView contentContainerStyle={styles.questionsContainer}>
        {[
          "Apakah saya bisa menggunakan jasa pengiriman sendiri?",
          "Bagaimana cara mengatur metode pengiriman untuk produk saya?",
          "Bagaimana jika terjadi keterlambatan atau masalah dalam pengiriman?",
          "Apakah ada fitur untuk menjadwalkan pengiriman produk segar?",
          "Berapa lama dana hasil penjualan masuk ke rekening saya?",
          "Metode pembayaran apa saja yang tersedia untuk pembeli?",
          "Apakah ada potongan atau biaya admin dalam pembayaran?",
          "Apakah ada fitur promosi atau iklan yang bisa digunakan penjual?",
          "Bagaimana sistem pembayaran bekerja untuk penjual?"
        ].map((text, index) => (
          <View key={index} style={styles.questionBox}>
            <Text>{text}</Text>
          </View>
        ))}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#84b067",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 23,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cariPertanyaan: {
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: 12,
    marginLeft: 10,
  },
  vectorIcon2: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  backText: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 20,
  },
  back: {
    marginRight: 10,
  },
  rectangleParent: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#91c077",
    justifyContent: "center",
    alignItems: "center",
  },
  groupChild: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  vectorIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  ktp: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cekKategori: {
    marginLeft: 77,
    fontWeight: "600",
    marginBottom: 10,
  },
  questionsContainer: {
    paddingHorizontal: 19,
  },
  questionBox: {
    borderWidth: 1,
    borderColor: "#91c077",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    justifyContent: "center",
  },
  kategoriIcon: {
    width: 30,
    height: 30,
    alignSelf: "flex-start",
    marginTop: -25,
    marginLeft: 35,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    maxHeight: "90%",
    width: "90%",
  },
});

export default Faq;
