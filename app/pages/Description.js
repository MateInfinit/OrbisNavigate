import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
  StatusBarStyle,
  StatusBar,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Link, SplashScreen, font } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
//imported useful stuff

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";
//imported fonts

export default function Description() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });
  const navigation = useNavigation();

  /* 
 useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });

    return unsubscribe;
  }, [navigation]);
  
    pana aici- utilizatorul nu mai poate da back,
    dar atentie! nici butoanele care vor trimite la pagini anterioare nu vor functiona (e.g cancel)
  */
  const handleContinue = () => {
    navigation.navigate("LogIn");
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        <Image source={require("../assets/image.png")} style={styles.logo} />
        <Text style={styles.textDescriptionIntroduction}>
          Our app helps you track your carbon footprint, discover eco-friendly
          tips, and join a community dedicated to sustainability. Together, we
          can make a positive impact on our planet.
        </Text>
        <Text style={styles.textDescriptionContinue}>
          Tap "Continue" to learn more and start your green journey with Orbis!
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
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
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 50,
  },
  safeview: {
    flex: 1,
  },
  textDescriptionIntroduction: {
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: Platform.OS === "ios" ? 80 : 40,
    paddingHorizontal: 20,
  },
  textDescriptionContinue: {
    fontSize: 13,
    fontFamily: "OpenSans_700Bold",
    textAlign: "center",
    marginBottom: "15%",
    flexShrink: 1,

    letterSpacing: -0.5,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 20,
    paddingHorizontal: 110,
    borderRadius: 5,
    alignItems: "center",
    width: 329,
    height: 56,
  },
  continueButton: {
    fontFamily: "OpenSans_600SemiBold",
    color: "white",
    fontSize: 15,
    paddingTop: 2,
    fontWeight: "bold",
  },
});
