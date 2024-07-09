export default function ContributionsBg() {
  const weeks: number[][] = Array(52).fill(Array(6).fill(1));

  return (
    <div
      className="absolute bottom-0 left-0 w-full h-20"
      style={{
        background:
          "linear-gradient(to top, transparent, white), conic-gradient(from 90deg at 2px 2px, #216e39 90deg,#0000 0) -20px -20px/25px 25px;",
        borderRadius: "6px",
      }}
    ></div>
  );
}
