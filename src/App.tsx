import { VRButton, XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { NaiiveCubes, InstancedCubes, MergedCubes } from "./components";
import { GetInfo } from "./utils";
import { useState } from "react";

function App() {
  const [method, setMethod] = useState("instanced");
  const [instances, setInstances] = useState(50000);

  return (
    <>
      <select
        style={{ position: "absolute", zIndex: 10, right: 0 }}
        value={method}
        onChange={(e) => {
          setMethod(e.target.value);
        }}
      >
        <option value="naiive">Naiive</option>
        <option value="merged">Merged</option>
        <option value="instanced">Instanced</option>
      </select>
      <input
        style={{ position: "absolute", zIndex: 10, right: 0, top: 20 }}
        type="number"
        min="1"
        value={instances}
        onChange={(e) => {
          setInstances(parseInt(e.target.value));
        }}
      />
      <VRButton />
      <Canvas>
        <GetInfo />
        <XR>
          <OrbitControls />
          <ambientLight />
          {method === "naiive" && <NaiiveCubes instances={instances} />}
          {method === "merged" && <MergedCubes instances={instances} />}
          {method === "instanced" && <InstancedCubes instances={instances} />}
        </XR>
      </Canvas>
      <Stats showPanel={0} className="stats" />
    </>
  );
}

export default App;
