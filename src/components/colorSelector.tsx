import { useState } from "react";
import { colors as themes, bg as bgThemes } from "@/app/(config)/themes";

interface IconProps {
  color: string;
}

export function Icon(props: IconProps) {
  return (
    <div
      style={{ backgroundColor: themes[props.color][4] }}
      className="w-[2rem] h-[2rem] rounded-full"
    />
  );
}

interface ContentProps {
  color: string;
  setColor: (color: string) => void;
  bg?: string;
}

export function Content(props: ContentProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const colors: string[] = ["light", "dark", "yellow", "blue", "red", "purple"];

  return (
    <>
      {/* Preview */}
      <div
        className="flex items-center gap-2 px-4 py-2 w-full rounded bg-black"
        style={{
          backgroundColor: bgThemes[props.bg || "dark"] || props.bg || "black",
        }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="w-3 h-3 bg-[white] rounded-sm"
            style={{ backgroundColor: themes[hovered || props.color][index] }}
          />
        ))}
      </div>

      {/* Colors */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: themes[color][4] }}
            className={`flex-fill w-5 h-5 rounded cursor-pointer hover:scale-[1.1] transition`}
            onClick={() => props.setColor(color)}
            onMouseEnter={() => setHovered(color)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </div>
    </>
  );
}
