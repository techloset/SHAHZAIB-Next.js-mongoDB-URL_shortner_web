// api/shorturl.ts

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const baseUrl: string = "http://localhost:3000/";

interface ShortUrl {
  longUrl: string;
}

export async function main(): Promise<void> {
  try {
    await prisma.$connect();
  } catch (error) {
    console.error("Database Connection Failed:", error);
    throw error;
  }
}

export const GET = async (
  req: NextRequest & { query: { shortId: string } }
): Promise<NextResponse> => {
  try {
    await main();
    const shortId: string = req.query.shortId;
    const url: ShortUrl | null = await prisma.shortUrl.findUnique({
      where: { shortId },
      select: { longUrl: true },
    });

    if (!url) {
      return NextResponse.json({
        message: "Short URL not found",
      });
    }

    return NextResponse.redirect(301, url.longUrl);
  } catch (error: any) {
    console.error("Error fetching short URL:", error);
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (
  req: NextRequest
): Promise<NextResponse> => {
  try {
    await main();
    const { longUrl }: { longUrl: string } = await req.json();
    console.log("Received long URL:", longUrl);

    const id: string = Math.random().toString(36).substring(2, 8);

    const addLink: { shortId: string } = await prisma.shortUrl.create({
      data: {
        longUrl,
        shortId: id,
      },
      select: { shortId: true },
    });
    console.log("addLink =>", addLink);
    
    const shortUrl: string = baseUrl + addLink.shortId;

    return NextResponse.json({
      message: "Short URL created successfully",
      shortUrl,
    });
  } catch (err: any) {
    console.error("Error creating short URL:", err);
    return NextResponse.json({ message: "Something went wrong" });
  } finally {
    await prisma.$disconnect();
  }
};

