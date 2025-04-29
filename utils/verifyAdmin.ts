import { getAuthServerSession } from "@/utils/authOptions";
import { NextResponse } from "next/server";

export async function verifyAdmin(req: Request) {
  const session = await getAuthServerSession();

  if (!session?.user.admin) {
    return NextResponse.json(
      { error: "Forbidden: Admin access only" },
      { status: 403 }
    );
  }

  return null;
}
