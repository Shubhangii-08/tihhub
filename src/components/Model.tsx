'use client';

import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { SkeletonUtils } from 'three-stdlib';
import { Object3D } from 'three';

type ModelProps = {
  src: string;
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  position?: [number, number, number];
};

export function Model({
  src,
  rotation = [0, 0, 0],
  scale = 1,
  position = [0, 0, 0],
}: ModelProps) {
  const { scene } = useGLTF(src) as { scene?: Object3D };
  const clone = useMemo(() => (scene ? SkeletonUtils.clone(scene) : null), [scene]);

  if (!clone) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('GLTF missing scene:', src);
    }
    return null;
  }

  return <primitive object={clone} rotation={rotation} scale={scale} position={position} />;
}

