import { View, Text, Image } from "react-native";
import React from "react";

const Checkin = () => {
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
        <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "600" }}>
          Welcome!
        </Text>
      </View>
      <View style={{ width:'100%', paddingHorizontal: 30, gap: 20, alignItems: 'center' }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "#846AAD" }}>222310037 Rega Bagus Ardhana</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text style={{ paddingBottom: 10 }}>Pemrograman Web</Text>
          <Text style={{ borderTopWidth: 1, paddingTop: 10 }}>
            Febri Damatraseta Fairuz S.T, M.Kom
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>Jam kehadiran: 19.00</Text>
            <Text>Sabtu, 15 Juni 2024</Text>
        </View>
      </View>
    </View>
  );
};

export default Checkin;
