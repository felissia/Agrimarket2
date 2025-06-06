import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChooseRolePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Peran</Text>

      {/* Petani */}
      <TouchableOpacity style={styles.card} onPress={() => router.push('../petani/homePage')}>
        {/* <Image source={require('../../../assets/image/farmer.png')} style={styles.image} /> */}
        <Text style={styles.cardText}>Petani</Text>
      </TouchableOpacity>

      {/* Pengelolah */}
      <TouchableOpacity style={styles.card} onPress={() => router.push('/pengelolah/homePage' as any)}>
        {/* <Image source={require('../../../assets/image/processor.png')} style={styles.image} /> */}
        <Text style={styles.cardText}>Pengelolah</Text>
      </TouchableOpacity>

      {/* Distributor */}
      <TouchableOpacity style={styles.card} onPress={() => router.push('/+not-found')}>
        {/* <Image source={require('../../../assets/image/distributor.png')} style={styles.image} /> */}
        <Text style={styles.cardText}>Distributor</Text>
      </TouchableOpacity>

      {/* Konsumen */}
      <TouchableOpacity style={styles.card} onPress={() => router.push('../konsumen/homePage')}>
        {/* <Image source={require('../../../assets/image/consumer.png')} style={styles.image} /> */}
        <Text style={styles.cardText}>Konsumen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#84b067',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#84b067',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
