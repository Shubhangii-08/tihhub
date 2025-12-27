// 'use client';
// import React, { Suspense, useRef } from 'react';
// import Link from 'next/link';
// import * as THREE from 'three';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Model } from './Model';
// // OrbitControls with invalidate for smooth interaction
// function Controls({ autoRotate = false }: { autoRotate?: boolean }) {
//   const { invalidate } = useThree();
//   return (
//     <OrbitControls
//       autoRotate={autoRotate}
//       enableZoom={false}
//       onChange={() => invalidate()}
//     />
//   );
// }

// // Spin children around Y-axis (radians per second)
// function SpinningY({
//   speed = 0.6,
//   children,
// }: {
//   speed?: number;
//   children: React.ReactNode;
// }) {
//   const ref = useRef<THREE.Group>(null!);
//   useFrame((_, delta) => {
//     if (!ref.current) return;
//     ref.current.rotation.y += speed * delta;
//   });
//   return <group ref={ref}>{children}</group>;
// }

// type SectionProps = {
//   title: string;
//   text: string;
//   href: string;
//   button?: string;
//   flip?: boolean;
//   fov?: number;
//   spinSpeed?: number;
//   // Model props
//   modelSrc: string;
//   initialRotation?: [number, number, number];
//   initialScale?: number;
//   initialPosition?: [number, number, number];
// };

// const Section = ({
//   title,
//   text,
//   href,
//   button = 'Read More',
//   flip = false,
//   fov = 13,
//   spinSpeed = 0.6,
//   modelSrc,
//   initialRotation = [0, 0, 0],
//   initialScale = 1,
//   initialPosition = [0, 0, 0],
// }: SectionProps) => (
//   <section className="bg-white py-20">
//     <div
//       className={`container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ${
//         flip ? 'lg:flex-row-reverse' : ''
//       }`}
//     >
//       <div className="text-center lg:text-left max-w-2xl">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
//         <p className="text-lg mb-6 text-[#021954]">{text}</p>
//         <Link href={href}>
//           <button className="px-6 py-2 bg-[#021954] text-white rounded-lg hover:bg-blue-800">
//             {button}
//           </button>
//         </Link>
//       </div>

//       <div className="w-full h-[300px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
//         <Canvas
//           // Continuous rotation needs frames; keep default loop
//           gl={{ powerPreference: 'low-power' }}
//           camera={{ position: [0, 0, 2.5], fov }}
//           style={{ background: 'transparent', width: '100%', height: '100%' }}
//           shadows
//         >
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 2, 5]} intensity={1.2} />

//           <Suspense fallback={null}>
//             <SpinningY speed={spinSpeed}>
//               <Model
//                 src={modelSrc}
//                 rotation={initialRotation}
//                 scale={initialScale}
//                 position={initialPosition}
//               />
//             </SpinningY>
//           </Suspense>

//           <Controls autoRotate={false} />
//         </Canvas>
//       </div>
//     </div>
//   </section>
// );

// const Introduction = () => {
//   return (
//     <>
//       {/* Section 1: scene.gltf */}
//       <Section
//         title="Welcome to The TIH-iHub Drishti"
//         text="iHub Drishti, IIT Jodhpur is a national innovation hub dedicated to Computer Vision, Augmented Reality, and Virtual Reality. Established under the Government of India's NM-ICPS mission, it fosters cutting-edge research and industry collaboration. The hub unites top researchers, industry partners, and startups to drive technological advancements. With state-of-the-art labs and training, iHub Drishti aims to be India's leading center for vision and XR technologies."
//         href="/about-tih"
//         button="Read More"
//         flip={false}
//         fov={13}
//         spinSpeed={0.6}
//         modelSrc="/scene.gltf" // put scene.gltf under /public
//         initialRotation={[0, 0, 0]}
//         initialScale={1}
//         initialPosition={[0, 0, 0]}
//       />

//       {/* Section 2: cv_eye.gltf */}
//       <Section
//         title="Our Vision in XR"
//         text="From industry-grade AR/VR prototyping to academic collaboration, we bridge research and deployment with robust infrastructure and mentorship programs."
//         href="/about-tih"
//         button="Read More"
//         flip
//         fov={16}
//         spinSpeed={0.8}
//         modelSrc="/cv_eye.gltf" // put cv_eye.gltf under /public
//         initialRotation={[0, 0, 0]}
//         initialScale={1}
//         initialPosition={[0, 0, 0]}
//       />
//     </>
//   );
// };

