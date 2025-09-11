import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);
  console.log("Data", data);
  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <main>Here will be the card component.</main>
    </>
  );
}
