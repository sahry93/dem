import { services } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

// Fungsi untuk generate metadata secara dinamis
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title, // Akan digabungkan dengan template di layout: "Title | Duta Energi"
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [
        {
          url: "/images/projects/project-hero.jpg", // Bisa diganti dengan image spesifik service jika ada
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const slug = (await params).slug;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent =
    (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sky-600 font-bold mb-8 hover:text-sky-700 transition-colors"
        >
          <LucideIcons.ArrowLeft size={20} />
          Back to Services
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl">
              <IconComponent size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              {service.title}
            </h1>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            {service.description}
          </p>

          {/* Placeholder untuk konten tambahan service */}
          <div className="aspect-video relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
              Detailed project documentation and technical specifications will
              be displayed here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
