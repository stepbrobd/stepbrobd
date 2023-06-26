import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

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

  useEffect(() => {
    switch (mode) {
      case "dark":
        localStorage.theme = "dark";
        break;
      case "light":
        localStorage.theme = "light";
        break;
      case "system":
        delete localStorage.theme;
        break;
    }
    updateMode();
  }, [mode]);

  // deno-lint-ignore no-explicit-any
  const handleSelectChange = (event: any) => {
    setMode(event.target.value);
  };

  return (
    <select
      onInput={handleSelectChange}
      value={mode}
      style={{
        textAlign: "center",
        textAlignLast: "center",
      }}
      class="border border-black dark:border-white w-24 h-8 rounded-md bg-transparent"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default Theme;
