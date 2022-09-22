import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "../components";
import { colors } from "../constants/colors";

export const Comprados = ({ shoppingList }) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Comprados</Text>
        </View>
      <FlatList
        style={styles.itemList}
        data={shoppingList.filter((item) => item.buyed)}
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
