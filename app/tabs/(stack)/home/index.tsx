import CustomButton from "@/components/Shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="p-10">
        <CustomButton
          onPress={() => router.push("/tabs/products")}
          className="mb-2"
        >
          Products
        </CustomButton>
        <CustomButton
          color="secondary"
          onPress={() => router.push("/tabs/profile")}
          className="mb-2"
        >
          Profile
        </CustomButton>
        <CustomButton
          color="tertiary"
          onPress={() => router.push("/tabs/settings")}
          className="mb-2"
        >
          Ajustes
        </CustomButton>
        <Link href="/tabs/products" className="mb-4" asChild>
          <CustomButton color="primary" variant="text-only">
            Productos
          </CustomButton>
        </Link>
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
