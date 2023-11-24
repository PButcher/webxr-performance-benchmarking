import { useLayoutEffect, useRef } from "react";
import { DimensionsType } from "../types";
import * as THREE from "three";
import randomiseMatrix from "../utils/randomiseMatrix";

interface IInstancedCubes {
  instances: number;
}

export function InstancedCubes({ instances }: IInstancedCubes) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const boxSize: DimensionsType = [1, 1, 1];
  const matrix = new THREE.Matrix4();

  useLayoutEffect(() => {
    for (let i = 0; i < instances; ++i) {
      randomiseMatrix(matrix);
      ref.current!.setMatrixAt(i, matrix);
    }
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, instances]}>
      <boxGeometry args={boxSize} />
      <meshBasicMaterial />
    </instancedMesh>
  );
}

export default InstancedCubes;
