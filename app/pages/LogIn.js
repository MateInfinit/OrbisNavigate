import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
  StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Starting the page:
export default function LogIn() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  }); // Just fonts

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // Managed user inputs

  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://f70d-78-97-173-76.ngrok-free.app/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigation.navigate("AllDone");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please try again.");
    }
  };

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

  const fadeOut = (callback) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      if (callback) {
        callback();
      }
    });
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  // Handled pressing the buttons

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle={"dark-content"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Animated.View style={[styles.animatedView, { opacity: fadeAnim }]}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            bounces={false}
          >
            <View style={styles.header1}>
              <Image
                source={require("../assets/image.png")}
                style={styles.logo}
              />
              <Text style={styles.text1}>ORBIS</Text>
            </View>

            <View style={styles.header2}>
              <Text style={styles.text2}>Welcome back!</Text>
              <Text style={styles.text3}>Let’s sign you in.</Text>
            </View>

            <View style={styles.inputBox}>
              <Icon
                name="envelope-o"
                size={20}
                color="#bbb"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                placeholderTextColor={"gray"}
              />
            </View>

            <View style={styles.inputBox}>
              <MaterialCommunityIcons
                name="key-outline"
                size={20}
                color="#bbb"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry={!showPassword}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                placeholderTextColor={"gray"}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialCommunityIcons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={25}
                  color="#bbb"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.forgotText}
              onPress={() => navigation.navigate("Recovery1")}
            >
              <Text style={styles.forgotText2}>Forgot your password?</Text>
            </TouchableOpacity>

            <View style={styles.lastButtons}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
              >
                <Text style={styles.text4}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.signupButton}
                onPress={handleSignUp}
              >
                <Text style={styles.text5}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Each style use can be deducted by the name:

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#fff", // Ensure background color is consistent
  },
  container: {
    flex: 1,
    backgroundColor: "#fff", // Ensure container background color
    paddingHorizontal: 20, // Adjust padding if necessary
    justifyContent: "center",
  },
  animatedView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center", // Center content vertically
  },
  header1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  text1: {
    fontFamily: "OpenSans_800ExtraBold",
    fontSize: 24,
    marginLeft: 10,
  },
  header2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text2: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 15,
  },
  text3: {
    fontFamily: "OpenSans_800ExtraBold",
    fontSize: 27,
    marginTop: 5,
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10, // Adjusted padding
  },
  forgotText: {
    alignSelf: "flex-end",
    paddingBottom: 20,
  },
  forgotText2: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 15,
    color: "#351F17",
    textDecorationLine: "underline",
  },
  lastButtons: {
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: "#2E8B57",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 10, // Adjust spacing
  },
  text4: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 15,
    color: "white",
  },
  signupButton: {
    borderWidth: 1,
    borderColor: "#2E8B57",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  text5: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 15,
    color: "#2E8B57",
  },
});
