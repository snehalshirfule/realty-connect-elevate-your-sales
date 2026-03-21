import React, { createContext, useContext } from "react";
import { PropertyTheme } from "@/types/property";

const themeTokens: Record<PropertyTheme, {
  primary: string;
  primaryFg: string;
  accent: string;
  accentFg: string;
  ring: string;
}> = {
  teal: {
    primary: "168 55% 38%",
    primaryFg: "0 0% 100%",
    accent: "168 30% 92%",
    accentFg: "168 55% 28%",
    ring: "168 55% 38%",
  },
  navy: {
    primary: "220 60% 35%",
    primaryFg: "0 0% 100%",
    accent: "220 30% 92%",
    accentFg: "220 60% 28%",
    ring: "220 60% 35%",
  },
  emerald: {
    primary: "152 55% 34%",
    primaryFg: "0 0% 100%",
    accent: "152 30% 92%",
    accentFg: "152 55% 26%",
    ring: "152 55% 34%",
  },
  amber: {
    primary: "28 70% 45%",
    primaryFg: "0 0% 100%",
    accent: "28 40% 92%",
    accentFg: "28 70% 32%",
    ring: "28 70% 45%",
  },
  slate: {
    primary: "215 25% 32%",
    primaryFg: "0 0% 100%",
    accent: "215 15% 92%",
    accentFg: "215 25% 22%",
    ring: "215 25% 32%",
  },
};

interface PropertyThemeContextValue {
  theme: PropertyTheme;
  tokens: typeof themeTokens.teal;
}

const PropertyThemeContext = createContext<PropertyThemeContextValue>({
  theme: "teal",
  tokens: themeTokens.teal,
});

export const usePropertyTheme = () => useContext(PropertyThemeContext);

export const PropertyThemeProvider: React.FC<{
  theme: PropertyTheme;
  children: React.ReactNode;
}> = ({ theme, children }) => {
  const tokens = themeTokens[theme];

  const style = {
    "--primary": tokens.primary,
    "--primary-foreground": tokens.primaryFg,
    "--accent": tokens.accent,
    "--accent-foreground": tokens.accentFg,
    "--ring": tokens.ring,
  } as React.CSSProperties;

  return (
    <PropertyThemeContext.Provider value={{ theme, tokens }}>
      <div style={style}>{children}</div>
    </PropertyThemeContext.Provider>
  );
};
