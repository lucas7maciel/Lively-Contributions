import { MenuIcon } from "@/components/icons/menu";
import Image from "next/image";
import GithubIcon from "/public/stacks/github.svg";
import LogoIcon from "/public/logo.svg";
import Link from "next/link";

interface HeaderProps {
  open: boolean;
  activator: any;
  setOpen: (val: (val: boolean) => boolean) => void;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-30 w-full py-5 px-7 bg-gray-100 flex items-center justify-between shadow-md select-none">
      {/* Ver bug do condicional */}
      <div className="lg:hidden">
        <MenuIcon
          open={props.open}
          height={25}
          setOpen={() => props.setOpen((open) => !open)}
          activator={props.activator}
        />
      </div>
      <Link className="hidden lg:block" href="/">
        <Image
          className="cursor-pointer hover:opacity-70 hover:scale-110 transition duration-200 grayscale"
          src={LogoIcon}
          width={30}
          height={30}
          alt="Logo"
        />
      </Link>

      <p className="text-gray-600 font-bold text-2xl px-3">
        Lively
        <span className="text-gray-400 text-lg font-semibold pl-2">Docs</span>
      </p>

      <Link
        href="https://github.com/lucas7maciel/lively-Contributions/"
        target="_blank"
      >
        <Image
          className="cursor-pointer hover:opacity-70 hover:scale-110 transition duration-200"
          src={GithubIcon}
          width={30}
          height={30}
          alt="Repo"
        />
      </Link>
    </header>
  );
}
