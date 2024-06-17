"use client";

import { useEffect, useRef } from "react";

const spinningCubeAnimationStyles = `
  @keyframes spin { 100% { transform: rotateY(360deg); } }
  .spinning-cube { animation: spin 2s infinite linear; }
`;

const Home: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    console.log('useEffect triggered');
    audioRef.current = new Audio("/sounds/bane_your_punishment.m4a");

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'l') {
        console.log('playing sound')
        playSound();
      }
    };

    const handleMIDIMessage = (message: WebMidi.MIDIMessageEvent) => {
      const [command, note, velocity] = message.data;
      console.log(message.data);

    };

    // Set up MIDI access and handling
    const requestMIDIAccess = async () => {
      try {
        const midiAccess = await navigator.requestMIDIAccess();
        midiAccess.inputs.forEach((input) => {
          input.onmidimessage = handleMIDIMessage;
        });
      } catch (error) {
        console.error('MIDI access error:', error);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    requestMIDIAccess();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => console.error('Error playing audio:', error));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <style>{spinningCubeAnimationStyles}</style>
      <div>
        <h1 className="text-7xl text-black sans-serif font-amatic-sc">
          keyboard and MIDI test 001
        </h1>
        <div className="spinning-cube">
          {/* Insert your spinning cube SVG here */}
        </div>
      </div>
    </div>
  );
};

export default Home;