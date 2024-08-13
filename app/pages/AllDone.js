import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";
import { router } from "expo-router";
export default function AllDone() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <Image source={require("../assets/image.png")} style={styles.logo} />

        <View style={styles.containerTitle}>
          <Text style={styles.title}>All done-e-e-e!</Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text1}>
            Your account is all set up. You can now go ahead and start your path
            to a greener future.
          </Text>
        </View>
        <View style={styles.buttonGetStarted}>
          <TouchableOpacity>
            <Text style={styles.text2}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  container: {
    marginTop: "20%",
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  containerTitle: {
    marginTop: "20%",
  },
  title: {
    fontSize: 30,
    fontFamily: "OpenSans_800ExtraBold",
  },
  containerText: {
    marginTop: "13%",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 17,
    fontFamily: "OpenSans_500Medium",
    padding: 14,
    color: "black",
  },
  buttonGetStarted: {
    marginTop: "5%",
    width: "80%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#41980B",
    borderRadius: 6,
  },
  text2: {
    color: "white",
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 17,
  },
});
