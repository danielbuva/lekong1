"use client";

import { TrackballControls, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import dynamic from "next/dynamic";
import type { Dispatch, SetStateAction } from "react";
import { Suspense, useEffect } from "react";

const VialModel = dynamic(
  () => import("@/components/canvas/models").then((mod) => mod.VialModel),
  {
    ssr: false,
  },
);
const HerbWorkStationPlaceHolder = dynamic(
  () =>
    import("@/components/canvas/models").then(
      (mod) => mod.HerbWorkStationPlaceHolder,
    ),
  {
    ssr: false,
  },
);

export default function Experience({
  setShow,
  show,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}) {
  const { camera } = useThree();
  const tl = gsap.timeline();
  useEffect(() => {
    if (show) {
      tl.to(camera.position, {
        duration: 0.8,
        ease: "power1",
        x: 28,
        y: 107,
        z: 246,
      });
    }
  }, [show, camera.position, tl]);
  console.log(camera.position);
  return (
    <Suspense fallback={null}>
      <Stars
        count={5000}
        depth={10}
        factor={4}
        // fade
        radius={50}
        saturation={0}
        speed={1}
      />
      <VialModel
        onClick={() => {
          setShow(false);
          tl.to(camera.position, { x: 0, y: 40, z: 70 });
        }}
      />
      <HerbWorkStationPlaceHolder visible={show} />
      <TrackballControls
        maxDistance={950}
        minDistance={30}
        // noPan
        rotateSpeed={4}
      />
    </Suspense>
  );
}
