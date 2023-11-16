"use client";

import Splash from "@/components/dom/Splash";
import Spinner from "@/components/loaders/Spinner";
import LekongIconLogo from "@/components/logo/LekongIconLogo";
import LekongNameLogo from "@/components/logo/LekongNameLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
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
      <div className="z-10 flex w-full justify-end p-6">
        <LekongIconLogo />
      </div>
    </main>
  );
}
