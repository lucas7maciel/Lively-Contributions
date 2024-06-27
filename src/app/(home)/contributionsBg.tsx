export default function ContributionsBg() {
  const weeks: number[][] = Array(52).fill(Array(6).fill(1));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="700"
      height="102"
      viewBox="0 0 700 102"
      className="absolute left-[-5%] top-[85%] w-[105%] min-h-[15%] border"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
        backdropFilter: "blur(5px)",
      }}
    >
      {weeks.map((days, weekIndex) =>
        days.map((_, dayIndex) => (
          <rect
            key={weekIndex * 6 + dayIndex}
            x={weekIndex * 13 + 3}
            y={dayIndex * 13 + 3}
            width={10}
            height={10}
            style={{ fill: "green" }}
            rx={2}
          />
        ))
      )}
    </svg>
  );
}
