"use client";

import Spinner from "@/components/loaders/Spinner";
import { TrackballControls } from "@react-three/drei";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

const VialModel = dynamic(
  () => import("@/components/canvas/models").then((mod) => mod.VialModel),
  {
    ssr: false,
  }
);
const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: Spinner,
  }
);
const Common = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="absolute flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="w-44 h-9 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"></div>
      </div>
      <Link href="/loaders">loaders</Link>
      <View className="min-h-screen sm:w-full">
        <Suspense fallback={null}>
          <VialModel />
          <TrackballControls
            maxDistance={950}
            minDistance={30}
            noPan
            rotateSpeed={4}
          />
        </Suspense>
      </View>
    </main>
  );
}
