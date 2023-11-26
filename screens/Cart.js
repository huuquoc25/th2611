import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import Back from "../components/Back";
import CartItem from "../components/CartItem";
import { DATA } from "../data";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation()
  return (
    <View style={{ paddingHorizontal: 18, backgroundColor: "#fff" }}>
      <Back />
      <Image
        style={{ marginBottom: 32 }}
        source={require("../assets/YourCart.png")}
      />
      <View style={{ display: "flex", gap: 18 }}>
        {DATA.map((item, ind) => (
          <CartItem item={item} key={ind} />
        ))}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: 600 }}>Total</Text>
        <Text style={{ fontSize: 22, fontWeight: 600, color: "#F08F5F" }}>
          $1.4553
        </Text>
      </View>
      <TouchableOpacity
        style={{
          display: "flex",
          marginTop: 32,
          backgroundColor: "#f08f5f",
          alignItems: "center",
          paddingVertical: 18,
          borderRadius: 16,
        }}
      >
        <Text onPress={()=>navigation.navigate("Payment")} style={{ fontSize: 20, color: "#fff", fontWeight: 600 }}>
          Proceed to checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
