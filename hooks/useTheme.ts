import { createContext, useContext } from "react";

export const ThemeContext = createContext<{
  darkMode: () => void;
  lightMode: () => void;
  theme: "light" | "dark" | "system" | null;
} | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "Theme.* component muse be rendered as a child of Tile component",
    );
  }
  return context;
}

export function useColorMode(lightColor: string, darkColor: string) {
  const { theme } = useTheme();
  return theme === "light" ? lightColor : darkColor;
}
