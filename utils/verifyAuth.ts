import { getAuthServerSession } from "@/utils/authOptions";
import { NextResponse } from "next/server";

export async function verifyAuth(req: Request) {
  const session = await getAuthServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
