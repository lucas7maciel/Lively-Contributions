interface IconProps {
  delay: number;
}

export function Icon(props: IconProps) {
  return (
    <div className="text-center w-[3.5ch]">
      <p className="font-bold text-gray-800">{props.delay}s</p>
    </div>
  );
}

interface ContentProps {
  setDelay: (delay: number) => void;
}

export function Content(props: ContentProps) {
  const values = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  return (
    <div className="flex flex-wrap justify-center gap-2 min-w-[10rem]">
      {values.map((val) => (
        <span
          key={val}
          className="text-xs w-[2rem] py-1 px-2 font-bold text-gray-500 bg-gray-300 hover:bg-gray-400 hover:scale-[1.1] rounded cursor-pointer transition"
          onClick={() => props.setDelay(val)}
        >
          {val}
        </span>
      ))}
    </div>
  );
}
