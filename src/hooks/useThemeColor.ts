/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  invert: boolean = false
) {
  const theme = useColorScheme() ?? "light";

  // đảo theme nếu invert = true
  const activeTheme = invert ? (theme === "light" ? "dark" : "light") : theme;

  const colorFromProps = props[activeTheme];
  return colorFromProps ?? Colors[activeTheme][colorName];
}
