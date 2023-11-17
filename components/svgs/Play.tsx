import { useColorMode } from "@/hooks/useTheme";

export default function PlaySVG({ onClick }: { onClick: () => void }) {
  const stroke = useColorMode("#000D3B", "#fff");

  return (
    <svg
      className="cursor-pointer"
      fill="none"
      height={40}
      onClick={onClick}
      width={40}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.297 16.447c1.889 1.18 2.833 1.77 3.157 2.527.283.66.283 1.407 0 2.067-.324.756-1.268 1.346-3.157 2.527l-8.873 5.545c-2.097 1.31-3.145 1.966-4.01 1.896a2.624 2.624 0 0 1-1.896-1.05C11 29.26 11 28.024 11 25.552V14.462c0-2.473 0-3.71.518-4.406a2.624 2.624 0 0 1 1.896-1.051c.865-.07 1.913.586 4.01 1.896l8.873 5.546Z"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}
