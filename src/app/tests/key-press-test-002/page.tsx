"use client"

import { useEffect, useRef } from "react";

const spinningCubeAnimationStyles = `
  @keyframes spin { 100% { transform: rotateY(360deg); } }
  .spinning-cube { animation: spin 2s infinite linear; }
`;

export default function Home() {
  // Create a ref for the audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize the Audio object and assign it to the ref
    audioRef.current = new Audio("/sounds/bane_your_punishment.m4a");

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'l') { 
        playSound();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      // Ensure the sound plays from the beginning
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <style>{spinningCubeAnimationStyles}</style>
      <div>
        <h1 className="text-7xl text-black sans-serif font-amatic-sc">
          keyboard test 002
        </h1>
        <div className="spinning-cube">
          {/* Insert your spinning cube SVG here */}
        </div>
      </div>
    </div>
  );
}