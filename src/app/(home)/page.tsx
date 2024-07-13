// Components
import Link from "next/link";
import Header from "./header";
import { Slide } from "./slide";

export default function Home() {
  return (
    <>
    <div className="relative pa-4 min-h-[80vh] w-full flex flex-col justify-center text-center overflow-hidden bg-gray-50">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center text-center ">
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
      </div>
    </div>
    <Slide />
    <div className="text-center py-12">
      <p className="font-bold text-2xl text-gray-900">Stats Page</p>
      <p className="font-bold text-red-500 text-xl mb-1">Under development...</p>
    </div>
    </>
  );
}
