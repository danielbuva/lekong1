"use client";

import { cn } from "@/app/lib/utils";
import { useTheme } from "@/hooks/useTheme";

export default function Splash() {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "absolute z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px]",
        {
          "before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40":
            theme === "dark",
        },
      )}
    >
      <div
        className={cn("relative h-9 w-44", {
          "drop-shadow-[0_0_0.3rem_#ffffff70] invert": theme === "dark",
        })}
      ></div>
    </div>
  );
}
