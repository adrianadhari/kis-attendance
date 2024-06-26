import React from "react";
import { Image, Text, View } from "react-native";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View>
        <Image source={require("../../assets/img/logo_kis.png")} />
      </View>
      <View>
        <Text>This is homepage</Text>
      </View>
    </View>
  );
};

export default Home;
