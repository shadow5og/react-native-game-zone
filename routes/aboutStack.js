import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";
import { Button, Text, View } from "react-native";

const AboutStack = createNativeStackNavigator();

export default function Navigator({ onLayoutRootView }) {
  return (
    <NavigationContainer>
      <AboutStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#eee" },
          headerTintColor: "#444",
          headerLeft: () => (
            <View style={{ marginRight: 15 }}>
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#000"
              />
            </View>
          ),
        }}
      >
        <AboutStack.Screen
          name="About"
          options={{
            title: "About GameZone",
          }}
          component={About}
        ></AboutStack.Screen>
      </AboutStack.Navigator>
    </NavigationContainer>
  );
}
