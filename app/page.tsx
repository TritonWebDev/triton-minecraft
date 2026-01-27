import Image from "next/image";
import McButton from "@/components/mc-button";
import Navbar from "@/components/navbar";
import background from "@/public/minecraft-titlescreen.jpg";
import SplashText from "@/components/splash-text";
import logo from "@/public/TritonMinecraftLogo.png";
import { Instagram } from "lucide-react";

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
      <div className="absolute bottom-[70%] left-[60%] -translate-x-1/6 translate-y-16 z-50 rotate-[-20deg]">
        <SplashText className="text-2xl" text="Join our server!" />
      </div>

      <div className="absolute z-48 bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-8/9 w-full max-w-xl px-4">
        <Navbar />
      </div>

      <p className="absolute bottom-0 left-0 text-white">
        &copy; {new Date().getFullYear()} Triton Minecraft
      </p>

      {/* Social Icons */}
      <div className="absolute bottom-4 right-4 flex gap-4 z-50">
        <a 
          href="https://www.instagram.com/tritonminecraftorg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors drop-shadow-lg"
          aria-label="Instagram"
        >
          <Instagram size={32} />
        </a>
        <a 
          href="https://discord.com/invite/AHuUG3ukuz" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <Image 
            src="/discord.svg" 
            alt="Discord" 
            width={32} 
            height={32} 
          />
        </a>
      </div>
    </main>
  );
}
