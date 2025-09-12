import Image from "next/image";

export default function ArtPiece({ image, children }) {
  console.log("Image in ArtPiece:", image);
  return (
    <>
      <Image
        src={image.imageSource}
        alt={image.name}
        width={140}
        height={140}
      />
      <p>{children}</p>
    </>
  );
}
