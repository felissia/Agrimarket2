import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomePage() {
  const router = useRouter();
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Welcome to AgriMarket!</Text>
      <Button title="Go to Login" onPress={()=>router.push('/login')} />
    </View>
  );
}

