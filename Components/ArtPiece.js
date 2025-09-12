import Image from "next/image";
import Link from "next/link";

export default function ArtPiece({ image, children }) {
  console.log("Image in ArtPiece:", image);
  return (
    <Link href={`/artpieces/${image.slug}`}>
      <Image
        src={image.imageSource}
        alt={image.name}
        width={140}
        height={140}
      />
      <p>{children}</p>
    </Link>
  );
}
