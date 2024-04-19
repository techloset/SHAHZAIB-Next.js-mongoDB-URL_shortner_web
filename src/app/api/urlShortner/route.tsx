// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "../../../../libs/prismadb";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const { longUrl } = req.body;
//       const shortId = GenerateRandomId();

//       const createdUrl = await prisma.url.create({
//         data: {
//           longUrl,
//           shortId,
//         },
//       });

//       res.status(201).json({
//         shortUrl: `${"qwertyuducydbcbsdbcysdbb"}/${createdUrl.shortId}`,
//       });
//     } catch (error) {
//       console.error("Error creating URL:", error);
//       res.status(500).json({ error: "Internal Server Error" });

//     }

//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }

// function GenerateRandomId(): string {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let result = "";
//   for (let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return result;
// }
