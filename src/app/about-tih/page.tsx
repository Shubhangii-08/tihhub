// 'use client';

// import React, { Suspense, useRef, useEffect } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { useScroll, ScrollControls } from '@react-three/drei';
// import { Model } from '@/components/Model';
// import type { Group } from 'three';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// function Scene({
//   scrollY,
//   sectionHeight,
// }: {
//   scrollY: React.MutableRefObject<number>;
//   sectionHeight: number;
// }) {
//   const group = useRef<Group>(null);
//   const scroll = useScroll();
//   const { size } = useThree();

//   useFrame(() => {
//     if (!group.current) return;

//     const scrollOffset = scrollY.current / sectionHeight;
//     const isMobile = size.width < 768;

//     // Rotation
//     group.current.rotation.y = scrollOffset * Math.PI * 2;

//     // Depth movement
//     const depthOffset = Math.sin(scrollOffset * Math.PI) * (isMobile ? 0.3 : 0.5);
//     // Dynamic scale
//     const baseScale = isMobile ? 0.7 : 1;
//     const scaleVariation = Math.sin(scrollOffset * Math.PI) * 0.1;
//     const scale = baseScale + scaleVariation;

//     // Position and scale
//     const xOffset = isMobile ? 0 : 0.2;
//     const yOffset = Math.sin(scrollOffset * Math.PI) * 0.1;
//     group.current.position.set(xOffset, yOffset, depthOffset);
//     group.current.scale.set(scale, scale, scale);
//   });

//   return (
//     <group ref={group}>
//       <Suspense fallback={null}>
//         {/* Provide a valid GLTF URL under /public */}
//         <Model src="/scene.gltf" />
//       </Suspense>
//     </group>
//   );
// }

// export default function AboutTIH() {
//   const scrollY = useRef(0);
//   const sectionHeight = 800;
//   const numSections = 3;

//   // Initialize as array with fixed size for your sections
//   const textRefs = useRef<(HTMLDivElement | null)[]>(Array(numSections).fill(null));
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const onScroll = () => {
//       scrollY.current = window.scrollY;
//     };
//     window.addEventListener('scroll', onScroll);

//     // GSAP animations
//     textRefs.current.forEach((ref) => {
//       if (!ref) return;

//       gsap.fromTo(
//         ref,
//         { opacity: 0, y: 50, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: ref,
//             start: 'top 80%',
//             end: 'bottom 20%',
//             scrub: 1,
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );

//       const mouseEnter = () =>
//         gsap.to(ref, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
//       const mouseLeave = () =>
//         gsap.to(ref, { scale: 1, duration: 0.3, ease: 'power2.out' });

//       ref.addEventListener('mouseenter', mouseEnter);
//       ref.addEventListener('mouseleave', mouseLeave);

//       // Cleanup listeners on unmount
//       return () => {
//         ref.removeEventListener('mouseenter', mouseEnter);
//         ref.removeEventListener('mouseleave', mouseLeave);
//       };
//     });

//     return () => {
//       window.removeEventListener('scroll', onScroll);
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div className="relative w-full" style={{ minHeight: `${sectionHeight * numSections}px` }}>
//       {/* Fixed Canvas behind content */}
//       <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
//         <Canvas camera={{ position: [0, 0, 2.5], fov: 13 }} style={{ background: 'white' }} shadows>
//           <ScrollControls pages={numSections} damping={0.1}>
//             <ambientLight intensity={0.7} />
//             <directionalLight position={[2, 2, 2]} intensity={1} />
//             <Scene scrollY={scrollY} sectionHeight={sectionHeight} />
//           </ScrollControls>
//         </Canvas>
//       </div>

//       {/* Foreground content */}
//       <div className="relative z-10 overflow-x-hidden" ref={containerRef}>
//         <section style={{ height: sectionHeight }} className="flex items-center">
//           <div
//             ref={(el) => {
//               textRefs.current[0] = el;
//             }}
//             className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-300 hover:shadow-lg rounded-lg bg-transparent backdrop-blur-sm"
//           >
//             <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#021954]">
//               About TIH-iHub Drishti
//             </h1>
//             <p className="text-base md:text-lg mb-6 text-[#021954] leading-relaxed">
//               iHub Drishti, IIT Jodhpur is a Technology Innovation Hub focused around &quot;Computer
//               Vision, Augmented Reality and Virtual Reality&quot;. Our mission is to foster innovation
//               and research in these cutting-edge technologies.
//             </p>
//             <p className="text-base md:text-lg mb-6 text-[#021954] leading-relaxed">
//               Scroll to explore more about our initiatives and research areas.
//             </p>
//           </div>
//         </section>

//         <section style={{ height: sectionHeight }} className="flex items-center justify-start">
//           <div
//             ref={(el) => {
//               textRefs.current[1] = el;
//             }}
//             className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-300 hover:shadow-lg rounded-lg bg-transparent backdrop-blur-sm"
//             style={{ transform: `translateX(${Math.max(0, scrollY.current - sectionHeight)}px)` }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#021954]">Immersive Experience</h2>
//             <p className="text-base md:text-lg text-[#021954] leading-relaxed">
//               Step into a world where virtual reality meets real innovation. Experience cutting-edge
//               technology that transforms how we interact with digital content.
//             </p>
//           </div>
//         </section>

