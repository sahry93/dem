import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Services | Duta Energi",
    template: "%s | Duta Energi",
  },
  description:
    "High-quality engineering solutions and operational support for demanding projects.",
  openGraph: {
    title: "Our Services | Duta Energi Muliatama",
    description:
      "Explore our comprehensive engineering solutions and operational support for various industries.",
    url: "https://dutaenergi.co.id/services",
    siteName: "Duta Energi Muliatama",
    images: [
      {
        url: "/images/projects/project-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Duta Energi Engineering Services",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
