"use client";

import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";

const Progress = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <NextTopLoader
      showSpinner={false}
      color={resolvedTheme === "dark" ? "#f81ce5" : "#aaffec"}
      height={resolvedTheme === "dark" ? 2.5 : 5}
    />
  );
};

export default Progress;
