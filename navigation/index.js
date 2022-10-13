import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { HomeNavigator } from "./home";
import { CompradosNavigator } from "./comprados";

const BottomTab = createBottomTabNavigator();

export const AppNavigator = ({ onUpdateItem }) => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                initialRouteName="HomeTab"
                screenOptions={{
                    headerShown: false
                }}
                >
                <BottomTab.Screen
                    name="HomeTab"
                    options={{
                        title: 'Lista de compras',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons 
                            name={focused ? 'list' : "list-outline"}
                            size={22}
                            color={colors.primary}
                            />
                        ),
                    }}
                >
                    {() => 
                        <HomeNavigator 
                            onUpdateItem={onUpdateItem}
                        />
                    }
                </BottomTab.Screen>
                <BottomTab.Screen
                    name="CompradosTab"
                    options={{
                        title: 'Comprados',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons 
                            name={focused ? 'cart' : "cart-outline"}
                            size={22}
                            color={colors.primary}
                            />
                        )
                    }}
                >
                    {() => <CompradosNavigator />}
                </BottomTab.Screen>
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}