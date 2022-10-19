import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@/lib/auth";
import { addLink, getLinksForProject } from "@/lib/upstash";

// This is a special route for creating custom dyo.at links.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession(req, res);
  if (!session?.user.id) return res.status(401).end("Unauthorized");

  // GET /api/links – get all dyo.at links created by the user
  if (req.method === "GET") {
    const response = await getLinksForProject("dyo.at", session.user.id);
    return res.status(200).json(response);

    // POST /api/links – create a new link
  } else if (req.method === "POST") {
    let { key, url, title } = req.body;
    if (!url) {
      return res.status(400).json({ error: "Missing url" });
    }
    const response = await addLink(
      "dyo.at",
      { url, key, title },
      session.user.id,
    );

    if (response === null) {
      return res.status(400).json({ error: "Key already exists" });
    }
    return res.status(200).json({ key, url, title });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
