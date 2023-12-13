"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      enableColorScheme={true}
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  );
};

export { Providers };
