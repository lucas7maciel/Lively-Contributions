export function contribution(props: any) {
  // Dar uma organizada aqui
  const animDelay =
    props.day % 2 == 0
      ? (10 / props.weeks) * (props.week - 1) + props.day * 10.5 // Moving right
      : (10 / props.weeks) * (props.weeks - props.week) + props.day * 10.5; // Moving left

  return `
    <rect
      class="contribution"
      x="${props.x}" y="${props.y}"
      width="${props.size}"
      height="${props.size}"
  
      transform-origin="${props.transformX} ${props.transformY}"
      rx="10"
  
      style="
        animation-delay: ${animDelay + (parseFloat(props.delay) || 0)}s;
        fill: ${props.color};
      "
    />
    `;
}
