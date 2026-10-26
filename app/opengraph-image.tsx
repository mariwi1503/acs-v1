import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/app/content/site";

export const alt = `${company.name} — ${company.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/acs-logo.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #010d22 0%, #03224e 70%, #0a2f63 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", background: "white", borderRadius: 24, padding: "18px 28px", alignSelf: "flex-start" }}>
          <img src={`data:image/png;base64,${logo}`} width={222} height={75} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#ff7d3b", letterSpacing: 4, textTransform: "uppercase" }}>
            {company.tagline}
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, marginTop: 16, maxWidth: 1000 }}>
            Infrastruktur IT Enterprise, Dirancang & Dikelola oleh Tim Ahli.
          </div>
          <div style={{ fontSize: 28, color: "#c3cfe2", marginTop: 24 }}>
            Networking · Data Center · CCTV AI · Smart Building · Managed Service 24/7
          </div>
        </div>
        <div style={{ position: "absolute", right: 0, bottom: 0, width: 360, height: 180, background: "#fd5c0c", clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
      </div>
    ),
    size,
  );
}
