import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import { useFonts } from "@expo-google-fonts/open-sans";

import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

export default function Description() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("LogIn");
  };

  const { height, width } = useWindowDimensions();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        <Image
          source={require("../assets/image.png")}
          style={[styles.logo, { width: width * 0.55, height: width * 0.55 }]}
        />
        <Text
          style={[
            styles.textDescriptionIntroduction,
            { paddingHorizontal: width * 0.1 },
          ]}
        >
          Our app helps you track your carbon footprint, discover eco-friendly
          tips, and join a community dedicated to sustainability. Together, we
          can make a positive impact on our planet.
        </Text>
        <Text style={styles.textDescriptionContinue}>
          Tap "Continue" to learn more and start your green journey with Orbis!
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            { paddingHorizontal: width * 0.3, paddingVertical: height * 0.025 },
          ]}
          onPress={handleContinue}
        >
          <Text style={styles.continueButton}>Continue</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 50,
    marginTop: 40,
  },
  safeview: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textDescriptionIntroduction: {
    fontSize: 17,
    fontFamily: "OpenSans_700Bold",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: Platform.OS === "ios" ? 80 : 40,
  },
  textDescriptionContinue: {
    fontSize: 17,
    fontFamily: "OpenSans_700Bold",
    textAlign: "center",
    marginBottom: "15%",
    flexShrink: 1,
    letterSpacing: -0.5,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#41980B",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButton: {
    fontFamily: "OpenSans_600SemiBold",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
