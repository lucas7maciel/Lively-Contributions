import { useClickOutside } from "@/hooks/useClickOutside";
import { remToPixels } from "@/utils/font";
import Link from "next/link";
import { useRef } from "react";

interface DashboardProps {
  open: boolean;
  activator: any;
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
      className={`fixed top-0 border-r shadow-lg ${
        !props.open ? "left-[-255px]" : "left-0"
      } lg:left-0 transition-[left] w-[250px] max-w-full h-full flex flex-col items-strech gap-1 p-6 pt-[6rem] flex-1 bg-gray-50 overflow-y-auto`}
      ref={modal}
    >
      <p className="mb-1 px-2 font-bold text-gray-400 text-xs">Sections</p>
      {sections.map((section, index) => (
        <Section
          key={index}
          text={section.text}
          redir={section.redir}
          setOpen={props.setOpen}
          scroll
        />
      ))}

      <p className="mt-3 mb-1 px-2 font-bold text-gray-400 text-xs">Pages</p>
      {pages.map((section, index) => (
        <Section
          key={index}
          text={section.text}
          redir={section.redir}
          setOpen={props.setOpen}
        />
      ))}
    </div>
  );
}

interface SectionItem {
  text: string;
  redir: string;
  setOpen?: (val: boolean) => void;
  scroll?: boolean;
}

function Section(props: SectionItem) {
  const styles =
    "font-semibold text-gray-500 hover:bg-gray-100 w-full py-2 px-2 rounded-lg cursor-pointer transition";

  return !props.scroll ? (
    <Link className={styles} href={props.redir}>
      {props.text}
    </Link>
  ) : (
    <div
      className={styles}
      onClick={() => {
        if (props.setOpen) {
          props.setOpen(false);
        }

        const el = document.querySelector(props.redir);

        if (!el) {
          return;
        }

        const { top } = el.getBoundingClientRect();
        const padding = remToPixels(5);

        window.scrollTo({
          top: window.scrollY + top - padding,
          behavior: "smooth",
        });
      }}
    >
      {props.text}
    </div>
  );
}
