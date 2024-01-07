import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviews";
import About from "../screens/about";
import { memo } from "react";
import { Button, Text, View } from "react-native";

const HomeStack = createNativeStackNavigator();
// Optimizing it as I use the component in a render callback
const HomeScreen = memo(Home);

export default function Navigator({ onLayoutRootView }) {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
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
        <HomeStack.Screen
          name="Home"
          options={{
            title: "GameZone",
          }}
        >
          {(props) => (
            <HomeScreen {...props} onLayoutRootView={onLayoutRootView} />
          )}
        </HomeStack.Screen>
        <HomeStack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: "Review Detials",
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
