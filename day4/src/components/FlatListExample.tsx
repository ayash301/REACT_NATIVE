import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, RefreshControl } from "react-native";

const initialData = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

export default function FlatListExample() {
  const [data, setData] = useState(initialData);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData([...data, { id: Date.now().toString(), title: "New Item" }]);
      setRefreshing(false);
    }, 1000);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  const getItemLayout = (data: any, index: number) => ({
    length: 50,
    offset: 50 * index,
    index,
  });

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={1}
      horizontal={false}
      initialNumToRender={5}
      removeClippedSubviews={false}
      getItemLayout={getItemLayout}
      ListHeaderComponent={<Text style={styles.header}>Daftar Item (FlatList)</Text>}
      ListFooterComponent={<Text style={styles.footer}>Total Item: {data.length}</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      extraData={data.length}
      onEndReached={() => console.log("End reached")}
      onEndReachedThreshold={0.5}
      viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      showsVerticalScrollIndicator={true}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 16, borderBottomWidth: 1, borderColor: "#ddd" },
  header: { fontWeight: "bold", padding: 16, backgroundColor: "#f9f9f9" },
  footer: { textAlign: "center", padding: 16, color: "gray" },
  separator: { height: 1, backgroundColor: "#eee" },
});
