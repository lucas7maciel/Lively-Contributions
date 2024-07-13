import { useClickOutside } from "@/hooks/useClickOutside";
import Link from "next/link";
import { useRef } from "react";

interface DashboardProps {
  open: boolean;
  activator: any;
  scrollable: any;
  setOpen: (val: boolean) => void;
}

export function Dashboard(props: DashboardProps) {
  const modal = useRef<HTMLDivElement | null>(null);

  const sections: SectionItem[] = [
    {
      text: "About Us",
      redir: "#aboutUs",
    },
    {
      text: "Styles",
      redir: "#styles",
    },
    {
      text: "Stacks",
      redir: "#stacks",
    },
  ];

  const pages: SectionItem[] = [
    { text: "Home", redir: "/" },
    { text: "Maker", redir: "/maker" },
  ];

  useClickOutside([modal, props.activator], () => props.setOpen(false));

  return (
    <div
      className={`absolute top-0 left-0 border-r shadow-lg ${
        !props.open ? "left-[-255px]" : ""
      } transition-[left] w-[250px] max-w-full h-full flex flex-col items-strech gap-1 p-6 flex-1 bg-white`}
      ref={modal}
    >
      <p className="mb-1 px-2 font-bold text-gray-400 text-xs">Sections</p>
      {sections.map((section, index) => (
        <Section
          key={index}
          text={section.text}
          redir={section.redir}
          setOpen={props.setOpen}
          scrollable={props.scrollable}
        />
      ))}

      <p className="mt-3 mb-1 px-2 font-bold text-gray-400 text-xs">Pages</p>
      {pages.map((section, index) => (
        <Section key={index} text={section.text} redir={section.redir} />
      ))}
    </div>
  );
}

interface SectionItem {
  text: string;
  redir: string;
  scrollable?: any;
  setOpen?: (val: boolean) => void;
}

function Section(props: SectionItem) {
  // Arrumar essa gambiarra dps
  function scrollInto() {
    const el = document.querySelector(props.redir)

    if (!el) {
      return
    }

    const {top} = el.getBoundingClientRect()

    props.scrollable.current.scroll(0, top, {behavior: 'smooth'})
  }

  return !props.scrollable ? (
    <Link
      className="font-semibold text-gray-500 hover:bg-gray-100 w-full py-2 px-2 rounded-lg cursor-pointer transition"
      href={props.redir}
    >
      {props.text}
    </Link>
  ) : (
    <div
      className="font-semibold text-gray-500 hover:bg-gray-100 w-full py-2 px-2 rounded-lg cursor-pointer transition"
      onClick={() => scrollInto()}
    >
      {props.text}
    </div>
  );
}
