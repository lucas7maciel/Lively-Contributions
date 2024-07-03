import { AnimationsValue } from "@/models/animations.model";
import {
  DropIcon,
  PacmanIcon,
  RandomIcon,
  ScaleIcon,
} from "@/app/maker/animationIcons";
import { ReactNode } from "react";

interface IconProps {
  animation: AnimationsValue;
}

export function Icon(props: IconProps) {
  const icons: Record<AnimationsValue, any> = {
    drop: DropIcon,
    scale: ScaleIcon,
    pacman: PacmanIcon,
    random: RandomIcon,
  };

  const CurrIcon = icons[props.animation];

  return (
    <div className="flex items-center justify-center w-4 h-4">
      <CurrIcon className="flex-fill" />
    </div>
  );
}

interface ContentProps {
  setValue: (val: any) => void;
}

export function Content(props: ContentProps) {
  const animations = [
    {
      text: "Pacman",
      value: "pacman",
      icon: PacmanIcon(),
    },
    {
      text: "Drop",
      value: "drop",
      icon: DropIcon(),
    },
    {
      text: "Scale",
      value: "scale",
      icon: ScaleIcon(),
    },
    {
      text: "Random",
      value: "random",
      icon: RandomIcon(),
    },
  ];

  return (
    <div className="py-2">
      {animations.map((anim, index) => (
        <AnimOption
          key={index}
          icon={anim.icon}
          text={anim.text}
          setValue={() => props.setValue(anim.value)}
        />
      ))}
    </div>
  );
}

interface AnimOptionProps {
  icon: ReactNode;
  text: string;
  setValue: () => void;
}

function AnimOption(props: AnimOptionProps) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-3 text-nowrap hover:bg-gray-200 cursor-pointer transition"
      onClick={() => props.setValue()}
    >
      <div className="h-4 w-4 flex items-center justify-center">
        {props.icon}
      </div>

      <p className="font-semibold text-gray-600">{props.text}</p>
    </div>
  );
}
