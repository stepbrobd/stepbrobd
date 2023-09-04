import Image from "next/image";
import Link from "next/link";
import LogoImage from "public/assets/stepbrobd.webp";

const Asset = ({
  size,
  alt,
  animated,
}: {
  size: string;
  alt: string;
  animated: boolean;
}) =>
  animated ? (
    <video
      src="/assets/stepbrobd.webm"
      autoPlay
      loop
      muted
      className={`${size} rounded-full`}
    />
  ) : (
    <Image src={LogoImage} alt={alt} className={`${size} rounded-full`} />
  );

const Logo = ({
  animated = false,
  StepBroBD = false,
  size,
}: {
  size: "small" | "medium" | "large";
  StepBroBD?: boolean;
  animated?: boolean;
}) => {
  const sizes = {
    small: { asset: "h-8 w-8", text: "text-2xl ml-1" },
    medium: { asset: "h-16 w-16", text: "text-4xl ml-2" },
    large: { asset: "h-32 w-32", text: "text-8xl ml-4" },
  };

  return (
    <Link href="/" aria-label="StepBroBD, Inc." className="hover:no-underline">
      <div className="flex select-none items-center">
        <Asset
          size={sizes[size].asset}
          alt="StepBroBD, Inc."
          animated={animated}
        />
        {StepBroBD && (
          <div
            className={`${sizes[size].text} whitespace-nowrap font-bold tracking-tight text-neutral-800 dark:text-neutral-200`}
          >
            StepBroBD, Inc.
          </div>
        )}
      </div>
    </Link>
  );
};

export default Logo;
