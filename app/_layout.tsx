import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import React from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    if (error) {
      console.error("Error loading fonts:", error);
      throw new Error("Failed to load fonts: " + error.message);
    }
  }
  SplashScreen.hideAsync();

  return <Slot />;
};

export default RootLayout;
