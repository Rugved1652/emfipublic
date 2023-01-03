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

type Props = {};

const Points = () => {
  let t = 0;
  let f = 0.002;
  let a = 3;
  const bufferRef: any = useRef();
  const graph = useCallback(
    (x: any, z: any) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );
  useFrame(() => {
    t += 15;

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  const img = useLoader(THREE.TextureLoader, "/circle.png");
  const count = 120;
  const sep = 2;
  let positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let yi = 0; yi < count; yi++) {
        let x = sep * (xi - count / 2);
        let y = sep * (yi - count / 2);
        let z = graph(x, y);
        positions.push(x, z, y);
      }
    }
    return new Float32Array(positions);
  }, [count, sep, graph]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute></bufferAttribute>
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={img}
        color={0xdbdee2}
        size={0.18}
        sizeAttenuation
        transparent={true}
        alphaTest={0.3}
        opacity={1}
      ></pointsMaterial>
    </points>
  );
};

export default Points;
