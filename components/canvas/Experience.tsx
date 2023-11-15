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
  useEffect(() => {
    if (show) {
      gsap.to(camera.position, {
        duration: 0.8,
        ease: "power1",
        x: 28,
        y: 107,
        z: 246,
      });
      gsap.to(camera.up, { duration: 0.8, ease: "power1", x: 0, y: 1, z: 0 });
    }
  }, [show, camera.position, camera.up]);
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
          gsap.to(camera.position, {
            duration: 0.8,
            ease: "power1",
            x: 0,
            y: 40,
            z: 70,
          });
          gsap.to(camera.up, {
            duration: 0.8,
            ease: "power1",
            x: 0,
            y: 1,
            z: 0,
          });
        }}
        onPointerOut={() => (document.body.style.cursor = "auto")}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
      />
      <HerbWorkStationPlaceHolder visible={show} />
      <TrackballControls
        maxDistance={950}
        minDistance={30}
        noPan
        rotateSpeed={4}
      />
    </Suspense>
  );
}
