import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5 ">
        <Text className="text-5xl font-work-black text-primary">
          Hola Mundo
        </Text>
        <Text className="text-4xl font-work-medium text-secondary">
          Hola Mundo
        </Text>
        <Text className="text-3xl font-work-light text-secondary-100">
          Hola Mundo
        </Text>
        <Text className="text-2xl font-work-light text-secondary-200">
          Hola Mundo
        </Text>
        <Text className="text-xl font-work-light text-tertiary">
          Hola Mundo
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
