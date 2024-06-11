import { NextResponse } from "next/server";

// Ver tipagem
// Body request
// Verificar calculos de margin / tempo
// Pegar nome do usuário pra request (fica em um script só)

async function getContributions() {
  const headers = {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  };

  const body: Object = {
    query: `query {
      user(login: "${"lucas7maciel"}") {
        name
        contributionsCollection {
          contributionCalendar {
            colors
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
                weekday
              }
              firstDay
            }
          }
        }
      }
    }`,
  };

  let res: any;

  try {
    res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });

    res = await res.json();
  } catch (error) {
    // throw exceção
    console.log(error);
    return;
  }

  const weeks =
    res.data.user.contributionsCollection.contributionCalendar.weeks;

  return weeks;
}

export async function GET(req: Request, res: Response) {
  const weeks = await getContributions();

  const svgString = generateGraph(weeks);

  console.log(weeks);

  return new NextResponse(svgString, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}

function generateGraph(weeks: any) {
  // Dark theme: #0d1117

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="700"
      height="102"
      viewBox="0 0 700 102"
      style="background-color: #0d1117"
      role="img"
      aria-labelledby="descId"
    >
      ${weeks.map((week: any, index: number) =>
        week.contributionDays.map(
          (day: any) => `
          <rect 
            x="${index * 13 + 7}"
            y="${day.weekday * 13 + 7}"
            width="10" height="10"
            transform-origin="${index * 13 + 7} ${day.weekday * 13 + 7}"
            rx="2"
            style="
              fill: ${day.color}; 
              animation: scale-up both 0.7s;
              animation-delay: ${day / 15 + week / 50};
            "
          />
        `
        )
      )}
      <style>
      @keyframes scale-up {
        0% {
          transform: scale(0);
        }

        100% {
          transform: scale(1);
        }
      }
      </style>
    </svg>`;
}
