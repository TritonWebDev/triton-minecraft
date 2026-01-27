import Image from "next/image";
import McButton from "@/components/mc-button";
import Navbar from "@/components/navbar";
import background from "@/public/minecraft-titlescreen.jpg";
import SplashText from "@/components/splash-text";
import logo from "@/public/TritonMinecraftLogo.png";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover scale-110" 
        >
          <source 
            src="/videos/minecraftbgvideo.mp4" 
            type="video/mp4" 
          />
          <p>Your browser does not support the video tag.</p>
        </video>
        
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Image
          src={logo}
          alt="Logo"
          width={500}
          height={500}
          className="absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-44"
      />

      {/* Splash Text*/}
      <SplashText className="absolute bottom-1/2 left-3/5 transform -translate-x-1/6 translate-y-65 rotate-[-20deg] relative z-50 text-2xl" text="Triton Minecraft" />

      <div className="absolute z-48 bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-8/9 w-full max-w-xl px-4">
        <Navbar />
      </div>

      <p className="absolute bottom-0 left-0 text-white">
        &copy; {new Date().getFullYear()} Triton Minecraft
      </p>
    </main>
  );
}
