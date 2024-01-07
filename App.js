import { registerRootComponent } from "expo";
import * as Font from "expo-font";
import { createContext, useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import HomeNav from "./routes/homeStack";
import { Text, View } from "react-native";
import Navigator from "./routes/drawer";

export const RootLayoutContext = createContext(null);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await getFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <RootLayoutContext.Provider value={{ onLayoutRootView }}>
      <Navigator />
    </RootLayoutContext.Provider>
  );
}

const getFonts = () => {
  return Font.loadAsync({
    "rubik-regular": require("./assets/fonts/RubikMaps-Regular.ttf"),
    "poppins-thinItalic": require("./assets/fonts/poppins/Poppins-ThinItalic.ttf"),
    "poppins-thin": require("./assets/fonts/poppins/Poppins-Thin.ttf"),
    "poppins-regular": require("./assets/fonts/poppins/Poppins-Regular.ttf"),
    "poppins-medium-italic": require("./assets/fonts/poppins/Poppins-MediumItalic.ttf"),
    "poppins-medium": require("./assets/fonts/poppins/Poppins-Medium.ttf"),
    "poppins-light-italic": require("./assets/fonts/poppins/Poppins-LightItalic.ttf"),
    "poppins-light": require("./assets/fonts/poppins/Poppins-Light.ttf"),
    "poppins-bold-italic": require("./assets/fonts/poppins/Poppins-BoldItalic.ttf"),
    "poppins-bold": require("./assets/fonts/poppins/Poppins-Bold.ttf"),
    "poppins-black-italic": require("./assets/fonts/poppins/Poppins-BlackItalic.ttf"),
    "poppins-black": require("./assets/fonts/poppins/Poppins-Black.ttf"),
  });
};

registerRootComponent(App);
