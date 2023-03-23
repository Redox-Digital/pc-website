import Link from "next/link";
import style from "@/styles/components/Button.module.scss";

type Props = {
  to: string;
  size?: undefined | "small" | "big";
  // type?: undefined | "submit";
  variation?: undefined | "secondary" | "black" | "outline";
  icon?: undefined | string;
  children: string;
};

const getSize = (param: string | undefined) => {
  switch (param) {
    case "small":
      return style.btn__small;

    case "big":
      return style.btn__big;

    default:
      return "";
  }
};

const getVariation = (param: string | undefined) => {
  switch (param) {
    case "secondary":
      return style.btn__secondary;

    case "black":
      return style.btn__black;

    case "outline":
      return style.btn__outline;

    default:
      return "";
  }
};

/**
 *
 * @param to : URL
 * @param size : undefined | "small" | "big";
 * @param type : undefined | "secondary" | "black" | "outline"
 * @param children: string, text on button;
 * @returns
 */
export default function Button({
  to,
  // type,
  size,
  children,
  icon,
  variation,
}: Props) {
  return (
    <Link
      href={to}
      className={`${style.btn} ${getSize(size)} ${getVariation(variation)}`}
    >
      {children}
      {icon ? <i className={icon}></i> : ""}
    </Link>
  );
}
