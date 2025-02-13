// Styles
import { ReactNode } from "react";
import animations from "./animationsIcons.module.css";

export function ScaleIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      role="img"
      aria-labelledby="descId"
    >
      <rect
        className={animations.scale}
        x={0}
        y={0}
        width={10}
        height={10}
        rx={2}
        style={{ backgroundColor: "green" }}
      />
    </svg>
  );
}

export function DropIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      role="img"
      aria-labelledby="descId"
    >
      <rect
        className={animations.drop}
        x={0}
        y={0}
        width={10}
        height={10}
        // transformOrigin="5 5"
        rx={2}
        style={{ backgroundColor: "green" }}
      />
    </svg>
  );
}

export function PacmanIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      role="img"
      aria-labelledby="descId"
    >
      <circle className={animations.pacman} cx="9" cy="9" r="3.75" />
    </svg>
  );
}

export function RandomIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        className={animations.random}
        d="M16.07 4.92998C15.2658 4.12416 14.2405 3.57519 13.124 3.35264C12.0076 3.13009 10.8501 3.24397 9.79845 3.67986C8.74676 4.11574 7.84812 4.85401 7.21641 5.80112C6.58471 6.74823 6.24837 7.86154 6.25001 8.99998C6.25001 9.1989 6.32902 9.38966 6.46968 9.53031C6.61033 9.67097 6.80109 9.74998 7.00001 9.74998C7.19892 9.74998 7.38968 9.67097 7.53034 9.53031C7.67099 9.38966 7.75001 9.1989 7.75001 8.99998C7.74803 8.15659 7.99644 7.33158 8.46378 6.6295C8.93111 5.92742 9.59633 5.37985 10.3752 5.05618C11.154 4.73251 12.0113 4.64731 12.8386 4.81136C13.6659 4.97542 14.4259 5.38135 15.0223 5.97772C15.6186 6.57409 16.0246 7.33407 16.1886 8.16136C16.3527 8.98865 16.2675 9.84602 15.9438 10.6248C15.6201 11.4037 15.0726 12.0689 14.3705 12.5362C13.6684 13.0035 12.8434 13.252 12 13.25C11.8019 13.2526 11.6126 13.3324 11.4725 13.4725C11.3324 13.6126 11.2526 13.8019 11.25 14V16C11.25 16.1989 11.329 16.3897 11.4697 16.5303C11.6103 16.671 11.8011 16.75 12 16.75C12.1989 16.75 12.3897 16.671 12.5303 16.5303C12.671 16.3897 12.75 16.1989 12.75 16V14.7C13.813 14.5576 14.8152 14.1212 15.6436 13.44C16.472 12.7587 17.0938 11.8598 17.4389 10.8442C17.784 9.82874 17.8387 8.73706 17.5968 7.69214C17.355 6.64723 16.8262 5.6906 16.07 4.92998Z"
        fill="#000000"
      />
      <path
        className={animations.random}
        d="M12 20.75C12.6904 20.75 13.25 20.1904 13.25 19.5C13.25 18.8096 12.6904 18.25 12 18.25C11.3096 18.25 10.75 18.8096 10.75 19.5C10.75 20.1904 11.3096 20.75 12 20.75Z"
        fill="#000000"
      />
    </svg>
  );
}

export function ColorsIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      role="img"
      aria-labelledby="descId"
    >
      <circle className={animations.colors} r="8" cx="9" cy="9" fill="red" />
    </svg>
  );
}

export function DelayIcon(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 18V12H6"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
