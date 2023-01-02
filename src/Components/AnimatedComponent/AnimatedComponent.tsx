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

const AnimationContainer = dynamic(import("./AnimatedContainer"), {
  suspense: true,
});

const AnimationComponent = () => {
  return (
    <div className="anim">
      <React.Suspense fallback={<></>}>
        <AnimationContainer />
      </React.Suspense>
    </div>
  );
};

export default AnimationComponent;
