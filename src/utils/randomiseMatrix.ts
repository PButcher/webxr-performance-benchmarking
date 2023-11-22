import * as THREE from "three";

export const randomiseMatrix = (function () {
  const position = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const scale = new THREE.Vector3();

  return function (matrix: {
    compose: (
      arg0: THREE.Vector3,
      arg1: THREE.Quaternion,
      arg2: THREE.Vector3
    ) => void;
  }) {
    position.x = Math.random() * 40 - 20;
    position.y = Math.random() * 40 - 20;
    position.z = Math.random() * 40 - 70;

    // quaternion.random();

    scale.x = scale.y = scale.z = 0.05;

    matrix.compose(position, quaternion, scale);
    return matrix;
  };
})();

export default randomiseMatrix;
