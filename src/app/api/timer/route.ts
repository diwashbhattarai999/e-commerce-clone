// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

let timeLeft = 30 * 24 * 60 * 60; // Initial time in seconds

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     res.status(200).json({ timeLeft });
//   } else if (req.method === "POST") {
//     const { newTime } = req.body;
//     timeLeft = newTime;
//     res.status(200).json({ message: "Timer updated successfully" });
//   } else {
//     res.status(405).end();
//   }
// }

export async function GET() {
  return NextResponse.json({ timeLeft }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { newTime } = body;
  timeLeft = newTime;

  return NextResponse.json(
    { message: "Timer updated successfully" },
    { status: 200 }
  );
}
