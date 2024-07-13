import styles from "./index.module.css"

interface MenuIconProps {
  height: number;
  open: boolean;
  setOpen: () => void;
  activator: any;
}

export function MenuIcon(props: MenuIconProps) {
  const width = props.height * 1.5

  return (
    <svg
      id="hamburger"
      ref={props.activator}
      className={`cursor-pointer hover:opacity-60 transition ${styles.menu} ${props.open ? styles.retract : ''}`}
      width={width + 'px'}
      height={props.height + 'px'}
      viewBox="0 0 60 40"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.setOpen}
    >
      <g
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className={styles.top_line} d="M10,10 L50,10 Z"></path>
        <path className={styles.mid_line} d="M10,20 L50,20 Z"></path>
        <path className={styles.bottom_line} d="M10,30 L50,30 Z"></path>
      </g>
    </svg>
  );
}
