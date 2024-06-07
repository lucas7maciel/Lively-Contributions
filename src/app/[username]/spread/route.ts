import { NextResponse } from "next/server";
import { useRouter } from 'next/navigation';

export async function GET(req: Request, res: Response) {
  const router = useRouter()
  console.log(router)

  //console.log(username)

  const svgString = generateGraph(req);

  return new NextResponse(svgString, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}

function generateGraph(req: Request) {
  return `
    <svg width="200" height="150" role="img" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="75" rx="80" ry="60" fill="blue" stroke="#000" stroke-width="2"/>
    </svg>  
  `;
}
