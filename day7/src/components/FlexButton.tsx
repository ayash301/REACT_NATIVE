import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function FlexButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: "#007AFF",
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
});
