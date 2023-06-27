import Logo from "$components/logo.tsx";
import Menu from "$islands/menu.tsx";

const Header = () => {
  return (
    <>
      <header
        class="relative sticky top-0 w-full h-12 py-2 px-8 flex flex-row items-center justify-between bg-transparent z-50"
        aria-label="header"
      >
        <div class="absolute top-0 left-0 w-full h-12 backdrop-filter backdrop-blur-md backdrop-brightness-75 -z-50" />
        <div class="flex items-center justify-start h-8">
          <Logo size="small" />
        </div>
        <div class="flex items-center justify-end h-8">
          <Menu />
        </div>
      </header>
    </>
  );
};

export default Header;
