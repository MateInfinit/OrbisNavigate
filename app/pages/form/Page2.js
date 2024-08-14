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
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Fredoka_300Light,
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
  Fredoka_700Bold,
} from "@expo-google-fonts/fredoka";

export default function Page1() {
  const backgroundImage = require("../../assets/background.jpg");
  const navigation = useNavigation();

  const { width } = useWindowDimensions();

  const handleContinue = () => {
    navigation.navigate("Page 3");
  };

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
    const buttonWidth = width * 0.8;

    return (
      <SafeAreaView style={styles.root}>
        <StatusBar hidden />

        <ImageBackground
          style={styles.background}
          source={backgroundImage}
          resizeMode="cover"
        >
          <View style={{ marginTop: "20%", marginBottom: "20%" }}>
            <Text style={styles.title}>How often do you shop?</Text>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[styles.button, { width: buttonWidth }]}
              onPress={handleContinue}
            >
              <Text style={styles.text}>Rarely</Text>
              <Text style={styles.context}>
                You only buy new items when it's necessary. You try to fix
                broken devices and wear clothing for multiple years.
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[styles.button, { width: buttonWidth }]}
              onPress={handleContinue}
            >
              <Text style={styles.text}>Average</Text>
              <Text style={styles.context}>
                You like things that last a while but don't say no to the casual
                upgrade.
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[styles.button, { width: buttonWidth }]}
              onPress={handleContinue}
            >
              <Text style={styles.text}>Shopper</Text>
              <Text style={styles.context}>
                You enjoy shopping for the latest and greatest. Whether it's
                clothing or electronics, you've got to have it.
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[styles.button, { width: buttonWidth }]}
              onPress={handleContinue}
            >
              <Text style={styles.text}>Luxury Shopper</Text>
              <Text style={styles.context}>
                You prefer high-end, luxury items. Only the best will do for
                you, whether it's fashion or technology.
              </Text>
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
  },
  optionContainer: {
    marginBottom: "7%",
    marginTop: "2%", // Adjusting the top margin to make sure there's space between the title and buttons
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
    fontSize: 17,
    marginBottom: 5, // Space between the title and context
  },
  context: {
    fontSize: 15,
    fontFamily: "Fredoka_400Regular",
    textAlign: "center",
  },
});
