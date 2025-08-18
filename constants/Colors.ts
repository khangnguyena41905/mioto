// tokens.ts
// 🎨 Màu gốc (base palette)
const white = "#FFFFFF";
const black = "#000000";

// Gray scale
const gray50 = "#F9FAFB";
const gray100 = "#F3F4F6";
const gray200 = "#E5E7EB";
const gray400 = "#9CA3AF";
const gray500 = "#6B7280";
const gray700 = "#374151";
const gray800 = "#1F2937";
const gray900 = "#111827";

// Brand colors
const primaryLight = "#3B82F6"; // blue-500
const primaryDark = "#60A5FA"; // blue-400

// 🎨 Theme Colors
export const Colors = {
  light: {
    text: gray800,
    placeholder: gray400,
    background: gray50,
    borderColor: gray200,
    tint: primaryLight,
    icon: gray500,
    tabIconDefault: gray400,
    tabIconSelected: primaryLight,
    drawerBackground: white,
  },
  dark: {
    text: gray100,
    placeholder: gray500,
    background: gray900,
    borderColor: gray700,
    tint: primaryDark,
    icon: gray400,
    tabIconDefault: gray500,
    tabIconSelected: primaryDark,
    drawerBackground: gray800,
  },
};
