import Image from "next/image";
import McButton from "@/components/mc-button";
import Navbar from "@/components/navbar";
import background from "@/public/minecraft-titlescreen.jpg";
import SplashText from "@/components/splash-text";
import logo from "@/public/TritonMinecraftLogo.png";

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

      <Image
          src={logo}
          alt="Logo"
          width={500}
          height={500}
          className="absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Splash Text TODO: POSITION CORRECTLY */}
      <SplashText className="absolute bottom-1/2 left-1/2" text="Triton Minecraft" />
      <Navbar />

      <p className="absolute bottom-0 left-0 text-white">
        &copy; {new Date().getFullYear()} Triton Minecraft
      </p>
    </main>
  );
}
