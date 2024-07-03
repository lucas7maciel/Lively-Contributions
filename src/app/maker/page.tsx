"use client";
// Types
import { AnimationsValue } from "@/models/animations.model";
import { DropdownItemProps } from "@/components/dropdown";
// Components
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/dropdown";
import { PopUp } from "@/components/popup";
import {
  Icon as ColorIcon,
  Content as ColorContent,
} from "@/components/colorSelector";
import {
  Icon as DelayIcon,
  Content as DelayContent,
} from "@/components/delaySelector";
import { Icon as BgIcon, Content as BgContent } from "@/components/bgSelector";
// Icons
import NavigateBackIcon from "/public/icons/navigate-back.svg";
import CopyIcon from "/public/icons/copy.svg";
import { ScaleIcon, DropIcon, PacmanIcon, RandomIcon } from "./animationIcons";
import { useMessage } from "@/hooks/useMessage";

export default function Maker() {
  // Link props
  const [gitAcc, setGitAcc] = useState<string>("");
  const [anim, setAnim] = useState<AnimationsValue>("scale");
  const [color, setColor] = useState<string>("dark");
  const [bg, setBg] = useState<string>("dark");
  const [delay, setDelay] = useState<number>(0);

  const [imgLoaded, setImgLoaded] = useState<boolean>(true);

  const { popUp } = useMessage();

  const link = `https://lively-contributions-blush.vercel.app/${
    gitAcc || "_"
  }/${anim}/?bg=${bg.replace("#", "")}&color=${color}&delay=${delay}`;

  const animations: DropdownItemProps[] = [
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

  const icons: Record<AnimationsValue, any> = {
    drop: DropIcon,
    scale: ScaleIcon,
    pacman: PacmanIcon,
    random: RandomIcon,
  };
  const CurrIcon = icons[anim];

  function copyLink() {
    navigator?.clipboard
      .writeText(link)
      .then(() => popUp("Link copiado com sucesso!", 1.5))
      .catch(() => popUp("Falha ao copiar link", 1.5))
  }

  return (
    <div className="min-h-screen w-full pb-8 flex flex-col items-center justify-between text-center">
      {/* Header */}
      <header className="w-full flex items-center text-start p-5">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={NavigateBackIcon}
            width={40}
            height={40}
            alt="Navigate back"
          />
        </Link>
      </header>

      {/* Set properties */}
      <div className="flex flex-col items-center justify-center">
        <div className="block">
          <div className="px-5 py-3 flex items-center gap-3 border rounded-lg">
            <input
              className="text-base outline-none"
              type="text"
              placeholder="Github username"
              value={gitAcc}
              onChange={(e) => setGitAcc(e.target.value)}
            />

            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center w-4 h-4">
                <CurrIcon className="flex-fill" />
              </div>
              <Dropdown value={anim} setValue={setAnim} items={animations} />
            </div>
          </div>
        </div>
      </div>

      {/* Props */}
      <div className="flex flex-wrap gap-6 justify-center">
        <PopUp
          title="Color"
          icon={<ColorIcon color={color} />}
          content={<ColorContent color={color} setColor={setColor} bg={bg} />}
          closeOnChange={color}
        />

        <PopUp
          title="Background"
          icon={<BgIcon color={bg} />}
          content={<BgContent bg={bg} setBg={setBg} />}
        />

        <PopUp
          title="Delay"
          icon={<DelayIcon delay={delay} />}
          content={<DelayContent setDelay={setDelay} />}
          closeOnChange={delay}
        />
      </div>

      {/* Link */}
      <div className="mb-6 w-[15rem]">
        <p className="mb-1 font-semibold text-base">Link</p>
        <div className="flex gap-3 items-center p-2 border rounded-lg">
          <p className="flex-1 truncate">{link}</p>
          <Image
            className="cursor-pointer"
            onClick={() => copyLink()}
            src={CopyIcon}
            width={20}
            height={20}
            alt="Copy link"
            title="Copy link"
          />
        </div>
      </div>

      {/* Preview */}
      <div>
        <p className="mb-2 font-semibold text-xl">Preview</p>
        {imgLoaded ? (
          <Image
            className="p-1 border rounded cursor-pointer"
            src={link}
            width={720}
            height={102}
            alt="Generated graph preview"
            onClick={() => window.open(link)}
            // onError={() => {setImgLoaded(false)}
            onLoad={() => setImgLoaded(true)}
          />
        ) : (
          <p>Empty state</p>
        )}
      </div>
    </div>
  );
}
