import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { colors } from "../../constants/colors";

export const Header = ({ onChangePrincipalView }) => {
  return (
    <View style={styles.header}>
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => onChangePrincipalView(true)}>
          <Text style={styles.menuItemText}>Lista</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => onChangePrincipalView(false)}>
          <Text style={styles.menuItemText}>Comprado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: 60,
    backgroundColor: colors.backgroundLight,
    flexDirection: "row",
  },
  menuItem: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    fontFamily: "Rubik-Regular",
  },
});
