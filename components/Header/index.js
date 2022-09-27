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
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuItemText}>Lista</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity onPress={() => navigation.navigate('Comprados')}>
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
