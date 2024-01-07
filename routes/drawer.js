import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeNav from "./homeStack";
import AboutNav from "./aboutStack";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNav} />
        <Drawer.Screen name="About" component={AboutNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