// export default Introduction;

// 'use client';

// import React, { Suspense, useRef } from 'react';
// import Link from 'next/link';
// import * as THREE from 'three';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Model } from './Model';
// import { ModelPreloader } from './ModelPreloader';

// /** OrbitControls with onChange invalidation (stable first frame) */
// function Controls({ autoRotate = false }: { autoRotate?: boolean }) {
//   const { invalidate } = useThree();
//   return (
//     <OrbitControls
//       makeDefault
//       autoRotate={autoRotate}
//       enableZoom={false}
//       onChange={() => invalidate()}
//     />
//   );
// }

// /** Spin children around Y-axis (radians per second) */
// function SpinningY({
//   speed = 0.6,
//   children,
// }: {
//   speed?: number;
//   children: React.ReactNode;
// }) {
//   const ref = useRef<THREE.Group>(null!);
//   useFrame((_, delta) => {
//     if (!ref.current) return;
//     ref.current.rotation.y += speed * delta;
//   });
//   return <group ref={ref}>{children}</group>;
// }

// type SectionProps = {
//   title: string;
//   text: string;
//   href: string;
//   button?: string;
//   flip?: boolean;
//   fov?: number;
//   spinSpeed?: number;
//   // Model props
//   modelSrc: string;
//   initialRotation?: [number, number, number];
//   initialScale?: number | [number, number, number];
//   initialPosition?: [number, number, number];
// };

// /** 
//  * Section preserves the original DOM and className structure:
//  * container -> flex flex-col-reverse lg:flex-row (+ flip) -> text column + sized Canvas column
//  */
// const Section = ({
//   title,
//   text,
//   href,
//   button = 'Read More',
//   flip = false,
//   fov = 13,
//   spinSpeed = 0.6,
//   modelSrc,
//   initialRotation = [0, 0, 0],
//   initialScale = 1,
//   initialPosition = [0, 0, 0],
// }: SectionProps) => (
//   <section className="bg-white py-20">
//     <div
//       className={`container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ${
//         flip ? 'lg:flex-row-reverse' : ''
//       }`}
//     >
//       {/* Text column (unchanged layout) */}
//       <div className="text-center lg:text-left max-w-2xl">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
//         <p className="text-lg mb-6 text-[#021954]">{text}</p>
//         <Link href={href}>
//           <button className="px-6 py-2 bg-[#021954] text-white rounded-lg hover:bg-blue-800">
//             {button}
//           </button>
//         </Link>
//       </div>

//       {/* 3D column with fixed size to avoid first-paint 0×0 measurements */}
//       <div className="w-full h-[300px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
//         <Canvas
//           className="!absolute inset-0"
//           camera={{ position: [0, 0, 2.5], fov }}
//           dpr={[1, 1.5]}
//           gl={{ powerPreference: 'high-performance' }}
//           style={{ background: 'transparent' }}
//           shadows
//         >
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 2, 5]} intensity={1.2} />

//           <Suspense fallback={null}>
//             <SpinningY speed={spinSpeed}>
//               <Model
//                 src={modelSrc}
//                 rotation={initialRotation}
//                 scale={initialScale}
//                 position={initialPosition}
//               />
//             </SpinningY>
//           </Suspense>

//           <Controls autoRotate={false} />
//         </Canvas>
//       </div>
//     </div>
//   </section>
// );

// const Introduction = () => {
//   return (
//     <>
//       {/* Section 1: scene.gltf */}
//       <Section
//         title="Welcome to The TIH-iHub Drishti"
//         text="iHub Drishti, IIT Jodhpur is a national innovation hub dedicated to Computer Vision, Augmented Reality, and Virtual Reality. Established under the Government of India's NM-ICPS mission, it fosters cutting-edge research and industry collaboration. The hub unites top researchers, industry partners, and startups to drive technological advancements. With state-of-the-art labs and training, iHub Drishti aims to be India's leading center for vision and XR technologies."
//         href="/about-tih"
//         button="Read More"
//         flip={false}
//         fov={13}
//         spinSpeed={0.6}
//         modelSrc="/scene.gltf"
//         initialRotation={[0, 0, 0]}
//         initialScale={1}
//         initialPosition={[0, 0, 0]}
//       />

