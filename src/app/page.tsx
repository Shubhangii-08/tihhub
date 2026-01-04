<<<<<<< HEAD
'use client';

import dynamic from 'next/dynamic';
import VisionMision from '@/components/vision-mision';


=======


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
      useGLTF.preload('/headset.glb', 'https://www.gstatic.com/draco/v1/decoders/');
      useGLTF.preload('/eye.glb', 'https://www.gstatic.com/draco/v1/decoders/');
      
    });
  }, []);
}

>>>>>>> 99c17ba0297be4388960277e7533e85d7ca8f4ce
const Introduction = dynamic(() => import('@/components/introduction'), {
  ssr: false,
  loading: () => (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      Loading 3D Experience...
    </div>
  ),
});

export default function Home() {
<<<<<<< HEAD

  return (
    <div className="flex flex-col min-h-screen">
=======
  useEarlyPreload(); // Starts fetch immediately on first route load

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
>>>>>>> 99c17ba0297be4388960277e7533e85d7ca8f4ce
      <main>
        <Introduction />
        <VisionMision />
        {/* <PartnerSection /> */}
      </main>
    </div>
  );
}




