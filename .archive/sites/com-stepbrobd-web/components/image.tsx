import { default as NextImage } from "next/image";

const Image = ({ src, alt, ...props }) => {
  return (
    <figure className="mb-2 flex max-w-3xl flex-col items-center justify-center">
      <NextImage
        className="mb-2 rounded-md"
        src={src}
        alt={alt}
        quality={75}
        {...props}
      />
      <figcaption className="font-serif">{alt}</figcaption>
    </figure>
  );
};

export default Image;
