import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma"; 

export const GET = async (req: NextRequest) => {
  try {
    const urls = await prisma.url.findMany();
    return NextResponse.json({ message: "Urls fetched successfully", urls });
  } catch (error: any) {
    console.error("Error fetching urls:", error);
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { longUrl } = await req.json();
    console.log("Received longUrl:", longUrl);

    const shortId = Math.random().toString(36).substring(2, 16);

    const addUrl = await prisma.url.create({
      data: {
        longUrl,
        shortId,
      },
    });
    console.log("addUrl =>", addUrl);
    return NextResponse.json({
      message: "Url created successfully",
      longUrl: longUrl,
      shortId: addUrl.shortId,
      id: addUrl.id,
    });
  } catch (err) {
    console.error("Error creating url:", err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};


// import { NextRequest, NextResponse } from "next/server";
// import prisma from "../../../../libs/prisma"; 

// export const GET = async (req: NextRequest) => {
//   try {
//     const urls = await prisma.url.findMany();
//     return NextResponse.json({ message: "Urls fetched successfully", urls });
//   } catch (error: any) {
//     console.error("Error fetching urls:", error);
//     return NextResponse.json({
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };

// export const POST = async (req: NextRequest) => {
//   try {
//     const { shortId } = await req.json();
//     console.log("Received shortId:", shortId);

//     // Find the URL with the given shortId
//     const url = await prisma.url.findUnique({
//       where: { shortId }
//     });

//     if (!url) {
//       return NextResponse.json({ message: "URL not found" });
//     }

//     // Increment the click count for the URL
//     const updatedUrl = await prisma.url.update({
//       where: { shortId },
//       data: { clickCount: url.clickCount + 1 }
//     });

//     console.log("Updated URL =>", updatedUrl);

//     return NextResponse.json({
//       message: "URL accessed successfully",
//       longUrl: updatedUrl.longUrl,
//       shortId: updatedUrl.shortId,
//       clickCount: updatedUrl.clickCount, // Return the updated click count
//       id: updatedUrl.id,
//     });
//   } catch (err) {
//     console.error("Error accessing URL:", err);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };

