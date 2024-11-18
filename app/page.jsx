import Featured from "@/components/featured/Featured";
import Hero from "@/components/hero/Hero";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Sidebar />
    </div>
  );
}
