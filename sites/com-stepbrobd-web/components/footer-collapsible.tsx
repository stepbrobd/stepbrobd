"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect,useState } from "react";
import { useMediaQuery } from "react-responsive";

const FooterCollapsible = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [open, setOpen] = useState(isMdScreen);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setOpen(isMdScreen);
  }, [pathname, searchParams, isMdScreen]);

  const handleToggle = () => {
    if (!isMdScreen) {
      setOpen((prevOpen) => !prevOpen);
    }
  };

  if (!isMounted) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-neutral-200 dark:bg-neutral-800"></div>
        <div className="hidden space-y-2 md:block">
          <div className="h-6 bg-neutral-200 dark:bg-neutral-800"></div>
          <div className="h-6 bg-neutral-200 dark:bg-neutral-800"></div>
        </div>
        <hr className="block border-neutral-200 dark:border-neutral-800 md:hidden" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2
        className={`font-bold ${!isMdScreen && "cursor-pointer"}`}
        onClick={handleToggle}
      >
        {title}
      </h2>
      {open && (
        <ul className="space-y-2 pl-2 text-neutral-600 dark:text-neutral-400 md:pl-0">
          {children}
        </ul>
      )}
      <hr className="block border-neutral-200 dark:border-neutral-800 md:hidden" />
    </div>
  );
};

export default FooterCollapsible;
