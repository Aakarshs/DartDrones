import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenTwo from "./screens/test";
import GetStarted from "./screens/getStarter.js";
import * as React from "react";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="HomeScreenTwo" component={HomeScreenTwo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
