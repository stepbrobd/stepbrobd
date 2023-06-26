import Logo from "$components/logo.tsx";
import IconMenu from "icons/tsx/menu.tsx";
import IconChevronDown from "icons/tsx/chevron-down.tsx";

const Header = () => {
  return (
    <header class="sticky top-0 w-full py-2 px-8 flex flex-row items-center justify-between backdrop-filter backdrop-blur backdrop-brightness-75">
      <div class="flex items-center justify-start h-8">
        <Logo size="small" />
      </div>
      <div class="flex items-center justify-end h-8">
        <div class="h-8 w-8 flex items-center justify-center">
          <IconMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
