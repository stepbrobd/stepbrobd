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
    <div class="flex items-center w-24 h-8">
      <select
        onInput={handleSelectChange}
        value={mode}
        class="border w-24 h-8 flex items-center justify-center text-center rounded bg-transparent"
      >
        <option value="dark">&#x263E;&#xFE0E; Dark</option>
        <option value="light">&#x2600;&#xFE0E; Light</option>
        <option value="system">&#x2699;&#xFE0E; System</option>
      </select>
    </div>
  );
};

export default Theme;
