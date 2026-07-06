"use client";

import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";
import { Globe2, ExternalLink } from "lucide-react";

interface Subsidiary {
  name: string;
  shortName: string;
  href: string;
  description: string;
  accent: string;
  iconBg: string;
  iconColor: string;
  hoverBorder: string;
  hoverShadow: string;
  icon?: any;
  logoUrl?: string;
}

const subsidiaries: Subsidiary[] = [
  {
    name: "PT Teknika Pesona Kahayan",
    shortName: "Teknika Pesona",
    href: "https://www.pesonakahayan.co.id",
    logoUrl: "https://www.pesonakahayan.co.id/images/logo.png",
    description:
      "Providing top-tier industrial equipment and fleet rental services, offering premium heavy machinery solutions for large-scale earthmoving operations and material handling.",
    accent: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    hoverBorder: "hover:border-cyan-300",
    hoverShadow: "hover:shadow-cyan-100",
  },
  {
    name: "PT Pelita Bioenergi Nusantara",
    shortName: "Pelita Bioenergi",
    href: "https://www.pelitaenergi.com",
    logoUrl: "https://www.pelitaenergi.com/images/logo.png",
    description:
      "Leading provider of high-quality biomass and modern bioenergy solutions, driving the world towards a cleaner and more sustainable energy future.",
    accent: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-emerald-100",
  },
  {
    name: "PT Sagara Yasa Ananta",
    shortName: "Sagara Yasa",
    href: "https://www.sagarayasa.com",
    logoUrl: "https://www.sagarayasa.com/images/sagara%20logo.png",
    description:
      "Specializing in the construction, operation, and distribution of Diesel Power Plants (PLTD) with international technical standards and full commitment to sustainability.",
    accent: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    hoverBorder: "hover:border-blue-300",
    hoverShadow: "hover:shadow-blue-100",
  },
  {
    name: "PT Ananta Trada Internasional",
    shortName: "Ananta Trada",
    href: "https://www.anantatrada.com",
    icon: Globe2,
    description:
      "Engaged in international trade and strategic commodity distribution, professionally bridging the global market with domestic industrial needs.",
    accent: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-700",
    hoverBorder: "hover:border-violet-300",
    hoverShadow: "hover:shadow-violet-100",
  },
  {
    name: "PT Duta Persada Power",
    shortName: "Duta Persada Power",
    href: "https://www.persadapower.co.id",
    logoUrl:
      "https://www.persadapower.co.id/assets/front/img/6723440089eb3.png",
    description:
      "Provider of large-scale electrical solutions, encompassing power plant construction, power transmission, and operation and maintenance services for industrial electrical systems.",
    accent: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    hoverBorder: "hover:border-amber-300",
    hoverShadow: "hover:shadow-amber-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function Subsidiaries() {
  return (
    <section
      id="subsidiaries"
      className="section relative overflow-hidden bg-slate-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-sky-700">
            Group of Companies
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Subsidiaries
          </h2>
          <p className="mt-5 mx-auto max-w-2xl leading-8 text-slate-600">
            DEM Holding oversees five subsidiaries operating across strategic
            sectors, ranging from energy and maritime construction to
            international trade.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {subsidiaries.map((sub) => {
            return (
              <motion.div key={sub.name} variants={itemVariants}>
                <Link
                  href={sub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${sub.hoverBorder} ${sub.hoverShadow}`}
                >
                  {/* Top gradient bar */}
                  <div
                    className={`absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${sub.accent} transition-transform duration-500 group-hover:scale-x-100`}
                  />

                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60" />

                  {/* Icon */}
                  <div
                    className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${sub.iconBg} ${sub.iconColor} transition-all duration-500 group-hover:scale-110 overflow-hidden`}
                  >
                    {sub.logoUrl ? (
                      <img
                        src={sub.logoUrl}
                        alt={`${sub.shortName} logo`}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      sub.icon && <sub.icon size={26} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative mt-5 flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold leading-snug text-slate-900 transition group-hover:text-sky-700">
                        {sub.name}
                      </h3>
                      <ExternalLink
                        size={16}
                        className="mt-0.5 shrink-0 text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-sky-500"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-500 flex-1">
                      {sub.description}
                    </p>

                    <div
                      className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${sub.accent} bg-clip-text text-transparent`}
                    >
                      Visit Website
                      <ExternalLink size={13} className={`${sub.iconColor}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
