import Image from "next/image";
import McButton from "@/components/mc-button";
import dirtBackground from "@/public/dirt-background.png";
import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={dirtBackground}
        alt="Dirt Background"
        fill
        className="object-cover z-0"
        style={{ imageRendering: 'pixelated' }}
        priority
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        
        <div className="w-full max-w-6xl space-y-">
          
          <h1 
            className="text-white text-5xl md:text-5xl text-center mb-12 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
            style={{
              fontFamily: 'minecraftia',
              textShadow: '4px 4px 0px rgba(63, 63, 63, 1)'
            }}
          >
            About
          </h1>

          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row items-center gap-8 justify-center">
            
              <div className="flex-1 max-w-md">
                <Carousel>
                  {[
                    { src: "/about-page/Bedwars-Tournament.png", alt: "Bedwars Tournament" },
                    { src: "/about-page/Bingo.png", alt: "Bingo" },
                    { src: "/about-page/Building-competition.png", alt: "Building Competition" },
                    { src: "/about-page/Fall25-GBM.png", alt: "Fall 25 GBM" }
                  ].map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="w-full" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image 
                          src={image.src}
                          alt={image.alt}
                          width={1000}
                          height={750}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </Carousel>
              </div>

              <div className="page-book">
                  <span className="font-bold">Triton Minecraft</span> is a student organization at UC San Diego aimed at having fun with all things Minecraft.
                  <br />
                  <br /> Featuring activities such as build battles and parkour tournaments, irl meet-ups, and our very own SMP server, Triton Minecraft is the place for Minecraft enthusiasts to come together and have a good time.

                  <br />
                  <br /> Interested? Join our <a target="_blank" href="https://discord.com/invite/AHuUG3ukuz">Discord</a> and check out our <a target="_blank" href="https://www.instagram.com/tritonminecraftorg">Instagram</a> page to stay updated!
              </div>

            </div>

            <div className="w-full max-w-md mt-20 font-[Minecraftia]">
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