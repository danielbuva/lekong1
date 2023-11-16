import Image from "next/image";

export default function LekongIconLogo() {
  return (
    <Image
      alt="lekong icon"
      className="h-auto w-auto cursor-pointer"
      height={40}
      priority
      src="/lekong_icon.png"
      width={60}
    />
  );
}
