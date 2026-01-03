'use client';
import React, { useRef } from 'react';

export default function ARVRVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{ height: 'calc(100vh - 4rem)' }} // 4rem = 64px = h-16
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        disablePictureInPicture
        className="w-full h-full object-cover"
        preload="auto"
        src="/vedio/herosectionvedios.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
