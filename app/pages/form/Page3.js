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

export default function Page3() {
  const backgroundImage = require("../../assets/background.jpg"); // Update this path according to your project structure

  const { width } = useWindowDimensions();

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
        <StatusBar hidden />

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
              How often do you eat animal based product?
            </Text>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.text}>Never</Text>
              <Text style={styles.context}>Vegan</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.text}>Infrequently</Text>
              <Text style={styles.context}>
                Vegetarian - eggs/dairy, no meat
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.text}>Occasionally</Text>
              <Text style={styles.context}>
                Really like veggies - occasional meat, eggs/dairy
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.text}>Often</Text>
              <Text style={styles.context}>
                Balanced meat/veggies - meat a few times a week, eggs/dairy
                almost daily
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={[styles.button, { width: buttonWidth }]}>
              <Text style={styles.text}>Very often</Text>
              <Text style={styles.context}>Meat daily</Text>
            </TouchableOpacity>
          </View>
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
  button: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
});
