"use client";
// Types
import { AnimationsValue } from "@/models/animations.model";
// Components
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Selectors
import { PopUp } from "@/components/popup";
import {
  Icon as ColorIcon,
  Content as ColorContent,
} from "@/components/colorSelector";
import {
  Icon as DelayIcon,
  Content as DelayContent,
} from "@/components/delaySelector";
import {
  Icon as AnimIcon,
  Content as AnimContent,
} from "@/components/animSelector";
import { Icon as BgIcon, Content as BgContent } from "@/components/bgSelector";
// Icons
import NavigateBackIcon from "/public/logo.svg";
import CopyIcon from "/public/icons/copy.svg";
import InfoIcon from "/public/icons/info.svg";
import { useMessage } from "@/hooks/useMessage";

export default function Maker() {
  // Link props
  const [gitAcc, setGitAcc] = useState<string>("");
  const [anim, setAnim] = useState<AnimationsValue>("scale");
  const [color, setColor] = useState<string>("dark");
  const [bg, setBg] = useState<string>("dark");
  const [delay, setDelay] = useState<number>(0);

  const { popUp } = useMessage();

  const link = `https://lively-contributions-blush.vercel.app/${
    gitAcc || "_"
  }/${anim}/?bg=${bg.replace("#", "")}&color=${color}&delay=${delay}`;

  function copyLink() {
    navigator?.clipboard
      .writeText(link)
      .then(() => popUp("Link copied successfully!", 1.5))
      .catch(() => popUp("Failed to copy link", 1.5));
  }

  return (
    <div className="min-h-screen w-full pb-8 flex flex-col gap-5 items-center justify-between text-center bg-gray-50">
      {/* Header */}
      <header className="w-full flex items-center justify-between gap-4 text-center p-4 pb-2">
        <Link href="/">
          <Image
            className="cursor-pointer hover:opacity-70 hover:scale-125 transition duration-200 grayscale"
            src={NavigateBackIcon}
            width={40}
            height={40}
            alt="Home"
            title="Home"
          />
        </Link>

        <h1 className="flex-1 font-bold text-2xl leading-[40px] text-gray-900">Maker</h1>

        <Link href="/docs">
          <Image
            className="cursor-pointer hover:opacity-70 hover:scale-125 transition duration-200"
            src={InfoIcon}
            width={40}
            height={40}
            alt="How it works"
            title="How it works"
          />
        </Link>
      </header>

      {/* Set properties */}
      <div className="flex flex-col items-center justify-center">
        <div className="block">
          <div className="px-5 py-3 flex items-center gap-3 border rounded-lg bg-white">
            <input
              className="text-base outline-none text-black"
              type="text"
              placeholder="Github username"
              value={gitAcc}
              onChange={(e) => setGitAcc(e.target.value)}
            />

            <PopUp
              icon={<AnimIcon animation={anim} />}
              content={<AnimContent setValue={setAnim} />}
              closeOnChange={anim}
              expandSize={25}
              noPaddingModal
              transparent
              reverse
            />
          </div>
          <p className="mt-2 text-xs text-gray-400 font-semibold">
            You can search for any profile
          </p>
        </div>
      </div>

      {/* Props */}
      <div>
        <div className="flex flex-wrap gap-6 justify-center px-8">
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
      </div>

      {/* Link */}
      <div
        className={`mb-6 w-[90%] sm:w-[60%] max-w-[23rem] hover:max-w-[90%] sm:hover:max-w-[60%] transition-[max-width] duration-1000 cursor-pointer`}
      >
        <p className="mb-1 font-bold text-base text-gray-800">Link</p>

        <div
          className="flex gap-3 items-center p-2 border rounded-lg bg-white hover:bg-gray-100 transition duration-1000"
          onClick={() => copyLink()}
        >
          <p
            className="text-gray-700 hover:text-gray-600 flex-1 truncate"
            title={link}
          >
            {link}
          </p>
          <Image
            className="opacity-70 hover:opacity-60 transition"
            src={CopyIcon}
            width={20}
            height={20}
            alt="Copy Link"
            title="Copy Link"
          />
        </div>
        <p
          className="mt-2 text-xs text-gray-400 hover:text-gray-500 transition duration-300 font-semibold cursor-pointer"
          onClick={() => copyLink()}
        >
          Click to copy
        </p>
      </div>

      {/* Preview */}
      <div className="px-3">
        <p className="mb-2 font-bold text-xl text-gray-800">Preview</p>
        <Image
          className="p-1 border rounded cursor-pointer"
          src={link}
          width={720}
          height={102}
          alt="Generated graph preview"
          onClick={() => window.open(link)}
          unoptimized
        />
      </div>
    </div>
  );
}
