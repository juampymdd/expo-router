import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import React from "react";

const StackLayout = () => {
  const navigation = useNavigation();
  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
    } else {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
  };
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "white" },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back" : "menu"}
            size={24}
            color="black"
            onPress={() => onHeaderLeftClick(canGoBack as boolean)}
            className="mr-5"
          />
        ), // Hide the back button
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
