import MoonSVG from "./svgs/Moon";
import SunSVG from "./svgs/Sun";

export default function ThemeSwitcher() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SunSVG />
      <div className="mb-2 mt-3 h-[1px] w-6 bg-[#696969]" />
      <MoonSVG />
    </div>
  );
}
