import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";

export default function TouchEvaluation() {
  const [count, setCount] = useState(0);

  const handleSimplePress = () => Alert.alert("Button ditekan!");
  const handleLongPress = () => Alert.alert("Long Press Terdeteksi!");

  // Ripple Android
  const androidRipple = TouchableNativeFeedback.Ripple("#2196F3", true);

  return (
    <View style={styles.container}>
      {/* ✅ 1. BUTTON */}
      <Text style={styles.title}>1. BUTTON</Text>
      <Button
        title="Button Sederhana"
        onPress={handleSimplePress}
        color="#007AFF"
        disabled={false}
        accessibilityLabel="Tombol Alert"
        touchSoundDisabled={false} // Android only
      />

      {/* ✅ 2. PRESSABLE */}
      <Text style={styles.title}>2. PRESSABLE</Text>
      <Pressable
        onPress={() => setCount(count + 1)}
        onLongPress={handleLongPress}
        onPressIn={() => console.log("Press In")}
        onPressOut={() => console.log("Press Out")}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        android_ripple={{ color: "#2196F3", borderless: false }}
        style={({ pressed }) => [
          styles.pressableBtn,
          { opacity: pressed ? 0.5 : 1 },
        ]}
      >
        <Text style={styles.text}>Pressable (+1)</Text>
      </Pressable>
      <Text style={styles.counter}>Count: {count}</Text>

      {/* ✅ 3. TOUCHABLE OPACITY */}
      <Text style={styles.title}>3. TOUCHABLE OPACITY</Text>
      <TouchableOpacity
        style={styles.opacityBtn}
        activeOpacity={0.3}
        onPress={handleSimplePress}
        disabled={false}
      >
        <Text style={styles.text}>Opacity Feedback</Text>
      </TouchableOpacity>

      {/* ✅ 4. TOUCHABLE HIGHLIGHT */}
      <Text style={styles.title}>4. TOUCHABLE HIGHLIGHT</Text>
      <TouchableHighlight
        style={styles.highlightBtn}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={handleSimplePress}
        onShowUnderlay={() => console.log("Show Underlay")}
        onHideUnderlay={() => console.log("Hide Underlay")}
      >
        <Text style={styles.text}>Highlight Underlay</Text>
      </TouchableHighlight>

      {/* ✅ 5. TOUCHABLE WITHOUT FEEDBACK */}
      <Text style={styles.title}>5. TOUCHABLE WITHOUT FEEDBACK</Text>
      <TouchableWithoutFeedback
        onPress={handleSimplePress}
        onLongPress={handleLongPress}
        delayLongPress={1000}
        hitSlop={{ top: 20 }}
      >
        <View style={styles.noFeedbackBox}>
          <Text style={{ color: "white" }}>Tanpa Feedback Visual</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* ✅ 6. TOUCHABLE NATIVE FEEDBACK (ANDROID) */}
      {Platform.OS === "android" && (
        <>
          <Text style={styles.title}>6. TOUCHABLE NATIVE FEEDBACK</Text>
          <TouchableNativeFeedback
            background={androidRipple}
            onPress={handleSimplePress}
            useForeground={TouchableNativeFeedback.canUseNativeForeground()}
          >
            <View style={styles.nativeBtn}>
              <Text style={{ color: "black" }}>Ripple Android</Text>
            </View>
          </TouchableNativeFeedback>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", gap: 15 },
  title: { marginTop: 10, fontWeight: "bold", fontSize: 16 },
  pressableBtn: { backgroundColor: "#007AFF", padding: 12, borderRadius: 5 },
  counter: { marginTop: 5, fontSize: 16, fontWeight: "bold" },
  opacityBtn: { backgroundColor: "#007AFF", padding: 12, borderRadius: 5 },
  highlightBtn: { backgroundColor: "#007AFF", padding: 12, borderRadius: 5 },
  noFeedbackBox: { backgroundColor: "gray", padding: 15, borderRadius: 6 },
  nativeBtn: { backgroundColor: "white", padding: 15, borderRadius: 6 },
  text: { color: "white", fontSize: 16 },
});
