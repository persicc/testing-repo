import Featured from "@/components/featured/Featured";
import Hero from "@/components/hero/Hero";
import Sidebar from "@/components/sidebar/Sidebar";

const getData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/categories`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
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

      <div>
        {data?.map((category) => (
          <div key={category._id}>
            <h1>{category.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
