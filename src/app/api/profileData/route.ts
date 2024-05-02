import { NextRequest, NextResponse } from "next/server";
import { IncomingMessage } from "http";
import { getServerSession } from "next-auth";
import prismadb from "../../../../libs/prismadb";
import { SessionProps } from "../../../../types/type";


export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const session = (await getServerSession(req as any)) as SessionProps;

    if (!session) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userEmail = session.user?.email;

    // console.log("session", userEmail);

    if (!userEmail) {
      return new NextResponse("User email not found", { status: 400 });
    }

    const userData = await prismadb.user.findFirst({
      where: {
        email: {
          equals: userEmail,
        },
      },
    });

    if (!userData) {
      return new NextResponse("User data not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
