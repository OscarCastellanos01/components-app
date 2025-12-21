import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
// import { useColorScheme } from "react-native";

const ThemesScreen = () => {
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } =
    useThemeChangerContext();
  // const theme = useColorScheme();
  // const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? 'dark' : 'light');
    toggleTheme();

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSytemMode = (value: boolean) => {

    if (value) {
      setDarkModeSettings({
        // darkMode: false,
        darkMode: darkModeSettings.darkMode,
        systemMode: true,
      });
      setSystemTheme();
    }
  };

  return (
    <ThemedView>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSettings.darkMode}
          onValueChanged={setDarkMode}
        />
        <ThemedSwitch
          text="System Mode"
          className="mb-5"
          value={darkModeSettings.systemMode}
          onValueChanged={setSytemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
