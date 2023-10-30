import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type VialGLTFResult = GLTF & {
  nodes: {
    CAPAC_Material_0: THREE.Mesh;
    CAPAC001_Material001_0: THREE.Mesh;
    tube_Material009_0: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshPhysicalMaterial;
  };
};

export function VialModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/vial.glb") as VialGLTFResult;
  return (
    <group {...props} dispose={null} rotation={[0, 300, 0]}>
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
          material={materials["Material.009"]}
          position={[0, 0, 0.056]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/vial.glb");
