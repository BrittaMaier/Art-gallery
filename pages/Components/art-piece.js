import Image from "next/image";

export default function ArtPiece({ image }) {
  return (
    <>
      <Image
        src={image.imageSource}
        alt={image.name}
        width={140}
        height={140}
      />
      <h2>{image.name}</h2>
      <p>{image.artist}</p>
    </>
  );
}
