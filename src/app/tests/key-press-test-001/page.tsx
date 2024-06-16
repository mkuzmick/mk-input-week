"use client"

import { useEffect } from "react";

const spinningCubeAnimationStyles = `
  @keyframes spin { 100% { transform: rotateY(360deg); } }
  .spinning-cube { animation: spin 2s infinite linear; }
`;

export default function Home() {
  // Removed isPlaying state as we directly play sound and manage animation now.

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'l') { // Simplified key check
        playSound();
        // Here you can manage your animation to restart it or to keep it ongoing.
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const playSound = () => {
    const audio = new Audio("/sounds/bane_your_punishment.m4a");
    // Stop the current audio (if playing) and immediately play the sound again.
    audio.currentTime = 0; // Rewind to the start
    audio.play();
  };

  // No need for the useEffect hook checking isPlaying state as we're directly handling sound play in response to key press.

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <style>{spinningCubeAnimationStyles}</style>
      <div>
        <h1 className="text-7xl text-black sans-serif font-amatic-sc">
          keyboard test 001
        </h1>
        {/* Directly manage animation here if needed */}
        <div className="spinning-cube">
          {/* Insert your spinning cube SVG here */}
        </div>
      </div>
    </div>
  );
}