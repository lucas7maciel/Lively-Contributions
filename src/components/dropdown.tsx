"use client";

import { ReactNode, useRef, useState } from "react";
import Image from "next/image";
import ExpandIcon from "/public/icons/down.svg";
import { useClickOutside } from "@/hooks/useClickOutside";

type SetValue = (val?: any) => any;

interface DropdownProps {
  items: DropdownItemProps[];
  value: string;
  setValue: SetValue;
}

export default function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const expand = useRef<HTMLImageElement | null>(null);
  const modal = useRef<HTMLDivElement | null>(null);

  useClickOutside([expand, modal], () => setOpen(false));

  return (
    <div className="relative">
      <Image
        ref={expand}
        src={ExpandIcon}
        className={`${open ? "rotate-180" : ""} transition cursor-pointer`}
        width={25}
        height={25}
        alt={open ? "Retract" : "Expand"}
        onClick={() => setOpen((val) => !val)}
      />

      {/* Modal */}
      <div
        ref={modal}
        className={`absolute top-[100%] z-10 py-2 bg-gray-100 rounded rounded-ss-sm scale-0 ${
          open ? "scale-100" : ""
        } transition origin-top-left`}
      >
        {props.items.map((item, index) => (
          <ModalItem
            key={index}
            text={item.text}
            value={item.value}
            icon={item.icon}
            setValue={props.setValue}
          />
        ))}
      </div>
    </div>
  );
}

export interface DropdownItemProps {
  setValue?: SetValue; // Fazer inheritance
  icon?: ReactNode;
  text: string;
  value: string;
}

function ModalItem(props: DropdownItemProps) {
  return (
    <div
      className="flex items-center gap-2 py-3 px-4 text-nowrap hover:bg-gray-200 cursor-pointer transition"
      onClick={() => {
        if (props.setValue) {
          props.setValue(props?.value);
        }
      }}
    >
      {props.icon && (
        <div className="h-4 w-4 flex items-center justify-center">
          {props.icon}
        </div>
      )}

      <p className="font-semibold text-gray-600">{props.text}</p>
    </div>
  );
}
