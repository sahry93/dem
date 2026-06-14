"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "/images/clients/logo1.svg" },
  { name: "Partner 2", logo: "/images/clients/logo2.svg" },
  { name: "Partner 3", logo: "/images/clients/logo3.svg" },
  { name: "Partner 4", logo: "/images/clients/logo4.svg" },
  { name: "Partner 5", logo: "/images/clients/logo5.svg" },
  { name: "Partner 6", logo: "/images/clients/logo6.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function OurPartners() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-sky-600 uppercase tracking-[0.3em] mb-3">
            Trusted By
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-900">
            Our Strategic Partners
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-12 w-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
