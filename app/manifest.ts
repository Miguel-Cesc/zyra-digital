import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "zyradigital-org",
    name: "ZYRA DIGITAL",
    short_name: "ZYRA",
    description:
      "Digital systems that work. Brisbane-based web design, hosting, SEO and AI search.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#ffffff",
    theme_color: "#003F46",
    categories: ["business", "technology"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
