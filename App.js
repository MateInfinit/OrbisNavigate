import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loading from "./app/pages/Loading";
import LogIn from "./app/pages/LogIn";
import Description from "./app/pages/Description";
import Recovery1 from "./app/pages/Recovery1";
import SignUp from "./app/pages/SignUp";
import AllDone from "./app/pages/AllDone";
import TermsConditions from "./app/pages/TermsConditions";
import Page1 from "./app/pages/form/Page1";
import Page2 from "./app/pages/form/Page2";
import Page3 from "./app/pages/form/Page3";
import Page4 from "./app/pages/form/Page4";

const AuthStack = createNativeStackNavigator();
const FormularStack = createNativeStackNavigator();

// AuthStack Navigator
function AuthStackNavigator({ navigation }) {
  return (
    <AuthStack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
        contentStyle: { flex: 1 },
      }}
    >
      <AuthStack.Screen name="Loading" component={Loading} />
      <AuthStack.Screen name="Description" component={Description} />
      <AuthStack.Screen name="LogIn" component={LogIn} />
      <AuthStack.Screen name="Recovery1" component={Recovery1} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen
        name="AllDone"
        component={AllDone}
        options={{
          contentStyle: { flex: 1 },
        }}
      />
      <AuthStack.Screen name="TermsConditions" component={TermsConditions} />
    </AuthStack.Navigator>
  );
}

// FormularStack Navigator
function FormularStackNavigator() {
  return (
    <FormularStack.Navigator
      initialRouteName="Page1"
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false, // Hides the back button title
        headerTintColor: "black", // Changes the back button color to black
        contentStyle: { flex: 1 },
      }}
    >
      <FormularStack.Screen name="Page 1" component={Page1} />
      <FormularStack.Screen name="Page 2" component={Page2} />
      <FormularStack.Screen name="Page 3" component={Page3} />
      <FormularStack.Screen name="Page 4" component={Page4} />
    </FormularStack.Navigator>
  );
}

// Root Stack Navigator
const RootStack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="AuthStack">
      <RootStack.Screen
        name="AuthStack"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="FormularStack"
        component={FormularStackNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
