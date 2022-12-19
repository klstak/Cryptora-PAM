import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import WatchListScreen from "../screens/WatchlistScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import AccountScreen from "../screens/AccountScreen";
import RewardScreen from "../screens/RewardScreen";

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
        name="Wallet"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="wallet" size={focused ? 30 : 25} color={color} />,
        }}
      />
      <Tab.Screen
        name="Reward"
        component={RewardScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons name="gift" size={focused ? 30 : 25} color={color} />,
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Entypo name="star" size={focused ? 30 : 25} color={color} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <MaterialIcons name="account-circle" size={focused ? 30 : 25} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
