import useSystemTheme from "@/hooks/useSystemTheme";
import Image from "next/image";

export default function LekongNameLogo() {
  const theme = useSystemTheme()
  if (!theme) return null
  return <Image alt="lekong" height={0} src={theme === "light"? "/lekong_b.png" : "/lekong_w.png"} width={200}/>
}