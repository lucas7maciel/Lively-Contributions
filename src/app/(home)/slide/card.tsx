import { ReactNode } from "react";
import styles from "./index.module.css";

interface CardProps {
  icon: ReactNode;
  text: string;
}

export function Card(props: CardProps) {
  const delay = Math.floor(Math.random() * 19);

  return (
    <div
      className={`
        flex-[0_0_250px] w-[250px] h-[300px] text-center rounded-2xl 
        shadow-md border flex flex-col items-center justify-center gap-3
      bg-gray-700 hover:bg-gray-600 hover:translate-y-[-1rem] transition duration-500 ${styles.card}
      `}
      style={{ animationDelay: delay / 10 + "s" }}
    >
      <div className="h-3/4">{props.icon}</div>
      <p className="font-bold text-gray-50 text-2xl">{props.text}</p>
    </div>
  );
}
