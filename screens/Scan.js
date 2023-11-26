import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Back from "../components/Back";

const Scan = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover.png")}
      >
        <View style={{ marginLeft: 22 }}>
          <Back />
        </View>
        <View
          style={{ flex: 1, display: "flex", justifyContent: "space-between" }}
        >
          <View
            style={{ display: "flex", alignItems: "center", marginTop: 44 }}
          >
            <Image source={require("../assets/border.png")} />
          </View>
          <View
            style={[
              styles.shadow,
              styles.center,
              {
                marginHorizontal: 32,
                gap: 16,
                marginBottom: 44,
                borderRadius: 18,
                padding: 12,
              },
            ]}
          >
            <Image source={require("../assets/Rectangle31.png")} />
            <View style={[styles.center, { flex: 1 }]}>
              <View>
                <Text>Lauren's</Text>
                <Text style={{ fontSize: 18 }}>Orange Juice</Text>
              </View>
              <TouchableOpacity
                style={{
                  marginRight: 16,
                  backgroundColor: "blue",
                  height: 44,
                  width: 44,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 32 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Scan;
const styles = StyleSheet.create({
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shadow: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: -4,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
});
