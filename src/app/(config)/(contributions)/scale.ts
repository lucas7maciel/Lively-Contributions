export function contribution(props: any) {
  const initTime: number = props.day / 15 + props.week / 50;
  // Tirar o parse float na tipagem

  return `
    <rect
      class="contribution"
      x="${props.x}" y="${props.y}"
      width="${props.size}"
      height="${props.size}"
  
      transform-origin="${props.x} ${props.y}"
      rx="${props.rx}"
  
      style="
        animation: scale 0.4s ease-in both ${initTime + (parseFloat(props.delay) || 0)}s;
        fill: ${props.color};
      "
    />
    `;
}
