import { useEffect, useRef, useState } from "preact/hooks";
import IconMenu from "icons/tsx/menu.tsx";
import IconChevronDown from "icons/tsx/chevron-down.tsx";

const Menu = () => {
  const items = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      name: "Terms of Service",
      href: "/terms-of-service",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleIconClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !(menuRef.current as HTMLElement).contains(event.target as HTMLElement)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav ref={menuRef}>
      <button
        aria-label="menu"
        class="h-8 w-8 flex items-center justify-center relative"
        onClick={handleIconClick}
      >
        <IconMenu
          class={`absolute transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <IconChevronDown
          class={`absolute transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 transform" : "opacity-0 transform"
          }`}
        />
      </button>

      <div
        class={`absolute left-0 mt-2 w-screen z-50 backdrop-filter backdrop-blur-md backdrop-brightness-75 flex py-2 px-8 transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div class="grid grid-cols-1 gap-4 w-full">
          {items.map((item, index) => (
            <a
              class={`w-full h-8 text-start text-lg font-bold transition-all duration-500 ease-in-out delay-${
                isOpen ? index * 100 : (items.length - 1 - index) * 100
              } ${isOpen ? "opacity-100" : "opacity-0"}`}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
