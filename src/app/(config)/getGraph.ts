// Config
import { defaultConfig as cfg, bg, colors, animations } from "./themes";
// Types
import { AnimationsValue } from "@/models/animations.model";

export function getGraph(weeks: any, config: any) {
  // Set animation props

  let animation;

  // Ajeitar essa bagaceira
  if (config.animation === "random" || !config.animation) {
    const anims = Object.keys(animations);
    config.animation = anims[Math.floor(Math.random() * (anims.length - 1))];
  }

  // Ajeitar essa outra bagaceira
  animation =
    animations[config.animation as AnimationsValue] || animations.pacman;

  // Set themes
  const bgColor: string = bg[config.bg] || config.bg || "";
  const color: string[] = colors[config.color || config.bg] || colors.light;

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
        role="img"
        aria-labelledby="descId"
      >
        <rect 
          x="0" y="0"
          width="700"
          height="102"
          style="fill: ${bgColor !== "none" ? "#" : ""}${bgColor};"
          rx="5"
        />
        ${contributions}

        ${weeks.length && animation.animation(weeks)}
        ${
          weeks.length ||
          `
          <defs>
            <style type="text/css">@import url('https://fonts.googleapis.com/css?family=Nunito');</style>
          </defs>

         <text 
          x="50%" y="45%" 
          text-anchor="middle"
          dominant-baseline="middle" 
           
          style="font-family: 'Nunito'"
          fill="${color[1]}" 
          font-size="25"
          >THIS USER DOES NOT EXIST
         </text>

         <text
          x="50%" y="70%" 
          text-anchor="middle"
          dominant-baseline="middle" 

          style="font-family: 'Nunito'"
          fill="${color[1]}"
          font-size="15"
          > Check for correct spelling
         </text>
        `
        }
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
