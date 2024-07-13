// Components
import Link from "next/link";
import Image from "next/image";
// Icons
import GithubIcon from "/public/stacks/github.svg";
import LogoIcon from '/public/logo.svg'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 pb-2">
      <Image
        className="cursor-pointer hover:opacity-70 hover:scale-125 transition duration-200 grayscale"
        src={LogoIcon}
        width={40}
        height={40}
        alt="Dark"
      />

      <Link
        href="https://github.com/lucas7maciel/lively-Contributions/"
        target="_blank"
      >
        <Image
          className="cursor-pointer hover:opacity-70 hover:scale-125 transition duration-200"
          src={GithubIcon}
          width={40}
          height={40}
          alt="Github"
        />
      </Link>
    </header>
  );
}
