import Image from "next/image";

interface StackCardProps {
  iconUrl: any;
  title: string;
  text: string;
}

export function StackCard(props: StackCardProps) {
  return (
    <div className="min-w-32 p-4 text-center border rounded-lg shadow-md bg-white">
      <Image
        className="mx-auto"
        src={props.iconUrl}
        width={60}
        height={60}
        alt={props.title}
      />
      <p className="font-bold text-xl text-gray-700 mt-2">{props.title}</p>
      <p className="font-semibold text-gray-600 mt-1">
        {props.text}
      </p>
    </div>
  );
}
