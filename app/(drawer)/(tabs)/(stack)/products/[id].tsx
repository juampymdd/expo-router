import { products } from "@/store/products.store";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const product = products.find((p) => p.id === id);
  if (!product) {
    return <Text>Product not found</Text>;
  }

  useEffect(() => {
    console.log("Product details:", product);
    navigation.setOptions({
      title: product.title,
    });
  }, [product]);

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product?.title}</Text>
      <Text>{product?.description}</Text>
      <Text className="font-work-black">{product?.price}</Text>
    </View>
  );
};

export default ProductScreen;
