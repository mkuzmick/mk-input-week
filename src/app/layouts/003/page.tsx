"use client"

import { ReactNode } from 'react';
import WebcamFeed from '@/components/WebcamFeed';

interface OBSLayoutProps {
    children: ReactNode;
}
const OBSLayout = ({ children }: OBSLayoutProps) => {
    return (
      <div className="h-screen flex">
        {/* Left Side */}
        <div className="w-1/2 bg-transparent flex items-center justify-center">
          <p className="text-center"></p>
        </div>
  
        {/* Right Side */}
        <div className="w-1/2 bg-black flex flex-col items-center justify-center text-white p-20">
          <div className="bg-blue-800 p-8 rounded-lg space-y-4 text-center w-full m-12">
            <h1 className="text-9xl font-black">marlon</h1>
            <p className="text-2xl mt-4">director of the learning lab</p>
            
          </div>
          <div className="bg-pink-800 p-8 rounded-lg space-y-4 text-center">
            <div className="border-t border-gray-700 w-full mt-4 pt-4">
              <p>Placeholder content</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium, repellat iusto perferendis dolores, soluta sint provident rem aut quasi ipsum nesciunt rerum dolorem, ut facilis. Illo et veritatis voluptas!</p>
            </div>
          </div>
          <WebcamFeed>
            {children}</WebcamFeed>
        </div>
      </div>
    );
  };

export default function Page() {
    return (
        <main>
            <OBSLayout>
                OBSLayout content
            </OBSLayout>
        </main>
    )
}