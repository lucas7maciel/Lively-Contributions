# Custom graphs for yout Git contributions!

This is a new version of my old NestJS project. Now made in NextJS, Lively Contributions generate the graphs on Server Side, making possible to use the generated SVG's in your Github profile or personal websites

# Stylying
## Animations
### Pacman
![Pacman graph](https://lively-contributions-blush.vercel.app/lucas7maciel/pacman?bg=dark&color=dark)
### Drop
![Drop graph](https://lively-contributions-blush.vercel.app/lucas7maciel/drop?bg=dark&color=dark&delay=5)
### Scale
![Scale graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=dark&color=dark&delay=5)

_You can also set animation as 'random' (default)_

## Colors
Choose the color pallete of contribution squares
### Dark (Default)
![Dark color graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=dark&color=dark)
### Light
![Light color graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=dark&color=light)
### Yellow
![Yellow color graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=dark&color=yellow)
### Blue
![Blue color graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=dark&color=blue)
### Red
![Red color graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=dark&color=red)
### Purple
![Purple color graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=dark&color=purple)

## Background color
### Dark (Default)
![Dark background graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=dark&color=dark)
### Light
![Light background graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=light&color=light)
### Any custom color (808080, purple)
![#808080 background graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=808080&color=dark)
![Purple background graph](https://lively-contributions-blush.vercel.app/lucas7maciel/scale?bg=purple&color=dark)

### Other props
- Delay: number;
...

# Soon coming
- Users' stats;
- Graph maker page;
- Documentation page;
- New props (repeat, contributions count...);
- New animations;
- Error handling;

# How to run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.