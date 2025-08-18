import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, TextInput, View, type TextInputProps } from "react-native";
import { ThemedText } from "./ThemedText";
export type ThemedInputProps = TextInputProps & {
  label: string;
  lightColor?: string;
  darkColor?: string;
  invert?: boolean;
};

export function ThemedInput({
  label,
  style,
  lightColor,
  darkColor,
  invert = false,
  ...rest
}: ThemedInputProps) {
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "drawerBackground"
  );
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "borderColor",
    !invert
  );
  const placeholderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "placeholder",
    !invert
  );

  return (
    <View style={styles.container}>
      <ThemedText
        style={[
          styles.label,
          { backgroundColor, paddingHorizontal: 4, fontSize: 12 },
        ]}
      >
        {label}
      </ThemedText>
      <TextInput
        placeholderTextColor={placeholderColor}
        style={[
          styles.input,
          { color: textColor, backgroundColor, borderColor },
          style,
        ]}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    marginVertical: 8,
    position: "relative",
  },
  input: {
    width: "100%",
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
  label: {
    position: "absolute",
    top: -8,
    left: 16,
    zIndex: 1,
  },
});
