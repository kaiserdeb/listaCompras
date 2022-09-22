import React, { useState } from "react";
import { useFonts } from "expo-font";
import { View, ActivityIndicator, Icon, StyleSheet } from "react-native";
import { Header } from "./components";
import { Home } from "./screens/home";
import { Comprados } from "./screens/comprados";
import { colors } from "./constants/colors";

export default function App() {
  const [principalVisible, setPrincipalVisible] = useState(true);
  const [shoppingList, setShoppingList] = useState([]);

  const [loaded] = useFonts({
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
  });

  const onChangePrincipalView = (value) => {
    setPrincipalVisible(value);
  };

  const onAddItem = (item) => {
    setShoppingList((prevShoppingList) => [...prevShoppingList, item]);
  };

  const onDeleteItem = (id) => {
    setShoppingList(shoppingList.filter((item) => item.id !== id));
  };

  const onUpdateItem = (id) => {
    let prevItem = {
      ...shoppingList.find((item) => item.id === id),
      color: "#cbeaa6",
      buyed: true,
    };
    setShoppingList([
      ...shoppingList.filter((item) => item.id !== id),
      prevItem,
    ]);
  };

  if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }


  let viewShow = principalVisible ? (
    <Home
      shoppingList={shoppingList}
      onAddItem={onAddItem}
      onDeleteItem={onDeleteItem}
      onUpdateItem={onUpdateItem}
    />
  ) : (
    <Comprados shoppingList={shoppingList} />
  );
  return (
    <>
      <Header onChangePrincipalView={onChangePrincipalView} />
      {viewShow}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  }
});