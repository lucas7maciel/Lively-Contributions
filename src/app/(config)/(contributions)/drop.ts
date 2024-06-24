export function contribution(props: any) {
  return `
    <rect 
        class="contribution day_${props.day}"
        x="${props.x}" y="7"
        width="${props.size}" height="${props.size}"
        rx="2" 
        style="fill: ${props.color};"
    />
`;
}
