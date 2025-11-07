import React, { useState } from "react";
import { View, Text, StyleSheet, FlexAlignType } from "react-native";
import FlexButton from "../components/FlexButton";

export default function FlexboxPlayground() {
  const [flexDirection, setFlexDirection] = useState<
    "row" | "column" | "row-reverse" | "column-reverse"
  >("row");

  const [justifyContent, setJustifyContent] = useState<
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
  >("flex-start");

  const [alignItems, setAlignItems] = useState<FlexAlignType>("flex-start");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flexbox Playground</Text>

      <View
        style={[
          styles.boxContainer,
          { flexDirection, justifyContent, alignItems },
        ]}
      >
        <View style={[styles.box, styles.red]} />
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.green]} />
      </View>

      <View style={styles.controls}>
        <Text style={styles.sectionTitle}>Flex Direction</Text>
        <View style={styles.row}>
          <FlexButton label="row" onPress={() => setFlexDirection("row")} />
          <FlexButton label="column" onPress={() => setFlexDirection("column")} />
          <FlexButton
            label="row-reverse"
            onPress={() => setFlexDirection("row-reverse")}
          />
        </View>

        <Text style={styles.sectionTitle}>Justify Content</Text>
        <View style={styles.row}>
          <FlexButton
            label="flex-start"
            onPress={() => setJustifyContent("flex-start")}
          />
          <FlexButton label="center" onPress={() => setJustifyContent("center")} />
          <FlexButton
            label="space-between"
            onPress={() => setJustifyContent("space-between")}
          />
        </View>

        <Text style={styles.sectionTitle}>Align Items</Text>
        <View style={styles.row}>
          <FlexButton
            label="flex-start"
            onPress={() => setAlignItems("flex-start")}
          />
          <FlexButton label="center" onPress={() => setAlignItems("center")} />
          <FlexButton label="stretch" onPress={() => setAlignItems("stretch")} />
        </View>
      </View>
    </View>
  );
}

const BOX = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: { fontSize: 22, fontWeight: "700", textAlign: "center", marginBottom: 20 },

  boxContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    marginBottom: 20,
  },

  box: {
    width: BOX,
    height: BOX,
    borderRadius: 10,
  },
  red: { backgroundColor: "red" },
  blue: { backgroundColor: "blue" },
  green: { backgroundColor: "green" },

  controls: { paddingBottom: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 14 },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginBottom: 6 },
});
