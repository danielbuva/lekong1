"use client";

import { TrackballControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import { Suspense } from "react";

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

export default function Experience() {
  return (
    <Suspense fallback={null}>
      <VialModel />
      <HerbWorkStationPlaceHolder visible={true} />
      <TrackballControls
        maxDistance={950}
        minDistance={30}
        // noPan
        rotateSpeed={4}
      />
    </Suspense>
  );
}
