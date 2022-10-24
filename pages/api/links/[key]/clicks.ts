import { NextApiRequest, NextApiResponse } from "next";
import { getLinkClicksCount } from "@/lib/upstash";

// This is a special route to check if a custom dyo.at links exists

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // GET /api/links/[key]/clicks - get clicks for link
  if (req.method === "GET") {
    const { key } = req.query as { key: string };
    const clicks = await getLinkClicksCount("dyo.at", key);
    await prisma.link.update({
      where: {
        domain_key: {
          domain: "dyo.at",
          key,
        },
      },
      data: {
        clicks,
        clicksUpdatedAt: new Date(),
      },
    });
    return res.status(200).json(clicks);
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
