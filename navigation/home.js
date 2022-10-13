import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/colors";
import { Home } from "../screens/home";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Lista de compras"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontFamily: 'Rubik-Regular',
                },
            }}
        >
            <Stack.Screen name="Lista de compras" component={Home} />
        </Stack.Navigator>
    )
}