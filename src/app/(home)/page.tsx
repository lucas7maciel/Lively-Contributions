import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center flex-col justify-center text-center">
      <h1 className="font-bold text-4xl">Lively Contributions</h1>
      <h2 className="mt-1 text-2xl">
        Generate custom charts for your git contributions
      </h2>

      <Link href="maker" className="button mt-5">
        CREATE
      </Link>
      <Link href="docs" className="mt-2 font-bold cursor-pointer">
        DOCS
      </Link>

      <p className="absolute bottom-4 left-[50%] translate-x-[-50%] font-extrabold text-center text-red-600">Under development</p>
    </div>
  );
}
