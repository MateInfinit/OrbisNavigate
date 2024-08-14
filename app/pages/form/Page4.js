import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";

import {
  useFonts,
  Fredoka_300Light,
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
  Fredoka_700Bold,
} from "@expo-google-fonts/fredoka";
import DonutChart from "../../objectsForm/DonutChart";

export default function Page3() {
  const backgroundImage = require("../../assets/background.jpg"); // Update this path according to your project structure

  const { width, height } = useWindowDimensions();

  const handleContinue = () => {};

  let [fontsLoaded] = useFonts({
    Fredoka_300Light,
    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
    Fredoka_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    const buttonWidth = width * 0.85;

    return (
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle={"dark-content"} />
        <ImageBackground
          style={styles.background}
          source={backgroundImage}
          resizeMode="cover"
        >
          <View
            style={{
              marginTop: "10%",
              alignItems: "center",
              marginBottom: "15%",
            }}
          >
            <Text style={styles.title}>
              How much of the food that you eat is unprocessed, unpackaged?
            </Text>
          </View>
          <DonutChart />

          <TouchableOpacity
            style={[
              styles.button,
              {
                paddingHorizontal: width * 0.3,
                paddingVertical: height * 0.025,
              },
            ]}
            onPress={handleContinue}
          >
            <Text style={styles.continueButton}>Continue</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "Fredoka_500Medium",
    fontSize: 32,
    textAlign: "center",
    color: "#000", // Adjust color if needed
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: "5%",
  },
  text: {
    fontFamily: "Fredoka_500Medium",
    fontSize: 20,
    marginBottom: 5,
  },
  context: {
    fontSize: 16,
    fontFamily: "Fredoka_400Regular",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20%",
  },
  continueButton: {
    fontFamily: "Fredoka_600SemiBold",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
