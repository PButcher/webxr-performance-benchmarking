// import { useEffect } from "react";
import { DimensionsType } from "../types";
import * as THREE from "three";
import randomiseMatrix from "../utils/randomiseMatrix";

interface INaiiveCubes {
  instances: number;
}

export function NaiiveCubes({ instances }: INaiiveCubes) {
  const boxSize: DimensionsType = [1, 1, 1];
  const matrix = new THREE.Matrix4();
  const geometry = new THREE.BoxGeometry(...boxSize);
  const material = new THREE.MeshBasicMaterial();
  const meshes: THREE.Mesh[] = [];

  for (let i = 0; i < instances; ++i) {
    const mesh = new THREE.Mesh(geometry, material);
    randomiseMatrix(matrix);
    mesh.applyMatrix4(matrix);
    meshes.push(mesh);
  }

  return (
    <>
      {meshes.map((mesh, i) => (
        <primitive key={`mesh${i}`} object={mesh} />
      ))}
    </>
  );
}

export default NaiiveCubes;
