import Image from "next/image";
import McButton from "@/components/mc-button";
import dirtBackground from "@/public/dirt-background.png";
import React from 'react';


export default function EventsPage() {
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
        
        <div className="w-full max-w-2xl space-y- text-white text-center">
          
          <h1 
            className="text-5xl md:text-5xl mb-2"
            style={{
              fontFamily: 'inherit',
            }}
          >
            Events
          </h1>

          Also check out our <a className="text-blue-500" href="https://www.instagram.com/tritonminecraftorg">Instagram</a> page to stay updated!

          <div className="flex flex-col items-center gap-2">
            <iframe src="https://calendar.google.com/calendar/embed?src=c_9t14nbib7ul8nubcb90gv4i5bo%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
            className="w-[700px] h-[500px]"></iframe>
            
            <div className="w-full max-w-md mt-4">
              <a 
                href="https://calendar.google.com/calendar/render?cid=c_9t14nbib7ul8nubcb90gv4i5bo%40group.calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <McButton title="Add to Google Calendar" />
              </a>
            </div>

            <div className="w-full max-w-md mt-2">
              <a 
                href="https://calendar.google.com/calendar/ical/c_9t14nbib7ul8nubcb90gv4i5bo%40group.calendar.google.com/public/basic.ics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <McButton title="Subscribe to Calendar (iCal)" />
              </a>
            </div>

            <div className="w-md mt-20">
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

