
export type AnimationValues = 'scale'

export interface AnimationProps {
    keyframes: string;
    class: string;
    duration: number;
    delay: (x: number, y: number) => number
}