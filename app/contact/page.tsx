import Image from "next/image";
import McButton from "@/components/mc-button";
import dirtBackground from "@/public/dirt-background.png";
import React from 'react';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Dirt Background */}
      <Image
        src={dirtBackground}
        alt="Dirt Background"
        fill
        className="object-cover z-0"
        style={{ imageRendering: 'pixelated' }}
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        
        <div className="w-full max-w-2xl space-y-">
          
          {/* Title */}
          <h1 
            className="text-white text-5xl md:text-5xl text-center mb-12 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
            style={{
              fontFamily: 'inherit',
              textShadow: '4px 4px 0px rgba(63, 63, 63, 1)'
            }}
          >
            Contact Us!
          </h1>


          {/* Menu Buttons Container */}
          <div className="flex flex-col items-center gap-2">
            
            {/* Button 1 - Email */}
            
            <div className="w-full max-w-md">
              <a 
                href="mailto:tritonwebdev@ucsd.edu" // TODO: replace w/ real email
              >
                <McButton title="Email" />
              </a>
            </div>

            {/* Button 2 - Discord */}
            <div className="w-full max-w-md">
              <a 
                href="https://discord.gg/tritonwebdev" // TODO: replace w/ real discord
              >
              <McButton title="Discord" />
              </a>
            </div>

            {/* Button 2 - Instagram */}
            <div className="w-full max-w-md">
              <a 
                href="https://www.instagram.com/tritonminecraftorg"
              >
              <McButton title="Instagram" />
              </a>
            </div>

            {/* Back Button */}
            <div className="w-full max-w-md mt-20">
              <a
                href = "/"
              >
              <McButton title="Done" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}