'use client';
import { useGLTF } from '@react-three/drei';

// Start preloading as soon as this module is imported.
// If you created optimized GLBs, point to them; else use your current GLTFs.
useGLTF.preload('/headset.glb', 'https://www.gstatic.com/draco/v1/decoders/');
useGLTF.preload('/eye.glb', 'https://www.gstatic.com/draco/v1/decoders/');
// If you are still using GLTFs instead, uncomment:
// useGLTF.preload('/scene.gltf');
// useGLTF.preload('/cv_eye.gltf');

export function ModelPreloader() {
  return null;
}

