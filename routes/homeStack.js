import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviews";
import { Button, View } from "react-native";

const HomeStack = createNativeStackNavigator();

export default function HomeNav() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#eee" },
        headerTintColor: "#444",
        // headerLeft: () => (
        //   <View style={{ marginRight: 15 }}>
        //     <Button
        //       onPress={() => alert("This is a button!")}
        //       title="Info"
        //       color="#000"
        //     />
        //   </View>
        // ),
      }}
    >
      <HomeStack.Screen
        name="Home"
        options={{
          title: "GameZone",
        }}
        component={Home}
      />
      <HomeStack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Detials",
        }}
      />
    </HomeStack.Navigator>
  );
}
