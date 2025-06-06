import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide default header for all screens in this stack
      }}
    />
  );
}