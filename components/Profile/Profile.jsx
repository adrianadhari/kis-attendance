import React from "react";
import { Image, Text, View } from "react-native";

const Profile = () => {
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", rowGap: 10 }}>
        <View
          style={{
            padding: 25,
            borderWidth: 3,
            borderColor: "black",
            borderRadius: 100,
            width: 100,
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/icons/profile.png")} />
        </View>
        <Text style={{ fontSize: 30, fontWeight: "bold", letterSpacing: 2 }}>
          Welcome, Rega!
        </Text>
        <View>
          <Text style={{ fontSize: 16, letterSpacing: 1 }}>
            Name: Rega Bagus Ardhana
          </Text>
          <Text style={{ fontSize: 16, letterSpacing: 1 }}>NPM: 222310037</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
