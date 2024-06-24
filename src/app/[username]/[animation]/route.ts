import { getContributions } from "@/app/(config)/getData";
import { getGraph } from "@/app/(config)/getGraph";
import { NextResponse } from "next/server";

// Ver tipagem
// Body request
// Verificar calculos de margin / tempo
export async function GET(req: Request, res: Response) {
  // Get user params
  const url = new URL(req.url);
  const { pathname, searchParams } = url;

  // User and animation
  const [_, user, animation] = pathname.split("/");

  // Stylying params
  const config: any = { animation };

  for (const [key, value] of searchParams.entries()) {
    config[key] = value
  }

  // Generate graph
  const weeks = await getContributions(user);
  const svgString = getGraph(weeks, config);

  // Response
  return new NextResponse(svgString, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
