"use client";

import Spinner from "@/components/loaders/Spinner";
import LekongIconLogo from "@/components/logo/LekongIconLogo";
import LekongNameLogo from "@/components/logo/LekongNameLogo";
import dynamic from "next/dynamic";
import { useState } from "react";

const Experience = dynamic(
  () => import("@/components/canvas/Experience").then((mod) => mod.default),
  {
    ssr: false,
  },
);
const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    loading: Spinner,
    ssr: false,
  },
);

export default function Page() {
  const [show, setShow] = useState(false);
  // const onLogoClick = () => {
  //   tl.to(camera.position, { x: 28, y: 107, z: 246 });
  // };
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="absolute z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="relative h-9 w-44 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"></div>
      </div>
      <LekongNameLogo onClick={() => setShow(true)} />
      <View className="absolute top-0 min-h-screen sm:w-full">
        <Experience setShow={setShow} show={show} />
      </View>
      <div className="z-10 flex w-full justify-end p-6">
        <LekongIconLogo />
      </div>
    </main>
  );
}
