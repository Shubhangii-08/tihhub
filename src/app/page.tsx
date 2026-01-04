'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import Navbar from '@/components/navbar';
import VisionMision from '@/components/vision-mision';


// Kick off GLB + Draco preloads as soon as the page module runs.
function useEarlyPreload() {
  useEffect(() => {
    // Important: queue preloads in a microtask so Next has mounted the page first.
    queueMicrotask(() => {
      // If you used Draco, pass the decoder path as 2nd arg.
      useGLTF.preload('/headset.glb', '/draco/');
      useGLTF.preload('/eye.glb', '/draco/');

    });
  }, []);
}
const Introduction = dynamic(() => import('@/components/introduction'), {
  ssr: false,
  loading: () => (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      Loading 3D Experience...
    </div>
  ),
});

export default function Home() {
  useEarlyPreload(); // Starts fetch immediately on first route load

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Introduction />
        <VisionMision />
        {/* <PartnerSection /> */}
      </main>
    </div>
  );
}




