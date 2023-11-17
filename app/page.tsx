"use client";

import LekongIconLogo from "@/components/logo/LekongIconLogo";
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
    loading: () => {
      return (
        <div className="absolute flex h-screen w-screen items-center justify-center bg-blue-500">
          loading
        </div>
      );
    },
    ssr: false,
  },
);
const Splash = dynamic(
  () => import("@/components/dom/Splash").then((mod) => mod.default),
  {
    ssr: false,
  },
);
const LekongNameLogo = dynamic(
  () => import("@/components/logo/LekongNameLogo").then((mod) => mod.default),
  {
    ssr: false,
  },
);
const ThemeSwitcher = dynamic(
  () => import("@/components/ThemeSwitcher").then((mod) => mod.default),
  {
    ssr: false,
  },
);
const AudioControls = dynamic(
  () => import("@/components/AudioControls").then((mod) => mod.default),
  { ssr: false },
);

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <main className="flex min-h-screen select-none flex-col justify-between">
      <Splash />
      <div className="z-10 flex w-full justify-between pr-6">
        <LekongNameLogo onClick={() => setShow(true)} />
        <ThemeSwitcher />
      </div>
      <View className="absolute top-0 min-h-screen sm:w-full">
        <Experience setShow={setShow} show={show} />
      </View>
      <div className="z-10 flex w-full justify-between p-6">
        <AudioControls />
        <LekongIconLogo />
      </div>
    </main>
  );
}
