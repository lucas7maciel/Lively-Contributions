import Image from "next/image";
import { HexColorPicker } from "react-colorful";
import "./react-colorful.css";
import { bg as themes } from "@/app/(config)/themes";
import ForbiddenIcon from "/public/icons/forbidden.svg";

interface IconProps {
  color: string;
}

export function Icon(props: IconProps) {
  return props.color ? (
    <div
      style={{
        backgroundColor: `#${themes[props.color] || props.color}`.replace(
          "##",
          "#"
        ),
      }}
      className="w-[2rem] h-[2rem] rounded"
    />
  ) : (
    <Image
      src={ForbiddenIcon}
      className="w-8 h-8 cursor-pointer"
      width={20}
      height={20}
      alt="None"
    />
  );
}

interface ContentProps {
  bg: string;
  setBg: (color: string) => void;
}

export function Content(props: ContentProps) {
  const options = ["light", "dark"];

  return (
    <>
      <div className="flex gap-3 items-center justify-between mb-3">
        <Image
          src={ForbiddenIcon}
          className="w-5 h-5 cursor-pointer hover:scale-[1.1] transition"
          width={20}
          height={20}
          alt="None"
          onClick={() => props.setBg("none")}
        />

        {options.map((color) => (
          <div
            key={color}
            className="w-5 h-5 rounded cursor-pointer hover:scale-[1.1] transition"
            style={{ backgroundColor: "#" + themes[color] }}
            onClick={() => props.setBg(color)}
          />
        ))}
      </div>
      <HexColorPicker
        className="max-w-[10rem]"
        color={props.bg}
        onChange={props.setBg}
      />
    </>
  );
}
