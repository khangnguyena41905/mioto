import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewProps,
  ViewStyle,
} from "react-native";

export type ThemedBtnProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function ThemedBtn({
  style,
  lightColor,
  darkColor,
  title = "Toggle Theme",
  onPress,
  ...rest
}: ThemedBtnProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "tint"
  );
  const textColor = useThemeColor({}, "text", true);

  return (
    <Pressable
      style={[styles.btn, { backgroundColor }, style]}
      onPress={onPress}
      {...rest}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
  },
});
