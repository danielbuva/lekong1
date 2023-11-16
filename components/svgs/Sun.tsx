import { useTheme } from "@/hooks/useTheme";

export default function SunSVG() {
  const { lightMode, theme } = useTheme();
  return (
    <svg
      className="cursor-pointer"
      fill="none"
      height={40}
      onClick={lightMode}
      width={40}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5v1.667m0 26.666V35M6.667 20H5m5.524-9.476L9.167 9.167m20.31 1.357 1.356-1.357m-20.31 20.316-1.356 1.35m20.31-1.35 1.356 1.35M35 20h-1.667m-6.666 0a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0Z"
        stroke={theme === "light" ? "#000" : "#3f3f3f"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
