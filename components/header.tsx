import Logo from "$components/logo.tsx";

export default function Header() {
  return (
    <header class="w-full py-4 px-8 flex flex-row items-center justify-between backdrop-filter backdrop-blur backdrop-brightness-75">
      <div class="flex items-center justify-start h-8">
        <Logo size="small" />
      </div>
      <div class="flex items-center justify-end h-8">
        <a href="/" class="font-bold">
          Home
        </a>
      </div>
    </header>
  );
}
