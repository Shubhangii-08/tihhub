import { useState, useRef, useEffect, Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./scene";
import ARVRSection from "./components/ARVRSection";
import ImageTextSection from "./components/ImageTextSection";
import PartnerSection from "./components/PartnerSection";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);    

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setScrollProgress(self.progress)     
        }
      }
    })
    .to(sceneRef.current, {
      x: '-25vw',
      y: '100vh',
      ease: 'none',
    })
    .to(sceneRef.current, {
      x: '25vw',
      y: '200vh',
      ease: 'none',
    })
    .to(sceneRef.current, {
      x: '-25vw',
      y: '300vh',
      ease: 'none',
    });
  }, []);

  return (
    <main ref={mainRef} className="overflow-x-hidden">
      <Suspense
        fallback={
          <div className="fixed inset-0 grid place-items-center bg-black text-white">
            Loading...
          </div>
        }
      >
        <section className="relative grid place-items-center h-[100vh]">
          <p className="text-white text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">
            TIH
          </p>
          <p className="text-white text-center absolute bottom-[5%] mx-4 w-fit text-8xl font-bold">
            I-HUB DRISHTI
          </p>

          <div ref={sceneRef} className="h-[100vh] w-[100vw] text-white">
            <Canvas>
              <Scene progress={progress}/>
            </Canvas>
          </div>
        </section>

        <section className=" relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>

          <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </section>

        <section className=" relative flex items-center justify-evenly h-[100vh]">
          <p className="text-white order-1 w-[50%] text-center px-4 text-4xl font-semibold">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
          <p className="w-[50%] order-2"></p>
        </section>

        <section className=" relative flex items-center justify-evenly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>

          <p className="text-white w-[50%] text-center px-4 text-4xl font-semibold">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </section>

        <ARVRSection progress={progress} />
        <ImageTextSection />
        <PartnerSection />
      </Suspense>
    </main>
  );
}

export default App; 