import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
type Frame235Props = {
  style?: object;
};

const navbarFAQ: React.FC<Frame235Props> = ({ style = {} }) => {
  return (
    <ScrollView style={[styles.container, style]}>
      <View style={styles.innerContainer}>
        <View style={styles.groupChild} />
        <Text style={styles.pertanyaan}>Pertanyaan</Text>
        <View style={styles.pendaftaranAkunParent}>
          <Text style={styles.pendaftaranAkun}>Pendaftaran & Akun</Text>
          <Text style={styles.pengiriman}>Pengiriman</Text>
          <Text style={styles.pengiriman}>Keamanan & Kebijakan</Text>
          <Text style={styles.pengiriman}>Pemasaran & Penjualan</Text>
          <Text style={styles.pengiriman}>Pembayaran</Text>
          <Text style={styles.pengiriman}>Produk & Stok</Text>
        </View>
        <Text style={styles.memilikiPertanyaan}>Memiliki Pertanyaan?</Text>
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 1089,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  innerContainer: {
    position: 'relative',
    width: 330,
    height: 1089,
    backgroundColor: '#fff',
    borderColor: '#84b067',
    borderWidth: 1,
    paddingHorizontal: 32,
    paddingTop: 51,
    fontFamily: 'Sora',
  },
  groupChild: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 330,
    height: 1089,
    backgroundColor: '#fff',
    borderColor: '#84b067',
    borderWidth: 1,
  },
  pertanyaan: {
    fontSize: 30,
    fontWeight: '600',
    color: '#84b067',
    marginBottom: 50,
  },
  pendaftaranAkunParent: {
    marginLeft: 17,
    gap: 46,
  },
  pendaftaranAkun: {
    fontSize: 20,
    color: '#000',
  },
  pengiriman: {
    fontSize: 20,
    color: '#000',
  },
  memilikiPertanyaan: {
    position: 'absolute',
    top: 1030,
    left: 88,
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#000',
  },
});

export default navbarFAQ;
