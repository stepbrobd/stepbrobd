import Image from "next/image";
import LogoImage from "public/assets/stepbrobd.webp";

const Logo = () => {
  return (
    <a
      href="https://stepbrobd.com"
      aria-label="StepBroBD, Inc."
      className="h-8 w-8 select-none hover:no-underline"
    >
      <Image
        src={LogoImage}
        alt="StepBroBD, Inc."
        className="h-8 w-8 rounded-full"
      />
    </a>
  );
};

export default Logo;
