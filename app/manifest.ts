import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "zyradigital-org",
    name: "ZYRA DIGITAL",
    short_name: "ZYRA",
    description:
      "We make your ads and we run them. Video and image creative for Australian businesses. Brisbane.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#ffffff",
    theme_color: "#003F46",
    categories: ["business", "marketing"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
