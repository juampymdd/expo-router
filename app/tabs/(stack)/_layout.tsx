import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{ title: "Home Screen", animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="products/index"
        options={{ title: "Products", animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="profile/index"
        options={{ title: "Profile", animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="settings/index"
        options={{ title: "Settings", animation: "ios_from_right" }}
      />
    </Stack>
  );
};

export default StackLayout;
