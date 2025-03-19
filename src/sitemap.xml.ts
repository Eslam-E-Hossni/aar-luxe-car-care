/* eslint-disable @typescript-eslint/no-explicit-any */
import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: any, res: { setHeader: (arg0: string, arg1: string) => void; send: (arg0: Buffer<ArrayBufferLike>) => any; }) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Encoding", "gzip");

  const smStream = new SitemapStream({ hostname: "https://aarluxe.online" });
  const pipeline = smStream.pipe(createGzip());

  // إضافة صفحات الموقع
  smStream.write({ url: "/", changefreq: "daily", priority: 1.0 });
  smStream.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
  smStream.write({ url: "/services", changefreq: "weekly", priority: 0.9 });
  smStream.end();

  streamToPromise(pipeline).then((sm) => res.send(sm));
};
