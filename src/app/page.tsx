'use client';

import dynamic from 'next/dynamic';
import VisionMision from '@/components/vision-mision';


const Introduction = dynamic(() => import('@/components/introduction'), {
  ssr: false,
  loading: () => (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      Loading 3D Experience...
    </div>
  ),
});

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Introduction />
        <VisionMision />
        {/* <PartnerSection /> */}
      </main>
    </div>
  );
}