//         <section style={{ height: sectionHeight }} className="flex items-center">
//           <div
//             ref={(el) => {
//               textRefs.current[2] = el;
//             }}
//             className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-300 hover:shadow-lg rounded-lg bg-transparent backdrop-blur-sm"
//             style={{ transform: `translateX(${Math.max(0, scrollY.current - sectionHeight * 2)}px)` }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#021954]">Cutting-edge Technology</h2>
//             <p className="text-base md:text-lg text-[#021954] leading-relaxed">
//               Powered by state-of-the-art hardware and software, delivering unparalleled performance
//               and realism. Our solutions push the boundaries of what&apos;s possible in AR/VR.
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }



'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, useGLTF } from '@react-three/drei';
import { Model } from '@/components/Model';
import type { Group } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// CHANGE THIS to the exact path that exists under /public.
// Open http://localhost:3000/headset.glb to confirm 200 OK.
// If you kept the original GLTF under /public/image, see the note below.
const MODEL_URL = '/headset.glb';

function Scene({
  scrollY,
  sectionHeight,
}: {
  scrollY: React.MutableRefObject<number>;
  sectionHeight: number;
}) {
  const group = useRef<Group>(null);
  const { size } = useThree();

  useFrame(() => {
    if (!group.current) return;

    const scrollOffset = scrollY.current / sectionHeight;
    const isMobile = size.width < 768;

    // Rotation
    group.current.rotation.y = scrollOffset * Math.PI * 2;

    // Depth movement and scale
    const depthOffset = Math.sin(scrollOffset * Math.PI) * (isMobile ? 0.3 : 0.5);
    const baseScale = isMobile ? 0.7 : 1;
    const scaleVariation = Math.sin(scrollOffset * Math.PI) * 0.1;
    const scale = baseScale + scaleVariation;

    // Position and scale
    const xOffset = isMobile ? 0 : 0.2;
    const yOffset = Math.sin(scrollOffset * Math.PI) * 0.1;
    group.current.position.set(xOffset, yOffset, depthOffset);
    group.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={group}>
      <Suspense fallback={null}>
        <Model src={MODEL_URL} />
      </Suspense>
    </group>
  );
}

export default function AboutTIH() {
  const scrollY = useRef(0);
  const sectionHeight = 800;
  const numSections = 3;

  // text sections
  const textRefs = useRef<(HTMLDivElement | null)[]>(Array(numSections).fill(null));
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload the model early (and Draco decoder if GLB was compressed).
  useEffect(() => {
    queueMicrotask(() => {
      // If your GLB is Draco-compressed, provide a decoder path:
      useGLTF.preload(MODEL_URL, 'https://www.gstatic.com/draco/v1/decoders/');
      // If not Draco-compressed, you can also do:
      // useGLTF.preload(MODEL_URL);
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);

    // GSAP animations
    textRefs.current.forEach((ref) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          },
        }
      );

      const mouseEnter = () => gsap.to(ref, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
      const mouseLeave = () => gsap.to(ref, { scale: 1, duration: 0.3, ease: 'power2.out' });

      ref.addEventListener('mouseenter', mouseEnter);
      ref.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full" style={{ minHeight: `${sectionHeight * numSections}px` }}>
      {/* Fixed Canvas behind content */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 13 }} style={{ background: 'white' }} shadows>
          <ScrollControls pages={numSections} damping={0.1}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <Scene scrollY={scrollY} sectionHeight={sectionHeight} />
          </ScrollControls>
        </Canvas>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 overflow-x-hidden" ref={containerRef}>
        <section style={{ height: sectionHeight }} className="flex items-center">
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-300 hover:shadow-lg rounded-lg bg-transparent backdrop-blur-sm"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#021954]">About TIH-iHub Drishti</h1>
            <p className="text-base md:text-lg mb-6 text-[#021954] leading-relaxed">
              iHub Drishti, IIT Jodhpur is a Technology Innovation Hub focused around &quot;Computer
              Vision, Augmented Reality and Virtual Reality&quot;. Our mission is to foster innovation
              and research in these cutting-edge technologies.
            </p>
            <p className="text-base md:text-lg mb-6 text-[#021954] leading-relaxed">
              Scroll to explore more about our initiatives and research areas.
            </p>
          </div>
        </section>

        <section style={{ height: sectionHeight }} className="flex items-center justify-start">
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-300 hover:shadow-lg rounded-lg bg-transparent backdrop-blur-sm"
            style={{ transform: `translateX(${Math.max(0, scrollY.current - sectionHeight)}px)` }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#021954]">Immersive Experience</h2>
            <p className="text-base md:text-lg text-[#021954] leading-relaxed">
              Step into a world where virtual reality meets real innovation. Experience cutting-edge
              technology that transforms how we interact with digital content.
            </p>
          </div>
        </section>

        <section style={{ height: sectionHeight }} className="flex items-center">
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className="w-full md:w-1/2 px-6 md:px-20 transform transition-all duration-300 hover:shadow-lg rounded-lg bg-transparent backdrop-blur-sm"
            style={{ transform: `translateX(${Math.max(0, scrollY.current - sectionHeight * 2)}px)` }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#021954]">Cutting-edge Technology</h2>
            <p className="text-base md:text-lg text-[#021954] leading-relaxed">
              Powered by state-of-the-art hardware and software, delivering unparalleled performance
              and realism. Our solutions push the boundaries of what&apos;s possible in AR/VR.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
