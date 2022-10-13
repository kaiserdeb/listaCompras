import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { ListItem } from "../components";
import { colors } from "../constants/colors";
import { useSelector } from "react-redux";

export const Comprados = () => {
  const compras = useSelector((state) => state.compras.compras);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.itemList}
        data={compras}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
},
itemList: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
},
titleContainer: {
    marginTop:10,
    alignItems: 'center',
  },
title: {
    fontSize: 20,
    color: colors.gray,
    fontFamily: "Rubik-Bold",
    alignItems: 'center',
  },
});
