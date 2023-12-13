import Logo from "components/logo";
import Menu from "components/menu";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 flex w-full flex-row items-center justify-between border-b border-neutral-200 px-8 py-4 text-neutral-700 backdrop-blur-md backdrop-filter dark:border-neutral-800 dark:text-neutral-300"
      aria-label="Header"
    >
      <div className="flex h-8 w-8 items-center justify-center">
        <Logo size="small" />
      </div>
      <div className="flex h-8 w-8 items-center justify-center">
        <Menu />
      </div>
    </header>
  );
};

export default Header;