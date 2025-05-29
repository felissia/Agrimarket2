// import { Stack } from "expo-router"



// export default function PetaniLayout() {
//   return (
//     <Stack>
//       <Stack.Screen
//         name="homepagePetani"
//         options={{
//           headerShown: false,
//           title: "Beranda",
//         }}
//       />
//       <Stack.Screen
//         name="profile"
//         options={{
//           headerShown: false,
//           title: "Profile",
//         }}
//       />
//       <Stack.Screen
//         name="notifications"
//         options={{
//           headerShown: false,
//           title: "Notifications",
//         }}
//       />
//       <Stack.Screen
//         name="settings"
//         options={{
//           headerShown: false,
//           title: "Settings",
//         }}
//       />
//       <Stack.Screen
//         name="banking"
//         options={{
//           headerShown: false,
//           title: "Banking",
//         }}
//       />
//       <Stack.Screen
//         name="chat"
//         options={{
//           headerShown: false,
//           title: "Chat",
//         }}
//       />
//     </Stack>
//   )
// }


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