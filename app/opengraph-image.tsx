import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Coach Momar — Coach de boxe à Abidjan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0608",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* fond gradient rouge */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 100% at 100% 50%, rgba(160,10,20,0.55) 0%, transparent 70%)",
          }}
        />

        {/* photo droite */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://coach-momar.vercel.app/images/bio-profile-momo.png"
          alt=""
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "480px",
            objectFit: "cover",
            objectPosition: "center top",
            maskImage: "linear-gradient(to left, black 55%, transparent 100%)",
          }}
        />

        {/* texte gauche */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 64px",
            gap: "16px",
            maxWidth: "680px",
          }}
        >
          <span
            style={{
              color: "#e6424d",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Coach de boxe · Abidjan
          </span>

          <div
            style={{
              color: "#ffffff",
              fontSize: "80px",
              fontWeight: 700,
              lineHeight: 0.92,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            Coach Momar
          </div>

          <div
            style={{
              color: "rgba(221,214,204,0.75)",
              fontSize: "22px",
              lineHeight: 1.45,
              marginTop: "8px",
            }}
          >
            Boxe anglaise · française · thaï
          </div>

          <div
            style={{
              marginTop: "24px",
              background: "#e6424d",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "12px 28px",
              display: "inline-flex",
              alignSelf: "flex-start",
            }}
          >
            Réserver une séance
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
