import CustomButton from "@/components/Shared/CustomButton";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="p-10">
        <CustomButton
          color="secondary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>
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
