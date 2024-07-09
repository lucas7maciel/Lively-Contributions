
export default function Header() {
  return (
    <header className="py-5 px-7 bg-gray-50 flex items-center shadow-md">
      <div className="flex-1">
        <h1 className="font-bold text-3xl">Docs</h1>
        <p className="text-gray-500 font-bold mt-1">
          Find all the necessary information about the project
        </p>
      </div>
      {/* <div><Link className="button rounded-none" href="/maker">Make your graph!</Link></div> */}
    </header>
  );
}
