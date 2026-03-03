import { PlantlyButton } from "@/components/PlantlyButton";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { StyleSheet, Text, Button, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PlantlyImage } from "@/components/plantlyImage";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>Keep your plants health and hydrated</Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in!" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 24,
  },
  heading: {
    fontSize: 24,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 24,
    color: theme.colorWhite,
    textAlign: "center",
  },
});
