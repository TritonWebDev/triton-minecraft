import Image from "next/image";
import McButton from "@/components/mc-button";
import Navbar from "@/components/navbar";
import background from "@/public/minecraft-titlescreen.jpg";

export default function Home() {
  return (
    <main>
      <Image
          src={background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="relative z-[-1] blur-[2px]"
      />
      <Navbar />
    </main>
  );
}
