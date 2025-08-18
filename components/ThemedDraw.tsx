import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedDrawProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedDraw({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedDrawProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "drawerBackground"
  );

  return (
    <View
      className="w-full h-3/4"
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}
