"use client";

import { useState } from "react";
import McButton from "./mc-button";

export default function Navbar() {
    const [showPopup, setShowPopup] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("smp.tritonmc.com");
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <nav className="mx-auto w-full h-screen flex flex-col justify-center items-center gap-2">
            <div className="w-full max-w-xl relative">
                <button className="mc-button w-full" onClick={copyToClipboard}>
                    <p className="title">Join the Server!</p>
                </button>
                {showPopup && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-4 py-2 rounded whitespace-nowrap z-50">
                        server IP copied to clipboard
                    </div>
                )}
            </div>
            <a href="/about" className="w-full max-w-xl">
                <McButton title="About"/>
            </a>
            <a href="/events" className="w-full max-w-xl">
                <McButton title="Events"/>
            </a>
            
            <div className="flex flex-row gap-2 mt-8 max-w-xl w-full">
                <a href="/contact" className="flex-1">
                    <McButton title="Contact"/>
                </a>
                <a href="/team" className="flex-1">
                    <McButton title="Team"/>
                </a>
            </div>
        </nav>
    )
}