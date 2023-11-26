import { useColorMode } from "@/hooks/useTheme";

export default function PauseSVG({ onClick }: { onClick: () => void }) {
  const fill = useColorMode("#000D3B", "#fff");
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
        clipRule="evenodd"
        d="M13.807 9h.107c.919 0 1.686 0 2.294.082.643.086 1.223.276 1.689.742.466.466.656 1.046.742 1.689.082.608.082 1.375.082 2.294v12.386c0 .92 0 1.686-.082 2.294-.086.643-.276 1.223-.742 1.689-.466.466-1.046.656-1.689.742C15.6 31 14.833 31 13.914 31h-.107c-.92 0-1.686 0-2.294-.082-.643-.086-1.223-.276-1.689-.742-.466-.466-.656-1.046-.742-1.689C9 27.88 9 27.112 9 26.193V13.807c0-.92 0-1.686.082-2.294.086-.643.276-1.223.742-1.689.466-.466 1.046-.656 1.689-.742C12.12 9 12.888 9 13.807 9Zm-2.09 1.603c-.472.063-.674.173-.808.306-.133.134-.243.336-.306.808-.066.494-.068 1.157-.068 2.143v12.28c0 .986.002 1.649.068 2.143.063.472.173.674.306.807.134.134.336.244.808.307.494.067 1.157.068 2.143.068.987 0 1.65-.002 2.144-.068.472-.063.674-.173.807-.306.134-.134.244-.336.307-.808.066-.494.068-1.157.068-2.143V13.86c0-.986-.002-1.649-.068-2.143-.063-.472-.173-.674-.307-.808-.133-.133-.335-.243-.807-.306-.495-.066-1.157-.068-2.144-.068-.986 0-1.649.002-2.143.068ZM26.087 9h.106c.92 0 1.686 0 2.294.082.643.086 1.223.276 1.689.742.466.466.656 1.046.742 1.689.082.608.082 1.375.082 2.294v12.386c0 .92 0 1.686-.082 2.294-.086.643-.276 1.223-.742 1.689-.466.466-1.046.656-1.689.742-.608.082-1.375.082-2.294.082h-.107c-.92 0-1.686 0-2.294-.082-.643-.086-1.223-.276-1.689-.742-.466-.466-.656-1.046-.742-1.689-.082-.608-.082-1.375-.082-2.294V13.807c0-.92 0-1.686.082-2.294.086-.643.276-1.223.742-1.689.466-.466 1.046-.656 1.689-.742C24.4 9 25.167 9 26.086 9Zm-2.09 1.603c-.473.063-.675.173-.808.306-.134.134-.244.336-.307.808-.066.494-.068 1.157-.068 2.143v12.28c0 .986.002 1.649.068 2.143.063.472.173.674.307.807.133.134.335.244.807.307.495.067 1.157.068 2.144.068.986 0 1.649-.002 2.143-.068.472-.063.674-.173.807-.306.134-.134.244-.336.307-.808.067-.494.068-1.157.068-2.143V13.86c0-.986-.002-1.649-.068-2.143-.063-.472-.173-.674-.306-.808-.134-.133-.336-.243-.808-.306-.494-.066-1.157-.068-2.143-.068-.987 0-1.65.002-2.144.068Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
}