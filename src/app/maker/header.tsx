import Link from "next/link";
import Image from "next/image";
import NavigateBackIcon from "/public/logo.svg";
import GithubIcon from "/public/stacks/github.svg";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between gap-4 text-center p-4 pb-2">
      <Link href="/">
        <Image
          className="cursor-pointer hover:opacity-70 hover:scale-125 transition duration-200 grayscale"
          src={NavigateBackIcon}
          width={40}
          height={40}
          alt="Home"
          title="Home"
        />
      </Link>

      <h1 className="flex-1 font-bold text-2xl leading-[40px] text-gray-900">
        Maker
      </h1>

      <Link
        href="https://github.com/lucas7maciel/lively-Contributions/"
        target="_blank"
      >
        <Image
          className="cursor-pointer hover:opacity-70 hover:scale-125 transition duration-200"
          src={GithubIcon}
          width={40}
          height={40}
          alt="Docs"
          title="Docs"
        />
      </Link>
    </header>
  );
}
