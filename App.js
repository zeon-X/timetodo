import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import styles from "./assets/styles/styles";
import { useCallback } from "react";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    reg: require("./assets/fonts/Inter-Regular.ttf"),
    med: require("./assets/fonts/Inter-Medium.ttf"),
    semi: require("./assets/fonts/Inter-SemiBold.ttf"),
    bold: require("./assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <BottomTabNavigator />
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
