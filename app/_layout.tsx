import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="onBoarding"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", title: "New plant" }}
      />
    </Stack>
  );
}
