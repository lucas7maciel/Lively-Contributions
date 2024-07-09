import Link from "next/link";

interface SectionItem {
  text: string;
  redir: string;
}

export function Dashboard() {
  const sections: SectionItem[] = [
    {
      text: "About Us",
      redir: "docs/#aboutUs",
    },
    {
      text: "Styles",
      redir: "docs/#styles",
    },
    {
      text: "Stacks",
      redir: "docs/#stacks",
    },
  ];

  const pages: SectionItem[] = [
    { text: "Home", redir: "/" },
    { text: "Maker", redir: "/maker" },
  ];

  return (
    <div className="flex flex-col items-strech gap-1 w-full h-full p-2 flex-1">
      <p className="font-bold text-3xl text-gray-800 text-center">Lively</p>
      <hr className="mt-2 mb-3 px-1" />

      <p className="mb-1 px-2 font-bold text-gray-400 text-xs">Sections</p>
      {sections.map((section, index) => (
        <Section key={index} text={section.text} redir={section.redir} />
      ))}

      <p className="mt-3 mb-1 px-2 font-bold text-gray-400 text-xs">Pages</p>
      {pages.map((section, index) => (
        <Section key={index} text={section.text} redir={section.redir} />
      ))}
    </div>
  );
}

function Section(props: SectionItem) {
  return (
    <Link
      className="font-semibold text-gray-500 hover:bg-gray-100 w-full py-2 px-2 rounded-lg cursor-pointer transition"
      href={props.redir}
      scroll={true}
    >
      {props.text}
    </Link>
  );
}
