import { DimensionsType } from "../types";
import * as THREE from "three";
import randomiseMatrix from "../utils/randomiseMatrix";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";

interface IMergedCubes {
  instances: number;
}

export function MergedCubes({ instances }: IMergedCubes) {
  const boxSize: DimensionsType = [1, 1, 1];
  const matrix = new THREE.Matrix4();
  const material = new THREE.MeshBasicMaterial();
  const geometry = new THREE.BoxGeometry(...boxSize);
  const geometries:
    | THREE.BufferGeometry<THREE.NormalBufferAttributes>
    | THREE.BufferGeometry<THREE.NormalBufferAttributes>[]
    | undefined = [];

  for (let i = 0; i < instances; ++i) {
    randomiseMatrix(matrix);
    const instanceGeometry = geometry.clone();
    instanceGeometry.applyMatrix4(matrix);
    geometries.push(instanceGeometry);
  }

  const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);
  const mergedMesh = new THREE.Mesh(mergedGeometry, material);

  return <primitive object={mergedMesh} />;
}

export default MergedCubes;
