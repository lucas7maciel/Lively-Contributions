"use client";

import AboutUs from "./aboutUs";
import Styles from "./styles";
import Stacks from "./stacks";
import Header from "./header";
import { Dashboard } from "./dashboard";
import { useRef, useState } from "react";

export default function Docs() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const page = useRef<HTMLDivElement | null>(null);
  const activator = useRef<SVGElement | null>(null);

  return (
    <div ref={page} id="page" className="bg-gray-50">
      <Header open={menuOpen} activator={activator} setOpen={setMenuOpen} />

      <div
        id="scroll"
        className={`relative mt-[4.5rem] w-full h-full ${
          menuOpen ? "lg-pl-[250px]" : "pl-0"
        } lg:pl-[250px] transition-[padding] overflow-y-auto`}
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
