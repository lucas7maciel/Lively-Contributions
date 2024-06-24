// Config
import { defaultConfig as cfg, bg, colors, animations } from "./themes";
// Types
import { AnimationProps } from "../../../models/animation.model";

export function getGraph(weeks: any, config: any) {
  // Set animation props

  let animation;

  // Ajeitar essa bagaceira
  if (config.animation === "random") {
    config.animation = ["pacman", "scale"][Math.floor(Math.random() * 2)];
  }

  // Ajeitar essa outra bagaceira
  animation =
    animations[
      (config.animation as "pacman" | "scale" | "drop" | undefined) || "scale"
    ] || animations.pacman;

  // Set themes
  const color: string[] = colors[config.color] || colors.light;
  const bgColor: string = bg[config.bg] || config.bg || "";

  // Set info
  config.weeks = weeks.length;
  config.size = cfg.size;
  config.rx = cfg.rx;

  // Set contribution rects (week defines X Axis)
  const contributions: string[] = weeks.map((week: any, weekIndex: number) =>
    // Day defines Y Axis
    week.contributionDays.map((day: any) => {
      const level: number = getLevel(day.contributionCount);

      config.day = day.weekday;
      config.week = weekIndex + 1;

      config.x = cfg.padding + weekIndex * (cfg.size + cfg.margin);
      config.y = cfg.padding + day.weekday * (cfg.size + cfg.margin);

      config.transformX = config.x + cfg.size / 2;
      config.transformY = config.y + cfg.size / 2;

      config.color = color[level];

      return animation.contribution(config);
    })
  );

  return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="102"
        viewBox="0 0 700 102"
        style="background-color: ${bgColor};"
        role="img"
        aria-labelledby="descId"
      >
        ${contributions}

        ${animation.animation(weeks)}
      </svg>`;
}

function getLevel(val: number): number {
  if (val >= 10) {
    return 4;
  }
  if (val >= 7) {
    return 3;
  }
  if (val >= 4) {
    return 2;
  }
  if (val >= 1) {
    return 1;
  }
  return 0;
}
