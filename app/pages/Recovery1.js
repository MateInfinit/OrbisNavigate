import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
  StatusBar,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { Link, SplashScreen, font } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";
//imported fonts

import Icon from "react-native-vector-icons/FontAwesome";

//page:
export default function Recovery1() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  }); //just fonts

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (fontsLoaded) {
      fadeIn();
    }
  }, [fontsLoaded]);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleSubmit = () => {
    console.log("Email:", email);
  };

  const handleCancel = () => {
    navigation.navigate("LogIn");
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAvoidingView //pentru ca butoanele sa nu se mutileze cand deschizi tastatura
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <StatusBar barStyle={"dark-content"} />
        <Animated.View style={{ opacity: fadeAnim }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
            <View style={styles.LogoAndTitle}>
              <Image
                source={require("../assets/image.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>ORBIS</Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Recover your password</Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputBox}>
                <Icon
                  name="envelope-o"
                  size={20}
                  color="#bbb"
                  style={styles.icon1}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.inputText}
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                />
              </View>
            </View>
            <View style={styles.lastButton1}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.textButton1}>Send code</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.lastButton2}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancel}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  icon1: {
    marginRight: 20,
  },
  LogoAndTitle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "5%",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  title: {
    fontFamily: "OpenSans_800ExtraBold",
    fontSize: 24,
    paddingTop: "4%",
    paddingRight: "5%",
    letterSpacing: -1.38,
  },
  subtitle: {
    flexShrink: 1,
    fontFamily: "OpenSans_800ExtraBold",
    fontSize: 29,
    paddingLeft: 2,
    paddingTop: "20%",
    paddingBottom: "20%",
    letterSpacing: -1.8,
    textAlign: "center",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "90%",
    height: 60,
    marginBottom: 20,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputText: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  textButton1: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 16,
    paddingLeft: 2,
    alignText: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    letterSpacing: -0.7,
  },
  lastButton1: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: "8%",
    width: "100%",
    height: "50%",
  },
  lastButton2: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    width: "100%",
    height: "50%",
    paddingTop: "37%",
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 16,
    paddingLeft: 2,
    alignText: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    letterSpacing: -0.7,
  },
});
