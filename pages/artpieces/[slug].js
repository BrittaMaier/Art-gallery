import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function ArtDetail({ data }) {
  //grab slug
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return null;
  }

  const image = data.find((item) => item.slug === slug);
  return (
    <>
      <Link href={`/artpieces`}>← back</Link>
      <Image
        src={image.imageSource}
        alt={image.name}
        width={140}
        height={140}
      />
      <h1>
        {image.artist}: &quot;{image.name}&quot;
      </h1>
      <p>{image.year}</p>
      <p>{image.genre}</p>
    </>
  );
}
