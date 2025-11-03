import React, { useState } from "react";
import { ScrollView, RefreshControl, Text, StyleSheet } from "react-native";

export default function RefreshOnly() {
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(0);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setCount(count + 1);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#007AFF"
          title="Memuat..."
          titleColor="#007AFF"
          colors={["#007AFF", "#00C851"]}
          progressBackgroundColor="#f2f2f2"
          progressViewOffset={20}
          enabled={true}
        />
      }
      contentContainerStyle={styles.content}
    >
      <Text style={styles.text}>
        Swipe ke bawah untuk refresh!{"\n"}Jumlah refresh: {count}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 50, alignItems: "center" },
  text: { fontSize: 16 },
});
