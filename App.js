import "react-native-gesture-handler";
import React from "react";
import { Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import Scan from "./screens/Scan";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarLabel: () => null, headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Cart}
        options={{
          tabBarIcon: () => <Image source={require("./assets/home.png")} />,
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: () => <Image source={require("./assets/ring.png")} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: () => <Image source={require("./assets/Vector.png")} />,
        }}
      />
      <Tab.Screen
        name="Scans1"
        component={Scan}
        options={{
          tabBarIcon: () => <Image source={require("./assets/time.png")} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => <Image source={require("./assets/cart.png")} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
