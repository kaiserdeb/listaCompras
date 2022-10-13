import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/colors";
import { Comprados } from "../screens/comprados";

const Stack = createNativeStackNavigator();

export const CompradosNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Comprados"
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
            <Stack.Screen name="Comprados" component={Comprados} />
        </Stack.Navigator>
    )
}