//       {/* Section 2: cv_eye.gltf */}
//       <Section
//         title="Our Vision in XR"
//         text="From industry-grade AR/VR prototyping to academic collaboration, we bridge research and deployment with robust infrastructure and mentorship programs."
//         href="/about-tih"
//         button="Read More"
//         flip
//         fov={16}
//         spinSpeed={0.8}
//         modelSrc="/cv_eye.gltf"
//         initialRotation={[0, 0, 0]}
//         initialScale={1}
//         initialPosition={[0, 0, 0]}
//       />
//     </>
//   );
// };

// export default Introduction;






















// 'use client';

// import React, { Suspense, useRef } from 'react';
// import Link from 'next/link';
// import * as THREE from 'three';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Model } from './Model';

// function Controls({ autoRotate = false }: { autoRotate?: boolean }) {
//   const { invalidate } = useThree();
//   return (
//     <OrbitControls
//        makeDefault
//       autoRotate={autoRotate}
//       enableZoom={false}
//       enableRotate={false}   // ← disable cursor rotation
//       onChange={() => invalidate()}
//     />
//   );
// }

// function SpinningY({
//   speed = 0.6,
//   children,
// }: {
//   speed?: number;
//   children: React.ReactNode;
// }) {
//   const ref = useRef<THREE.Group>(null!);
//   useFrame((_, delta) => {
//     if (ref.current) ref.current.rotation.y += speed * delta;
//   });
//   return <group ref={ref}>{children}</group>;
// }

// type SectionProps = {
//   title: string;
//   text: string;
//   href: string;
//   button?: string;
//   flip?: boolean;
//   fov?: number;
//   spinSpeed?: number;
//   modelSrc: string;
//   initialRotation?: [number, number, number];
//   initialScale?: number | [number, number, number];
//   initialPosition?: [number, number, number];
// };

// const Section = ({
//   title,
//   text,
//   href,
//   button = 'Read More',
//   flip = false,
//   fov = 13,
//   spinSpeed = 0.6,
//   modelSrc,
//   initialRotation = [0, 0, 0],
//   initialScale = 1,
//   initialPosition = [0, 0, 0],
// }: SectionProps) => (
//   <section className="bg-white py-20">
//     <div
//       className={`container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ${
//         flip ? 'lg:flex-row-reverse' : ''
//       }`}
//     >
//       <div className="text-center lg:text-left max-w-2xl">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
//         <p className="text-lg mb-6 text-[#021954]">{text}</p>
//         <Link href={href}>
//           <button className="px-6 py-2 bg-[#021954] text-white rounded-lg hover:bg-blue-800">
//             {button}
//           </button>
//         </Link>
//       </div>

//       {/* Fixed-size parent; Canvas fills it absolutely to avoid 0×0 at mount */}
//       <div className="w-full h-[300px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
//         <Canvas className="!absolute inset-0" camera={{ position: [0, 0, 2.5], fov }} dpr={[1, 1.5]}>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 2, 5]} intensity={1.2} />
//           <Suspense fallback={null}>
//             <SpinningY speed={spinSpeed}>
//               <Model
//                 src={modelSrc}
//                 rotation={initialRotation}
//                 scale={initialScale}
//                 position={initialPosition}
//                 useDraco
//                 useMeshopt
//               />
//             </SpinningY>
//           </Suspense>
//           <Controls autoRotate={false} />
//         </Canvas>
//       </div>
//     </div>
//   </section>
// );

// export default function Introduction() {
//   return (
//     <>
//       <Section
//         title="Welcome to The TIH-iHub Drishti"
//         text="iHub Drishti, IIT Jodhpur is a national innovation hub dedicated to Computer Vision, Augmented Reality, and Virtual Reality."
//         href="/about-tih"
//         modelSrc="/scene.gltf"
//       />
//       <Section
//         title="Our Vision in XR"
//         text="From industry-grade AR/VR prototyping to academic collaboration, we bridge research and deployment with robust infrastructure."
//         href="/about-tih"
//         flip
//         fov={16}
//         spinSpeed={0.8}
//         modelSrc="/cv_eye.gltf"
//       />
//     </>
//   );
// }










'use client';

import React, { Suspense, useRef } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model';
import { ModelPreloader } from './ModelPreloader';

