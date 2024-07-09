// Components
import Link from "next/link";
import Header from "./header";
import ContributionsBg from "./contributionsBg";

export default function Home() {
  return (
    <div className="relative pa-4 min-h-screen w-full flex flex-col justify-center text-center overflow-hidden">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center text-center pb-20">
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

        <p className="font-bold text-red-500 text-center absolute bottom-5 left-1/2 translate-x-[-50%] px-2 py-1 bg-white rounded-xl">
          Under development
        </p>
      </div>
    </div>
  );
}
