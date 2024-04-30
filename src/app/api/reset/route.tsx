import { getServerSession } from "next-auth";
import prismadb from "../../../../libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function PUT(req: Request): Promise<Response> {
  try {
    const session = await getServerSession({ req });

    if (!session || !session.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userEmail = session.user.email;

    const body = await req.json();
    const { currentPassword, newPassword, confirmPassword, hashedPassword } =
      body;

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword ||
      !hashedPassword
    ) {
      return new Response("Missing data", { status: 400 });
    }

    if (newPassword !== confirmPassword) {
      return new Response("new password or confirm password is not match", {
        status: 400,
      });
    }

    const correctPassword = await bcrypt.compare(
      currentPassword,
      hashedPassword
    );

    if (!correctPassword) {
      throw new Error("Invalid hash-password");
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 12);

    const user = await prismadb.user.findFirst({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const updatedUser = await prismadb.user.update({
      where: {
        id: user.id,
      },
      data: {
        hashedPassword: newHashedPassword,
        confirmPassword: confirmPassword,
      },
    });

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.log("UPDATE_ERR: " + err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
