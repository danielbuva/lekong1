import useSystemTheme from "@/hooks/useSystemTheme";
import type { ImageProps } from "next/image";
import Image from "next/image";

export default function LekongNameLogo(
  props: Omit<ImageProps, "src" | "alt" | "width">,
) {
  const theme = useSystemTheme();
  if (!theme) return null;
  return (
    <Image
      {...props}
      alt="lekong"
      className="z-10 cursor-pointer"
      height={0}
      src={theme === "light" ? "/lekong_b.png" : "/lekong_w.png"}
      width={200}
    />
  );
}
