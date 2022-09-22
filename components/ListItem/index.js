import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";

export const ListItem = ({ item, onHandleDelete, onHandleConfirm }) => {
  return (
    <View style={{ backgroundColor: item.color, ...styles.itemContainer }}>
      {!item.buyed && (
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => onHandleDelete(item.id)}
        >
          <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.item}>{item.value}</Text>

      {!item.buyed && (
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => onHandleConfirm(item.id)}
        >
          <Text style={styles.confirm}>OK</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
//f9c784
//cbeaa6
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginVertical: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    fontSize: 16,
    textAlign: "center",
    color: colors.black,
    fontFamily: "Rubik-Bold",
  },
  delete: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
  },
  confirm: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
  },
  button: {
    backgroundColor: colors.danger,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  buttonConfirm: {
    backgroundColor: colors.secondary,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  buttonDelete: {
    backgroundColor: colors.danger,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
