"use client";

import AboutUs from "./aboutUs";
import Styles from "./styles";
import Stacks from "./stacks";
import Header from "./header";
import { Dashboard } from "./dashboard";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Docs() {
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const [menuOpen, setMenuOpen] = useState<boolean>(isLarge); // 1024px = lg

  const page = useRef<HTMLDivElement | null>(null);
  const activator = useRef<SVGElement | null>(null);

  return (
    <div ref={page} id="page" className="bg-gray-50">
      <Header open={menuOpen} activator={activator} setOpen={setMenuOpen} />

      <div
        id="scroll"
        className={`relative mt-[4.5rem] w-full h-full ${
          menuOpen ? "lg:pl-[250px]" : "lg:pl-0"
        } transition-[padding] overflow-y-auto`}
      >
        <Dashboard
          open={menuOpen}
          activator={activator}
          setOpen={setMenuOpen}
        />

        <div className="mt-6 mx-auto px-8 max-w-[90ch]">
          <AboutUs />
          <Styles />
          <Stacks />
        </div>
      </div>
    </div>
  );
}
