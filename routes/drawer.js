import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeNav from "./homeStack";
import AboutNav from "./aboutStack";
import { Image, StyleSheet, View, Text, ImageBackground } from "react-native";
import HeartLogo from "../assets/img/heart_logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import Background from "../assets/img/game_bg.png";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#eee" },
          headerTintColor: "#444",
          headerTitle: (props) => (
            <View style={styles.headerTitle}>
              <Image style={styles.headerImage} source={HeartLogo} />
              <Text style={styles.headerText}>{props.children}</Text>
            </View>
          ),
        }}
      >
        <Drawer.Screen name="Home" component={HomeNav} />
        <Drawer.Screen name="About" component={AboutNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
