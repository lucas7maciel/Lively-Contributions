import { MenuIcon } from "@/components/icons/menu";

interface HeaderProps {
  open: boolean;
  activator: any;
  setOpen: (val: (val: boolean) => boolean) => void;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-30 w-full py-5 px-7 bg-gray-100 flex items-center shadow-md select-none">
      <div className="flex-1 flex items-center gap-3">
        <MenuIcon
          open={props.open}
          height={25}
          setOpen={() =>
            props.setOpen((open) => {
              return !open;
            })
          }
          activator={props.activator}
        />

        <p className="text-gray-600 font-bold text-2xl">
          Lively
          <span className="text-gray-400 text-lg font-semibold pl-2">Docs</span>
        </p>
      </div>
      {/* <div><Link className="button rounded-none" href="/maker">Make your graph!</Link></div> */}
    </header>
  );
}
