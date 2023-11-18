"use client";

import {
  HerbWorkStationPlaceHolder,
  Poster,
  VialModel,
} from "@/components/canvas/models";
import { Stars, ArcballControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import type { Dispatch, SetStateAction } from "react";
import { Suspense, useEffect } from "react";

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
      <ArcballControls dampingFactor={5} enablePan={false} makeDefault />
      <HerbWorkStationPlaceHolder visible={show} />
      <Poster visible={show} />
    </Suspense>
  );
}
