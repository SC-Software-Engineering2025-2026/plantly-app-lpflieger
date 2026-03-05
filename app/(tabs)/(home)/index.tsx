import { StyleSheet, Text, View } from "react-native";
import { usePlantStore } from "@/store/plantsStore";
import { FlatList } from "react-native";
import { PlantCard } from "@/components/PlantCard";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => router.navigate("/new")}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 12,
  },
});
