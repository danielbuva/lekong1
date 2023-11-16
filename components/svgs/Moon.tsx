"use client";

import { useTheme } from "@/hooks/useTheme";

export default function MoonSVG() {
  const { darkMode, theme } = useTheme();
  return (
    <svg
      className="cursor-pointer"
      fill="none"
      height={40}
      onClick={darkMode}
      width={40}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M20.125 9.549c.214.368.196.827-.046 1.178a6.61 6.61 0 0 0 9.194 9.194 1.102 1.102 0 0 1 1.723 1C30.52 26.567 25.786 31 20.018 31 13.933 31 9 26.067 9 19.982c0-5.769 4.433-10.501 10.08-10.978.424-.036.831.176 1.045.545Zm-2.945 2.086a8.819 8.819 0 0 0-5.976 8.347 8.814 8.814 0 0 0 8.814 8.814c3.875 0 7.166-2.5 8.347-5.976A8.814 8.814 0 0 1 17.18 11.634Z"
        fill={theme === "light" ? "#c0c0c0" : "#fff"}
        fillRule="evenodd"
      />
    </svg>
  );
}
