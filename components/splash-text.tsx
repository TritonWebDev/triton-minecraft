"use client";

interface SplashTextProps {
  text: string;
  className?: string;
  rotation?: number;
}

export default function SplashText({ text, className = "", rotation = -2 }: SplashTextProps) {
  return (
    <span 
      className={`minecraft-splash ${className}`}
      style={{
        color: '#FFD700',
        display: 'inline-block',
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {text}
    </span>
  );
}

