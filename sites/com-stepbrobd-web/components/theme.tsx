"use client";

import { IconDeviceDesktop, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Theme = () => {
  const options = [
    { label: "Light", value: "light", icon: IconSun },
    { label: "System", value: "system", icon: IconDeviceDesktop },
    { label: "Dark", value: "dark", icon: IconMoon },
  ];

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={`h-[42px] w-[122px] rounded-full border border-neutral-200 dark:border-neutral-800 ${
        mounted
          ? "flex items-center space-x-2 overflow-auto p-1 "
          : "animate-pulse bg-neutral-200 dark:bg-neutral-800"
      }`}
    >
      {mounted &&
        options.map(({ label, value, icon: Icon }) => {
          return (
            <button
              key={value}
              aria-label={label}
              onClick={() => setTheme(value)}
              className={`flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 ${
                theme === value ? "bg-neutral-200 dark:bg-neutral-800" : ""
              }`}
            >
              <Icon size={16} />
            </button>
          );
        })}
    </div>
  );
};

export default Theme;
