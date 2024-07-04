// Components
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative pa-4 min-h-screen w-full flex items-center flex-col justify-center text-center overflow-hidden">
      <h1 className="text-6xl text-black">Lively</h1>
      <h2 className="mt-2 text-2xl text-black">
        Your progress. <span className="font-bold">Your Way.</span>
      </h2>

      <div className="flex flex-col items-center justify-center gap-3 mt-5">
        <Link href="maker" className="button w-[8.5rem]">
          CREATE
        </Link>
        <Link href="docs" className="font-bold text-black">
          DOCS
        </Link>
      </div>

      {/* <ContributionsBg /> */}

      {/* <Image
        className="absolute bottom-4 left-[50%] translate-x-[-50%] opacity-80 cursor-pointer"
        src={DownIcon}
        width={25}
        height={25}
        alt="Scroll down"
      /> */}
    </div>
  );
}
