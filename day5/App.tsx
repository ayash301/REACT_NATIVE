import React from "react";
import { SafeAreaView } from "react-native";
import TouchEvaluation from "./src/components/TouchEvaluation";


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchEvaluation />
    </SafeAreaView>
  );
}
