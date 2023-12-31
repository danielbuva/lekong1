import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Object3DEventMap } from "three";
import type { GLTF } from "three-stdlib";

type VialGLTFResult = GLTF & {
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshPhysicalMaterial;
  };
  nodes: {
    CAPAC001_Material001_0: THREE.Mesh;
    CAPAC_Material_0: THREE.Mesh;
    tube_Material009_0: THREE.Mesh;
  };
};

export function VialModel(props: JSX.IntrinsicElements["group"]) {
  const { materials, nodes } = useGLTF("/models/vial.glb") as VialGLTFResult;
  const self = useRef<Group<Object3DEventMap>>(null);

  return (
    <group {...props} dispose={null} ref={self} rotation={[0, 300, 0]}>
      <ambientLight intensity={2} />
      <group
        position={[0, 3.441, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      >
        <mesh
          geometry={nodes.CAPAC_Material_0.geometry}
          material={materials["Material.001"]}
          position={[0, 0, -0.034]}
        />
      </group>
      <group
        position={[0, 3.441, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      >
        <mesh
          geometry={nodes.CAPAC001_Material001_0.geometry}
          material={materials["Material.002"]}
          position={[0, 0, -0.034]}
        />
      </group>
      <group
        position={[0, -5.559, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      >
        <mesh
          geometry={nodes.tube_Material009_0.geometry}
          material={materials["Material.002"]}
          position={[0, 0, 0.056]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/vial.glb");

type HerbWorkStationPlaceHolderGLTFResult = GLTF & {
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
  nodes: {
    Cube: THREE.Mesh;
  };
};

export function HerbWorkStationPlaceHolder(
  props: JSX.IntrinsicElements["group"],
) {
  const { materials, nodes } = useGLTF(
    "/models/herbworkstationplaceholder.glb",
  ) as HerbWorkStationPlaceHolderGLTFResult;

  return (
    <group
      {...props}
      dispose={null}
      position={[40, -14, 0]}
      rotation={[-0.2, -0.3, 0]}
      scale={20}
    >
      <ambientLight />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[3.501, 0.392, 1.721]}
      />
    </group>
  );
}

useGLTF.preload("/models/herbworkstationplaceholder.glb");

type PosterGLTFResult = GLTF & {
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
  nodes: {
    Object_4: THREE.Mesh;
  };
};

export function Poster(props: JSX.IntrinsicElements["group"]) {
  const { materials, nodes } = useGLTF(
    "/models/poster.glb",
  ) as PosterGLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      position={[-63, 10, -40]}
      rotation={[1.24, 0.05, 1.3]}
      scale={40}
    >
      <mesh
        castShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Material.003"]}
        receiveShadow
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/poster.glb");
