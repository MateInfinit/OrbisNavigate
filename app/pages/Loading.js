import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
  StatusBar,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
//import { Link, useNavigation } from "expo-router";
import { useNavigation } from "@react-navigation/native";
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

//add fade between pages
//maybe make buttons not move when keyboard is used

export default function Loading() {
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      fadeIn();
      const timer = setTimeout(() => {
        fadeOut();
        setTimeout(() => {
          navigation.navigate("Description");
        }, 500);
      }, 1000); // 3.5 seconds loading

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, navigation]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.header1}>
          <Image source={require("../assets/image.png")} style={styles.logo} />

          <Text style={styles.text1}>ORBIS</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingBottom: "10%",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text1: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 24,
    paddingTop: "2%",
    letterSpacing: -1.38,
    color: "white",
  },
  header1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "5%",
  },
});
