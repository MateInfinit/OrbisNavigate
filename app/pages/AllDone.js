import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function AllDone() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <View></View>
    </SafeAreaView>
  );
}
// <Image source={require("../aseets/image.png")} style={styles.logo} />
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
});
