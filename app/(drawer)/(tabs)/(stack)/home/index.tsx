import CustomButton from "@/components/Shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <SafeAreaView>
      <View className="p-10">
        <CustomButton onPress={() => router.push("/products")} className="mb-2">
          Products
        </CustomButton>
        <CustomButton
          color="secondary"
          onPress={() => router.push("/profile")}
          className="mb-2"
        >
          Profile
        </CustomButton>
        <CustomButton
          color="tertiary"
          onPress={() => router.push("/settings")}
          className="mb-2"
        >
          Ajustes
        </CustomButton>
        <Link href="/products" className="mb-4" asChild>
          <CustomButton color="primary" variant="text-only">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir Menú</CustomButton>
        {/* <Text className="text-2xl font-bold">Home</Text>
        <Link href="/products" className="mb-4">
          <Text>Products</Text>
        </Link>
        <Link href="/settings" className="mb-4">
          <Text>Settings</Text>
        </Link>
        <Link href="/profile" className="mb-4">
          <Text>Profile</Text>
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
