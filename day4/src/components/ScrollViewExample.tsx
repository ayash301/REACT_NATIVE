import React, { useState } from "react";
import { ScrollView, View, Text, RefreshControl, StyleSheet } from "react-native";

export default function ScrollViewExample() {
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems([...items, `Item ${items.length + 1}`]);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal={false}
      scrollEnabled={true}
      bounces={true}
      overScrollMode="auto"
      removeClippedSubviews={false}
      pagingEnabled={false}
      keyboardDismissMode="none"
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.contentContainer}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      onScroll={(event) => console.log("Scroll Y:", event.nativeEvent.contentOffset.y)}
      scrollEventThrottle={16}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Daftar Item (ScrollView)</Text>
      </View>

      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contentContainer: { padding: 20 },
  header: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  headerText: { fontWeight: "bold" },
  item: { padding: 16, borderBottomWidth: 1, borderColor: "#eee" },
});
