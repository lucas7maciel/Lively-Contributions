// Hooks
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
// Components
import Image from "next/image";
// Types
import { ReactNode } from "react";
// Icons
import ExpandIcon from "/public/icons/down.svg";

interface PopUpProps {
  icon: ReactNode;
  content: ReactNode;
  title?: string;
  closeOnChange?: any;
  expandSize?: number;
  reverse?: boolean;
  transparent?: boolean;
  noPaddingExpand?: boolean;
  noPaddingModal?: boolean;
}

export function PopUp(props: PopUpProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [dir, setDir] = useState<{
    x: "left" | "center" | "right";
    y: "top" | "mid" | "bottom";
  }>({
    x: "right",
    y: "bottom",
  });

  const expand = useRef<HTMLImageElement | null>(null);
  const modal = useRef<HTMLDivElement | null>(null);

  const dirStyles = {
    // X pos
    left: "right-0",
    center: "left-[50%] translate-x-[-50%]",
    right: "left-0",
    // Y Pos
    top: "bottom-[105%]",
    mid: "top-[50%] translate-y-[-50%]",
    bottom: "top-[105%]",
    // General pos
    bottomright: "origin-top-left rounded-ss-sm",
    bottomcenter: "origin-[50%_0%]",
    bottomleft: "origin-top-right rounded-se-sm",
    midright: "origin-[0%_50%]",
    midcenter: "origin-center",
    midleft: "origin-[100%_50%]",
    topright: "origin-bottom-left rounded-es-sm",
    topcenter: "origin-[50%_100%]",
    topleft: "origin-bottom-right rounded-ee-sm",
  };

  function handleDir() {
    const modalMeasures = expand.current?.getBoundingClientRect();

    if (!modalMeasures) {
      setDir({ x: "right", y: "bottom" });
      return true;
    }

    const { x, y } = modalMeasures;
    const { clientWidth, clientHeight } = document.documentElement;

    let xDir: "left" | "center" | "right";
    let yDir: "top" | "mid" | "bottom";

    // Otimizar
    if (x >= clientWidth / 1.5) {
      xDir = "left";
    } else if (x >= clientWidth / 3 && clientWidth) {
      xDir = "center";
    } else {
      xDir = "right";
    }

    if (y >= clientHeight / 1.5) {
      yDir = "top";
    } else if (x >= clientHeight / 3 && clientHeight < 455) {
      yDir = "mid";
    } else {
      yDir = "bottom";
    }

    setDir({ x: xDir, y: yDir });
  }

  function handleModal(open: boolean): boolean {
    if (open) {
      return false;
    }

    handleDir();
    return true;
  }

  useClickOutside([expand, modal], () => setOpen(false));

  useEffect(() => {
    handleDir();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [props.closeOnChange]);

  return (
    <div>
      {props.title && <p className="text-start">{props.title}</p>}

      {/* Selector */}
      <div
        className={`relative flex items-center gap-3 rounded-md cursor-pointer ${
          props.reverse ? "flex-row-reverse" : ""
        } ${!props.transparent ? "bg-gray-100 hover:bg-gray-200 transition" : ""} ${
          !props.noPaddingModal ? "px-4 py-2" : ""
        }`}
      >
        <Image
          ref={expand}
          className={`cursor-pointer ${open ? "rotate-180" : ""} hover:scale-110 transition duration-300`}
          src={ExpandIcon}
          width={props.expandSize || 30}
          height={props.expandSize || 30}
          alt={open ? "Retract" : "Expand"}
          onClick={() => setOpen(handleModal)}
        />

        {props.icon}

        {/* Modal */}
        <div
          ref={modal}
          className={`absolute z-10 bg-gray-100 rounded transition-[transform] duration-300 scale-0 ${
            open ? "scale-100" : ""
          } ${!props.noPaddingModal ? "px-4 py-2" : ""} ${dirStyles[dir.x]} ${
            dirStyles[dir.y]
          } ${dirStyles[`${dir.y}${dir.x}`]}`}
        >
          {props.content}
        </div>
      </div>
    </div>
  );
}
