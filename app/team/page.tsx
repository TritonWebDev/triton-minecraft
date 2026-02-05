import Image from "next/image";
import McButton from "@/components/mc-button";
import dirtBackground from "@/public/dirt-background.png";
import React from 'react';
import { getMembers } from "@/lib/getMembers";

export default async function TeamPage() {
  const members = await getMembers();

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
              fontFamily: 'inherit',
              textShadow: '4px 4px 0px rgba(63, 63, 63, 1)'
            }}
          >
            Team
          </h1>

          <div className="flex flex-col items-center gap-2 text-white">
            <div className="grid grid-cols-4 gap-4 w-full">
              {members.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {member.picture && (
                    <Image 
                      src={member.picture} 
                      alt={member.name || ''} 
                      width={200} 
                      height={200}
                      className="mb-2"
                      unoptimized
                    />
                  )}
                  <div className="font-bold">{member.name || '-'}</div>
                  <div>{member.role || '-'}</div>
                  <div>{member.major || '-'}</div>
                  <div>{member.grad_year || '-'}</div>
                </div>
              ))}
            </div>
            
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

