import { Card } from "./card";
import {
  PacmanIcon,
  DropIcon,
  ScaleIcon,
  ColorsIcon,
  RandomIcon,
  DelayIcon
} from "@/app/maker/animationIcons";
import styles from "./index.module.css";

export function Slide() {
  return (
    <div className="flex gap-6 overflow-x-hidden bg-gray-50" style={{}}>
      <Row />
      <Row />
    </div>
  );
}

function Row() {
  return (
    <div
      className={`${styles.slide} flex items-center justify-between gap-6 py-4 flex-1`}
    >
      <Card icon={<DelayIcon />} text="DELAY" />
      <Card icon={<ColorsIcon />} text="COLORS" />
      <Card icon={<PacmanIcon />} text="PACMAN" />
      <Card icon={<RandomIcon />} text="RANDOM" />
      <Card icon={<ScaleIcon />} text="SCALE" />
      <Card icon={<DropIcon />} text="DROP" />
    </div>
  );
}
