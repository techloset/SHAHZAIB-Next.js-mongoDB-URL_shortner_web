// // pages/api/url/shorten.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "../../../../libs/prismadb";
// import { GenerateRandomId } from "../../../../libs/generateRandomId";

// export async function postHandler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { longUrl } = req.body;
//     const shortId = GenerateRandomId(10); // Generate random ID with length 10

//     // Create a new URL entry in the database
//     const createdUrl = await prisma.url.create({
//       data: {
//         longUrl,
//         shortId,
//       },
//     });

//     // Send the shortened URL in the response
//     res.status(201).json({ shortUrl: `${process.env.BASE_URL}/${createdUrl.shortId}` });
//   } catch (error) {
//     console.error("Error creating URL:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// export async function config() {
//   return {
//     api: {
//       bodyParser: {
//         sizeLimit: '1mb',
//       },
//     },
//   };
// }
