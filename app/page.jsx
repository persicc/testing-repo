import Featured from "@/components/featured/Featured";
import Hero from "@/components/hero/Hero";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";

const getData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/categories`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <Hero />
      <Featured />
      <Sidebar />

      <Link href="/create/category">Create Category</Link>
      <Link href="/delete"> Delete</Link>

      <div>
        {data?.map((category) => (
          <div key={category._id}>
            <h1>{category.title}</h1>
            <Link href={`/delete?data=${category.slug}`}>Delete</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