/** OrbitControls with onChange invalidation (stable first frame) */
function Controls({ autoRotate = false }: { autoRotate?: boolean }) {
  const { invalidate } = useThree();
  return (
    <OrbitControls
      makeDefault
      autoRotate={autoRotate}
      enableZoom={false}
      enableRotate={false}
      onChange={() => invalidate()}
    />
  );
}

/** Spin children around Y-axis (radians per second) */
function SpinningY({
  speed = 0.6,
  children,
}: {
  speed?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += speed * delta;
  });
  return <group ref={ref}>{children}</group>;
}

type SectionProps = {
  title: string;
  text: string;
  href: string;
  button?: string;
  flip?: boolean;
  fov?: number;
  spinSpeed?: number;
  // Model props
  modelSrc: string;
  initialRotation?: [number, number, number];
  initialScale?: number | [number, number, number];
  initialPosition?: [number, number, number];
};

/**
 * Section preserves the original DOM and className structure:
 * container -> flex flex-col-reverse lg:flex-row (+ flip) -> text column + sized Canvas column
 */
const Section = ({
  title,
  text,
  href,
  button = 'Read More',
  flip = false,
  fov = 13,
  spinSpeed = 0.6,
  modelSrc,
  initialRotation = [0, 0, 0],
  initialScale = 1,
  initialPosition = [0, 0, 0],
}: SectionProps) => (
  <section className="bg-white py-20">
    <div
      className={`container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ${
        flip ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Text column (unchanged layout) */}
      <div className="text-center lg:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg mb-6 text-[#021954]">{text}</p>
        <Link href={href}>
          <button className="px-6 py-2 bg-[#021954] text-white rounded-lg hover:bg-blue-800">
            {button}
          </button>
        </Link>
      </div>

      {/* 3D column with fixed size to avoid first-paint 0×0 measurements */}
      <div className="w-full h-[300px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
        <Canvas
          className="!absolute inset-0"
          camera={{ position: [0, 0, 2.5], fov }}
          dpr={[1, 1.5]}
          gl={{ powerPreference: 'high-performance' }}
          style={{ background: 'transparent' }}
          shadows
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1.2} />

          <Suspense fallback={null}>
            <SpinningY speed={spinSpeed}>
              <Model
                src={modelSrc}
                rotation={initialRotation}
                scale={initialScale}
                position={initialPosition}
              />
            </SpinningY>
          </Suspense>

          <Controls autoRotate={false} />
        </Canvas>
      </div>
    </div>
  </section>
);

const Introduction = () => {
  // IMPORTANT: Preload early so the first section renders without a cold fetch.
  // This does not render anything, just triggers preloads defined in the module.
  // Ensure your ModelPreloader sets paths for GLB+Draco, or GLTF fallback.
  return (
    <>
      <ModelPreloader />

      {/* Section 1: headset (prefer optimized GLB; fallback to GLTF if not available) */}
      <Section
        title="Welcome to The TIH-iHub Drishti"
        text="iHub Drishti, IIT Jodhpur is a national innovation hub dedicated to Computer Vision, Augmented Reality, and Virtual Reality. Established under the Government of India's NM-ICPS mission, it fosters cutting-edge research and industry collaboration. The hub unites top researchers, industry partners, and startups to drive technological advancements. With state-of-the-art labs and training, iHub Drishti aims to be India's leading center for vision and XR technologies."
        href="/about-tih"
        button="Read More"
        flip={false}
        fov={13}
        spinSpeed={0.6}
        modelSrc="/headset.glb"      // use '/scene.gltf' if you didn't convert yet
        initialRotation={[0, 0, 0]}
        initialScale={1}
        initialPosition={[0, 0, 0]}
      />

      {/* Section 2: eye */}
      <Section
        title="Our Vision in XR"
        text="From industry-grade AR/VR prototyping to academic collaboration, we bridge research and deployment with robust infrastructure and mentorship programs."
        href="/about-tih"
        button="Read More"
        flip
        fov={16}
        spinSpeed={0.8}
        modelSrc="/eye.glb"          // use '/cv_eye.gltf' if you didn't convert yet
        initialRotation={[0, 0, 0]}
        initialScale={1}
        initialPosition={[0, 0, 0]}
      />
    </>
  );
};

export default Introduction;
