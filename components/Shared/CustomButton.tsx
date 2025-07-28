import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children?: string;
  color?: "primary" | "secondary" | "tertiary";
}

const CustomButton = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
  ...props
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];
  return (
    <Pressable
      className={`${btnColor} p-3 rounded-md active:opacity-75`}
      onPress={onPress}
      {...props}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
