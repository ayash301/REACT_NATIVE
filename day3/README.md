import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Modal,
  StatusBar,
  Switch,
  Button,
  StyleSheet,
} from "react-native";

interface ThemeType {
  backgroundColor: string;
  textColor: string;
  inputBg: string;
  borderColor: string;
}

interface MainContentProps {
  theme: ThemeType;
  isDark: boolean;
  inputText: string;
  setInputText: (text: string) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  setIsDark: (value: boolean) => void;
}

function MainContent({
  theme,
  isDark,
  inputText,
  setInputText,
  modalVisible,
  setModalVisible,
  setIsDark,
}: MainContentProps) {
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />

      <Text style={[styles.title, { color: theme.textColor }]}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.inputBg,
            borderColor: theme.borderColor,
            color: theme.textColor,
          },
        ]}
        placeholder="Tulis sesuatu..."
        placeholderTextColor={isDark ? "#aaa" : "#666"}
        value={inputText}
        onChangeText={setInputText}
      />

      <View style={styles.switchContainer}>
        <Text style={{ color: theme.textColor }}>Dark Mode</Text>
        <Switch
          value={isDark}
          onValueChange={setIsDark}
          trackColor={{ false: "#ccc", true: "#007AFF" }}
          thumbColor={isDark ? "#fff" : "#f4f3f4"}
        />
      </View>

      <Button title="Tampilkan Modal" onPress={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalBox, { backgroundColor: theme.inputBg }]}>
            <Text style={[styles.modalText, { color: theme.textColor }]}>
              Halo, {inputText || "teman"} 
            </Text>
            <Button title="Tutup" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default function App() {
  const [inputText, setInputText] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const theme: ThemeType = {
    backgroundColor: isDark ? "#000000" : "#FFFFFF",
    textColor: isDark ? "#FFFFFF" : "#000000",
    inputBg: isDark ? "#1E1E1E" : "#F9F9F9",
    borderColor: isDark ? "#444" : "#CCC",
  };

  return (
    <>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <MainContent
        theme={theme}
        isDark={isDark}
        inputText={inputText}
        setInputText={setInputText}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setIsDark={setIsDark}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: { width: 90, height: 90, marginBottom: 15, borderRadius: 50 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    gap: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: { padding: 20, borderRadius: 10, width: "80%" },
  modalText: { fontSize: 18, textAlign: "center", marginBottom: 10 },
});
