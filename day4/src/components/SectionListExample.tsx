import React, { useState } from "react";
import { SectionList, Text, View, StyleSheet, RefreshControl } from "react-native";

const initialSections = [
  { title: "A", data: ["Apple", "Apricot"] },
  { title: "B", data: ["Banana", "Blueberry"] },
  { title: "C", data: ["Cherry", "Coconut"] },
];

export default function SectionListExample() {
  const [sections, setSections] = useState(initialSections);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setSections([{ title: "N", data: ["New Fruit"] }, ...sections]);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
      renderSectionFooter={({ section }) => (
        <Text style={styles.footer}>End of {section.title}</Text>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
      stickySectionHeadersEnabled={true}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      ListEmptyComponent={<Text style={styles.empty}>Tidak ada data</Text>}
      initialNumToRender={5}
    />
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: "#f0f0f0", padding: 8 },
  headerText: { fontWeight: "bold" },
  footer: { padding: 4, color: "gray", fontStyle: "italic" },
  item: { padding: 12, borderBottomWidth: 1, borderColor: "#ddd" },
  separator: { height: 1, backgroundColor: "#ccc" },
  sectionSeparator: { height: 8, backgroundColor: "transparent" },
  empty: { textAlign: "center", padding: 20 },
});
