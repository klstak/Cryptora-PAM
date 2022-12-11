import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WatchListScreen from "../screens/WatchlistScreen";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#BCC4C8",
        tabBarStyle: {
          backgroundColor: "#080A0C",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="home" size={focused ? 30 : 25} color={color} />,
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <AntDesign name="staro" size={focused ? 30 : 25} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
