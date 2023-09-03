import { Meddon } from "next/font/google";

const meddon = Meddon({
  preload: true,
  weight: ["400"],
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <span className={meddon.className}>
      <strong className="select-none text-xl font-black">YSun</strong>
    </span>
  );
};

export default Logo;
