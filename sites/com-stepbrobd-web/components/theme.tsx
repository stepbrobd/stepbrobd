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
      className="flex items-center space-x-2 overflow-auto rounded-full border border-neutral-200 p-1 dark:border-neutral-800"
    >
      {options.map(({ label, value, icon: Icon }) => {
        const className = `flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 ${
          mounted && theme === value ? "bg-neutral-200 dark:bg-neutral-800" : ""
        }`;

        const onClick = mounted ? () => setTheme(value) : undefined;

        return (
          <button
            key={value}
            aria-label={label}
            className={className}
            onClick={onClick}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
};

export default Theme;
