import Logo from "components/logo";

const Header = () => {
  return (
    <header
      className="relative top-0 z-50 flex h-12 w-full flex-row items-center justify-between px-8 py-2"
      aria-label="header"
    >
      <div className="absolute left-0 top-0 -z-50 h-12 w-full backdrop-blur-md backdrop-filter" />
      <div className="flex h-8 items-center justify-start">
        <Logo size="small" />
      </div>
      <div className="flex h-8 items-center justify-end"></div>
    </header>
  );
};

export default Header;
