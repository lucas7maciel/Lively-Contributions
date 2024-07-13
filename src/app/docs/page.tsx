"use client";

import AboutUs from "./aboutUs";
import Styles from "./styles";
import Stacks from "./stacks";
import Header from "./header";
import { Dashboard } from "./dashboard";
import { useRef, useState } from "react";

export default function Docs() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // 1024px = lg

  const page = useRef<HTMLDivElement | null>(null);
  const scrollable = useRef<HTMLDivElement | null>(null);
  const activator = useRef<SVGElement | null>(null);

  return (
    <div ref={page} className="h-screen overflow-y-hidden" id="page">
      <Header open={menuOpen} setOpen={setMenuOpen} activator={activator} />

      <div className="relative h-full overflow-hidden">
        <Dashboard
          open={menuOpen}
          setOpen={setMenuOpen}
          activator={activator}
          scrollable={scrollable}
        />

        <div
          ref={scrollable}
          className={`w-full h-full overflow-y-auto ${
            menuOpen ? "lg:pl-[250px]" : "lg:pl-0"
          } transition-[padding]`}
        >
          <div className="mt-6 mx-auto px-8 max-w-[90ch]">
            <AboutUs />
            <Styles />
            <Stacks />
          </div>
        </div>
      </div>
    </div>
  );
}
