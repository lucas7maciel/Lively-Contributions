// Hooks
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
// Components
import Image from "next/image";
// Types
import { ReactNode } from "react";
// Icons
import ExpandIcon from "/public/icons/down.svg";

interface PopUpProps {
  title?: string;
  icon: ReactNode;
  content: ReactNode;
}

export function PopUp(props: PopUpProps) {
  const [open, setOpen] = useState<boolean>(false);
  const expand = useRef<HTMLImageElement | null>(null);
  const modal = useRef<HTMLDivElement | null>(null);

  useClickOutside([expand, modal], () => setOpen(false));

  return (
    <div>
      {props.title && <p className="text-start">{props.title}</p>}

      {/* Selector */}
      <div className="relative flex items-center gap-3 px-4 py-2 bg-gray-200 rounded-md">
        <Image
          ref={expand}
          className={`cursor-pointer ${open ? "rotate-180" : ""} transition`}
          src={ExpandIcon}
          width={30}
          height={30}
          alt="Expand"
          onClick={() => setOpen((val) => !val)}
        />

        {props.icon}

        {/* Modal */}
        <div
          ref={modal}
          className={`absolute top-[105%] left-0 z-10 px-4 py-2 bg-gray-200 rounded rounded-ss-sm origin-top-left scale-0 ${
            open ? "scale-100" : ""
          } transition-[transform]`}
        >
          {props.content}
        </div>
      </div>
    </div>
  );
}
