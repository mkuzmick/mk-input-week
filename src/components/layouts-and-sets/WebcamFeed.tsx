import React, { useEffect, useRef } from 'react';

const WebcamFeed: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const getWebcamFeed = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing webcam: ", err);
            }
        };

        getWebcamFeed();

        // Capture the current value of videoRef in a variable
        const videoElement = videoRef.current;

        return () => {
            if (videoElement && videoElement.srcObject) {
                // Stop all video tracks to close the webcam on component unmount
                (videoElement.srcObject as MediaStream)
                  .getTracks()
                  .forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="rounded-lg overflow-hidden border-4 border-white">
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full rounded-lg"
                />
            </div>
        </div>
    );
};

export default WebcamFeed;