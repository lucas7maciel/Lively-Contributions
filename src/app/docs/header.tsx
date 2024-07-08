import Link from "next/link";
import Image from "next/image";
import BackIcon from "/public/icons/navigate-back.svg";

export default function Header() {
  return (
    <header className="p-8 bg-gray-100 flex items-center">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-1">
          <Link href="/">
            <Image
              className="opacity-60 hover:opacity-40 cursor-pointer transition duration-500"
              src={BackIcon}
              width={20}
              height={20}
              alt="Back"
            />
          </Link>
          <p className="font-semibold text-gray-400 leading-none">Docs</p>
        </div>

        <h1 className="font-bold text-5xl">Lively Contributions</h1>
        <p className="text-gray-400 font-bold mt-1">
          Find all the necessary information about the project
        </p>
      </div>
      {/* <div><Link className="button rounded-none" href="/maker">Make your graph!</Link></div> */}
    </header>
  );
}
