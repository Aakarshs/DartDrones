import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenTwo from "./screens/test";
import HomeScreenThree from "./screens/homeScreenThree";

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
        <Stack.Screen name="HomeScreenThree" component={HomeScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
