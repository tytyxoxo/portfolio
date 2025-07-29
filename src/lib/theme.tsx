const THEME_KEY = "theme";

export type Theme = "light" | "dark";

export function getStoredTheme(): Theme | null {
   if (typeof localStorage === "undefined") return null;
   const theme = localStorage.getItem(THEME_KEY);
   if (theme === "light" || theme === "dark") return theme;
   return null;
}

export function setStoredTheme(theme: Theme) {
   if (typeof localStorage === "undefined") return;
   localStorage.setItem(THEME_KEY, theme);
}
