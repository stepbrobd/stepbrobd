import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Button from "$components/button.tsx";
import IconDeviceDesktop from "icons/tsx/device-desktop.tsx";
import IconMoon from "icons/tsx/moon.tsx";
import IconSun from "icons/tsx/sun.tsx";

interface ThemeProps {
  prev: "light" | "dark" | "system";
}

const Theme = (props: ThemeProps) => {
  function getMode(): "light" | "dark" | "system" {
    if (!IS_BROWSER) {
      return props.prev;
    }
    if (localStorage.theme === "dark") {
      return "dark";
    }
    if (localStorage.theme) {
      return "light";
    }
    return "system";
  }

  function updateMode() {
    const w = window as unknown as { isDark: boolean };
    w.isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[w.isDark ? "add" : "remove"]("dark");
  }

  const [mode, setMode] = useState(getMode());

  const setDarkModeOn = () => {
    localStorage.theme = "dark";
    updateMode();
    setMode("dark");
  };

  const setDarkModeAuto = () => {
    delete localStorage.theme;
    updateMode();
    setMode("system");
  };

  const setDarkModeOff = () => {
    localStorage.theme = "light";
    updateMode();
    setMode("light");
  };

  return (
    <div class="flex gap-2 w-full">
      <Button onClick={setDarkModeOn}>
        <IconMoon />
        Force Dark
      </Button>

      <Button onClick={setDarkModeAuto}>
        <IconDeviceDesktop />
        System
      </Button>

      <Button onClick={setDarkModeOff}>
        <IconSun />
        Force light
      </Button>
      <div>
        Current Mode: <b class="text-3xl">{mode}</b>
      </div>
    </div>
  );
};

export default Theme;
