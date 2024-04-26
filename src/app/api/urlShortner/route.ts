import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../libs/AuthOptions";
const prismaClient = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const urls = await prismaClient.url.findMany();
    return NextResponse.json( urls );
  } catch (error: any) {
    console.error("Error fetching urls:", error);
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// export const POST = async (req: NextRequest) => {
//     const session = await getServerSession(authOptions
//     );

//   try {
//     const { longUrl } = await req.json();
//     console.log("Received longUrl:", longUrl);

//     const shortId = Math.random().toString(36).substring(2, 16);

//     const addUrl = await prismaClient.url.create({
//       data: {
//         longUrl,
//         shortId,
//         clickCount: 0, 
//       },
//     });
//     console.log("addUrl =>", addUrl);
//     return NextResponse.json({
//       message: "Url created successfully",
//       longUrl: longUrl,
//       shortId: addUrl.shortId,
//       id: addUrl.id,
//       email: session?.user?.email,
//       clickCount: addUrl.clickCount, 
//     });
//   } catch (err) {
//     console.error("Error creating url:", err);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };


export const POST = async (req: NextRequest) => {
    const session = await getServerSession(authOptions);

    try {
        const { longUrl } = await req.json();
        console.log("Received longUrl:", longUrl);

        const shortId = Math.random().toString(36).substring(2, 16);

        const userEmail = session?.user?.email;

        const addUrl = await prismaClient.url.create({
            data: {
                longUrl,
                shortId,
                clickCount: 0,
                userEmail: userEmail,
            },
        });
        console.log("addUrl =>", addUrl);

        return NextResponse.json({
            message: "Url created successfully",
            longUrl: longUrl,
            shortId: addUrl.shortId,
            id: addUrl.id,
            email: userEmail,
            clickCount: addUrl.clickCount,
        });
    } catch (err) {
        console.error("Error creating url:", err);
        return NextResponse.json({ message: "Something went wrong" });
    }
};



export const PUT = async (req: NextRequest) => {
  try {
    const { shortId } = await req.json();
    console.log("Received shortId:", shortId);

    const url = await prismaClient.url.findUnique({
      where: { shortId }
    });

    if (!url) {
      return NextResponse.json({ message: "URL not found" });
    }

    const updatedUrl = await prismaClient.url.update({
      where: { shortId },
      data: { clickCount: url.clickCount + 1 }
    });

    console.log("Updated URL =>", updatedUrl);

    return NextResponse.json({
      message: "URL accessed successfully", 
      longUrl: updatedUrl.longUrl,
      shortId: updatedUrl.shortId,
      clickCount: updatedUrl.clickCount, 
      id: updatedUrl.id,
    });
  } catch (err) {
    console.error("Error accessing URL:", err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const { id } = await req.json();
    console.log("Received id:", id);

    const url = await prismaClient.url.findUnique({
      where: { id },
    });

    if (!url) {
      return NextResponse.json({ message: "URL not found" });
    }

    await prismaClient.url.delete({
      where: { id },
    });

    console.log("Deleted URL with id:", id);

    return NextResponse.json({
      message: "URL deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting URL:", err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};