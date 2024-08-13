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
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerShown: false, // Hide the header if not needed
          contentStyle: { flex: 1 }, // Ensure screen content uses all available space
          // Optionally, you can set other styles for the screen
        }}
      >
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            // Customize specific screen options if needed
            contentStyle: { flex: 1 }, // Ensure content uses all available space
          }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{
            contentStyle: { flex: 1 },
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            contentStyle: { flex: 1 },
          }}
        />
        <Stack.Screen
          name="Recovery1"
          component={Recovery1}
          options={{
            contentStyle: { flex: 1 },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            contentStyle: { flex: 1 },
          }}
        />
        <Stack.Screen
          name="AllDone"
          component={AllDone}
          options={{
            contentStyle: { flex: 1 },
          }}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={{
            contentStyle: { flex: 1 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
