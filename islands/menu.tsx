import { useEffect, useRef, useState } from "preact/hooks";
import { IconChevronDown, IconMenu } from "icons";

const Menu = () => {
  const items = [
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
        class="h-8 w-8 flex items-center justify-center relative focus:outline-none"
        onClick={handleIconClick}
      >
        <IconMenu class={`absolute ${isOpen ? "opacity-0" : "opacity-100"}`} />
        <IconChevronDown
          class={`absolute ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
      </button>
      <div
        class={`absolute left-0 mt-2 w-screen z-50 backdrop-filter backdrop-blur-md flex py-2 px-8 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div class="grid grid-cols-1 gap-4 w-full transition-colors transition-opacity duration-500 ease-in-out">
          {items.map((item, index) => (
            <a
              class={`w-full h-8 text-start text-lg font-bold transition-colors transition-opacity duration-500 ease-in-out delay-${
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
