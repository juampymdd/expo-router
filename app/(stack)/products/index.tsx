import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductScreen = () => {
  return (
    <View className="flex flex-1 p-4">
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="font-work-black text-2xl">{item.title}</Text>
            <Text className="">{item.description}</Text>
            <View className="flex flex-row justify-between">
              <Text className="font-work-black">$ {item.price}</Text>
              <Link href={`(stack)/products/${item.id}`}>
                <Text className="text-primary">Ver detalles</Text>
              </Link>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductScreen;
