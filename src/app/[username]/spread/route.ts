import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  return new NextResponse(
    `
      <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="75" rx="80" ry="60" fill="#f00" stroke="#000" stroke-width="2"/>
      </svg>
    `,
    { status: 410, headers: { "content-type": "image/svg+xml" } }
  );
}
