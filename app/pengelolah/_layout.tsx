import { Stack } from "expo-router"

export default function PengelolahLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homePage" />
      <Stack.Screen name="plantify" />
      <Stack.Screen name="mitra" />
      <Stack.Screen name="catatan" />
      <Stack.Screen name="berkas" />
      <Stack.Screen name="categories" />
      <Stack.Screen name="category" />
      <Stack.Screen name="product" />
      <Stack.Screen name="cart" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="toko" />
      <Stack.Screen name="chat" />
      <Stack.Screen name="profile" />
    </Stack>
  )
}
