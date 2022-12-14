import { NextApiRequest, NextApiResponse } from "next";
import { addLink, getLinksForProject } from "@/lib/api/links";
import { Session, withUserAuth } from "@/lib/auth";
import { getBlackListedDomains, getDomainWithoutWWW } from "@/lib/utils";
import { log } from "@/lib/utils";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1500kb",
    },
  },
};

// This is a special route for retrieving and creating custom dyo.at links.
export default withUserAuth(
  async (req: NextApiRequest, res: NextApiResponse, session: Session) => {
    // GET /api/links – get all dyo.at links created by the user
    if (req.method === "GET") {
      const { status, sort } = req.query as {
        status?: string;
        sort?: "createdAt" | "clicks";
      };
      const response = await getLinksForProject({
        domain: "dyo.at",
        status,
        sort,
        userId: session.user.id,
      });
      return res.status(200).json(response);

      // POST /api/links – create a new link
    } else if (req.method === "POST") {
      let { key, url } = req.body;
      if (!key || !url) {
        return res.status(400).json({ error: "Missing key or url" });
      }
      const { hostname, pathname } = new URL(url);
      if (hostname === "dyo.at" && pathname === `/${key}`) {
        return res.status(400).json({ error: "Invalid url" });
      }
      const BLACKLISTED_DOMAINS = await getBlackListedDomains();
      if (BLACKLISTED_DOMAINS.has(getDomainWithoutWWW(url))) {
        return res.status(400).json({ error: "Invalid url" });
      }
      const response = await addLink({
        ...req.body,
        domain: "dyo.at",
        userId: session.user.id,
      });

      if (response === null) {
        return res.status(403).json({ error: "Key already exists" });
      }
      await log(`${session.user.email} created a new link for ${url}`, "links");
      return res.status(200).json(response);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ error: `Method ${req.method} Not Allowed` });
    }
  },
);
