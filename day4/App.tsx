import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ScrollViewExample from "./src/components/ScrollViewExample";
import FlatListExample from "./src/components/FlatListExample";
import SectionListExample from "./src/components/SectionListExample";
import RefreshOnly from "./src/components/RefreshOnly";

export default function App() {
  const [active, setActive] = useState<"menu" | "scroll" | "flat" | "section" | "refresh">("menu");

  const renderScreen = () => {
    switch (active) {
      case "scroll":
        return (
          <>
            <ScrollViewExample />
            <View style={styles.bottomButton}>
              <Button title="⬅️ Kembali ke Menu" onPress={() => setActive("menu")} />
            </View>
          </>
        );
      case "flat":
        return (
          <>
            <FlatListExample />
            <View style={styles.bottomButton}>
              <Button title="⬅️ Kembali ke Menu" onPress={() => setActive("menu")} />
            </View>
          </>
        );
      case "section":
        return (
          <>
            <SectionListExample />
            <View style={styles.bottomButton}>
              <Button title="⬅️ Kembali ke Menu" onPress={() => setActive("menu")} />
            </View>
          </>
        );
      case "refresh":
        return (
          <>
            <RefreshOnly />
            <View style={styles.bottomButton}>
              <Button title="⬅️ Kembali ke Menu" onPress={() => setActive("menu")} />
            </View>
          </>
        );
      default:
        return (
          <ScrollView contentContainerStyle={styles.menuContainer}>
            <Text style={styles.title}>TUGAS HARI 4</Text>
            <View style={styles.buttonContainer}>
              <Button title="1️⃣ ScrollView" onPress={() => setActive("scroll")} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="2️⃣ FlatList" onPress={() => setActive("flat")} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="3️⃣ SectionList" onPress={() => setActive("section")} />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="4️⃣ RefreshControl" onPress={() => setActive("refresh")} />
            </View>
          </ScrollView>
        );
    }
  };

  return <SafeAreaView style={styles.container}>{renderScreen()}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 8,
  },
  bottomButton: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
