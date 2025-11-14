// 'use client';

// import { useGLTF } from '@react-three/drei';

// type ModelProps = {
//   src: string;
//   rotation?: [number, number, number];
//   scale?: number | [number, number, number];
//   position?: [number, number, number];
//   useDraco?: boolean;
//   useMeshopt?: boolean;
// };

// export function Model({
//   src,
//   rotation = [0, 0, 0],
//   scale = 1,
//   position = [0, 0, 0],
//   useDraco = false,     // not needed for your current assets
//   useMeshopt = false,   // not needed for your current assets
// }: ModelProps) {
//   const gltf = useGLTF(src, useDraco, useMeshopt) as any;

//   if (!gltf?.scene) {
//     if (process.env.NODE_ENV !== 'production') {
//       console.warn('GLTF loaded without a scene:', src);
//     }
//     return null;
//   }

//   if (process.env.NODE_ENV !== 'production') {
//     console.debug('GLTF ok:', src, { children: gltf.scene.children?.length ?? 0 });
//   }

//   return (
//     <primitive
//       object={gltf.scene}
//       rotation={rotation}
//       scale={scale}
//       position={position}
//     />
//   );
// }


'use client';

import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { SkeletonUtils } from 'three-stdlib';

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
  const { scene } = useGLTF(src) as any;
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  if (!clone) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('GLTF missing scene:', src);
    }
    return null;
  }

  return <primitive object={clone} rotation={rotation} scale={scale} position={position} />;
}

