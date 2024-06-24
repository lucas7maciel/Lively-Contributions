// Scale
import { animation as scaleAnim } from "./(animations)/scale";
import { contribution as scaleCont } from "./(contributions)/scale";
// Drop
import { animation as dropAnim } from "./(animations)/drop";
import { contribution as dropCont } from "./(contributions)/drop";
// Pacman
import { animation as pacAnim } from "./(animations)/pacman";
import { contribution as pacCont } from "./(contributions)/pacman";

// Available pre defined colors, bg colors and other properties
export const bg: Record<string, string> = {
  dark: "#0d1117",
  light: "#ffffff",
};

export const colors: Record<string, string[]> = {
  // Default
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  yellow: ["#4d4a00", "#806e00", "#b3a300", "#e5c100", "#ffd700"],
  blue: ["#bfcfff", "#80c0ff", "#809fff", "#0040ff", "#002db3"],
  red: ["#ff9999", "#ff6666", "#ff3333", "#ff0000", "#cc0000"],
  purple: ["#f0f0ff", "#d9d9ff", "#b3a1ff", "#a366ff", "#7f37f0"],
};

// Default settings
export const defaultConfig = {
  size: 10,
  rx: 2,
  padding: 7,
  margin: 3,
  delay: 0,
};

// Animations props
export type AnimationsValue = 'scale' | 'drop' | 'pacman'

interface AnimationsProps {
  animation: (weeks: any) => string;
  contribution: (props: any) => string
}

export const animations: Record<AnimationsValue, AnimationsProps>  = {
  scale: {
    animation: scaleAnim,
    contribution: scaleCont,
  },
  drop: {
    animation: dropAnim,
    contribution: dropCont,
  },
  pacman: {
    animation: pacAnim,
    contribution: pacCont,
  },
};
