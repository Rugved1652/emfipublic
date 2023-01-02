import React, { useMemo, useCallback, useRef } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three-stdlib";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  Canvas,
  useLoader,
  extend,
  useThree,
  useFrame,
} from "@react-three/fiber";
import dynamic from "next/dynamic";

extend({ OrbitControls });

// function CameraControls() {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   const controlsRef: any = useRef();
//   useFrame(() => controlsRef.current.update());

//   return (
//     <orbitControls
//       ref={controlsRef}
//       args={[camera, domElement]}
//       autoRotate
//       autoRotateSpeed={-0.2}
//     />
//   );
// }

const Points = dynamic(import("./Points"), { suspense: true });

const AnimationContainer = () => {
  return (
    <Canvas camera={{ position: [0, 10, 100], fov: 100 }}>
      <React.Suspense fallback={<></>}>
        <Points />
      </React.Suspense>
      {/* <CameraControls /> */}
    </Canvas>
  );
};

export default AnimationContainer;
