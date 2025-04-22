import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen w-auto bg-gradient-to-b from-[#011627] to-[#062B48] text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">Showcasing my projects and skills</p>
        <Marquee />
        </main>
    </>
  );
}
