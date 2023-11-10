"use client";

import Spinner from "@/components/loaders/Spinner";
import LekongNameLogo from "@/components/logo/LekongNameLogo";
import { CameraControls, TrackballControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { Vector3 } from "three";

const VialModel = dynamic(
  () => import("@/components/canvas/models").then((mod) => mod.VialModel),
  {
    ssr: false,
  }
);
const HerbWorkStationPlaceHolder = dynamic(
  () => import("@/components/canvas/models").then((mod) => mod.HerbWorkStationPlaceHolder),
  {
    ssr: false,
  }
);
const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    loading: Spinner,
    ssr: false,
  }
);
// const Common = dynamic(
//   () => import("@/components/canvas/View").then((mod) => mod.Common),
//   { ssr: false }
// );

export default function Page() {
  const [show, setShow] = useState(false)

  return (
    <main className="flex-col flex min-h-screen justify-between">
      <div className="absolute flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="w-44 h-9 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"></div>
      </div>
      <LekongNameLogo />
      <View className="min-h-screen sm:w-full absolute top-0">
        <Suspense fallback={null}>
          <VialModel />
          <HerbWorkStationPlaceHolder visible={show}/>
          <TrackballControls
            maxDistance={950}
            minDistance={30}
            noPan
            rotateSpeed={4}
          />
          <CameraControls dollyToCursor makeDefault/>
          <Rig show={show}/>
        </Suspense>
      </View>
      {/* <div className="w-full justify-end flex">
        <Image alt="logo" height={0} src="/lekong.png" width={60}/>
      </div> */}
    </main>
  );
}

// function Rig() {
// //{ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }
// const position = new Vector3(0,0,2)
// const focus = new Vector3(0,0,0)
//   const { controls, scene } = useThree()
//   useEffect(() => {
//     const active = scene.getObjectByName("vial")
//     if (active && active.parent) {
//       active.parent.localToWorld(position.set(0, 0.5, 0.25))
//       active.parent.localToWorld(focus.set(0, 0, -2))
//     }
//     controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
//   })
//   return <CameraControls makeDefault maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
// }

function Rig({show}: {show: boolean}) {
  useFrame((state)=>{
    if (show) {
      state.camera.lookAt(0,0,0)
      state.camera.position.set(0,0,0)
    }
    return null
  })
  return <></>
}