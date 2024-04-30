import { NextResponse } from "next/server";
import prismadb from "../../../../libs/prismadb";
import bcrypt from "bcrypt";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, name, password, confirmPassword } = body;

    if (!email || !name || !password || !confirmPassword) {
      return new NextResponse("Missing data", { status: 500 });
    }

    const userAlreadyExist = await prismadb.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist?.id) {
      return new NextResponse("User already exist", { status: 500 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prismadb.user.create({
      data: {
        email: email,
        name: name,
        hashedPassword: hashedPassword,
        confirmPassword: confirmPassword,
      },
    });

    return NextResponse.json(newUser);
  } catch (err: any) {
    // console.log("REGISTER_ERR: " + err);
    return new NextResponse(err, { status: 500 });
  }
}

