import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { recordClick, redis } from "@/lib/upstash";
import { parse } from "./utils";

export default async function RootMiddleware(
  req: NextRequest,
  ev: NextFetchEvent,
) {
  const { hostname } = parse(req);

  if (!hostname) {
    return NextResponse.next();
  }

  if (
    hostname === "dyo.at" ||
    hostname === "preview.dyo.at" ||
    hostname.endsWith(".vercel.app")
  ) {
    ev.waitUntil(redis.incr("dyo.at:root:clicks")); // increment root clicks (only for dyo.at)
  } else {
    ev.waitUntil(recordClick(hostname, req)); // record clicks on root page (if hostname is not dyo.at)
  }

  if (
    hostname === "dyo.at" ||
    hostname === "preview.dyo.at" ||
    hostname.endsWith(".vercel.app")
  ) {
    return NextResponse.next();
  } else {
    const target = await redis.get<string>(`root:${hostname}`);
    if (target) {
      return NextResponse.redirect(target);
    } else {
      const url = req.nextUrl;
      url.pathname = `/placeholder/${hostname}`; // rewrite to a /placeholder page unless the user defines a site to redirect to
      return NextResponse.rewrite(url);
    }
  }
}
