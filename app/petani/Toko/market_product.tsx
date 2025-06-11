import React, { useCallback } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MarketProduct = () => {
  const onFrameContainerClick = useCallback(() => {
    // Add your logic here
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rectangleContainer}>
        <View style={styles.balanceCard} />
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceAmount}>Rp589.150</Text>
        <TouchableOpacity style={styles.earningsButton} onPress={onFrameContainerClick}>
          <Text style={styles.buttonText}>Seluruh Pendapatan</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../../../assets/images/icon.png')} style={styles.profileImage} />

      <View style={styles.shopInfoContainer}>
        <Text style={styles.shopName}>Toko Pak Iman</Text>
        <View style={styles.subscribersBox}>
          <Text style={styles.buttonText}>50 Subscribers</Text>
        </View>
      </View>

      <View style={styles.orderStatusSection}>
        <Text style={styles.shopName}>Order Status</Text>
        <View style={styles.orderStatusRow}>
          {['3|Perlu Dikirim', '1|Pengembalian', '4|Pembatalan'].map((item, idx) => {
            const [count, label] = item.split('|');
            return (
              <TouchableOpacity key={idx} style={styles.orderStatusBox} onPress={onFrameContainerClick}>
                <Text style={styles.orderCount}>{count}</Text>
                <Text style={styles.orderLabel}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.optionSection}>
        {['Kunjungi Toko', 'Produk', 'Analisa AI'].map((label, idx) => (
          <TouchableOpacity key={idx} style={styles.optionBox} onPress={onFrameContainerClick}>
            <Image source={require('../../../assets/images/icon.png')} style={styles.vectorIcon} />
            <Text style={styles.optionText}>{label}</Text>
            <Image source={require('../../../assets/images/icon.png')} style={styles.screenshotIcon} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.supportContainer}>
        <Text style={styles.shopName}>Kesulitan Menggunakan Aplikasi Kami?</Text>
        <TouchableOpacity onPress={onFrameContainerClick}>
          <View style={styles.adminSupportBox}>
            <Image
              source={require('../../../assets/images/icon.png')}
              style={styles.adminImage}
            />
            <View>
              <Text style={styles.shopName}>Admin Solusinya!</Text>
              <Text style={styles.supportText}>
                Kami menyediakan jasa admin untuk mengurus toko anda, dijamin terpercaya!
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationBar}>
        {['Beranda', 'Toko', 'Percakapan', 'Profil'].map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.navItem} onPress={onFrameContainerClick}>
            <Image source={require('../../../assets/images/icon.png')} style={styles.navIcon} />
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  rectangleContainer: {
    marginTop: 20,
    marginBottom: 20,
    height: 132,
    backgroundColor: '#84b067',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  balanceCard: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    backgroundColor: '#84b067',
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
  },
  earningsButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 13,
    color: '#000',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: 'center',
    marginVertical: 20,
  },
  shopInfoContainer: {
    alignItems: 'center',
    gap: 9,
  },
  shopName: {
    fontWeight: '600',
    fontSize: 15,
  },
  subscribersBox: {
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    padding: 6,
    paddingHorizontal: 12,
  },
  orderStatusSection: {
    marginTop: 20,
  },
  orderStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  orderStatusBox: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderCount: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  orderLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  optionSection: {
    marginTop: 20,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  vectorIcon: {
    width: 10,
    height: 15,
    marginRight: 10,
  },
  optionText: {
    fontSize: 14,
    flex: 1,
  },
  screenshotIcon: {
    width: 20,
    height: 20,
  },
  supportContainer: {
    marginTop: 20,
  },
  adminSupportBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  adminImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  supportText: {
    fontSize: 12,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    borderTopWidth: 1,
    paddingTop: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 20,
    height: 20,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default MarketProduct;