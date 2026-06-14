export type Project = {
  slug: string;
  title: string;
  location: string;
  image: string;
  description: string;
  category: string;
};

export const projects: Project[] = [
  {
    slug: "pln-electrical-procurement",
    title: "Electrical Utility Procurement",
    location: "PT PLN (Persero) • Indonesia",
    image: "/images/projects/project-pln.jpg",
    description:
      "Procurement of utility and electrical equipment including testing instruments, mobile units, communication systems, thermovision devices, smart distribution components, and ultrasonic detectors for PT PLN (Persero) and regional entities.",
    category: "Energy",
  },

  {
    slug: "smart-distribution-system",
    title: "Smart Distribution Components",
    location: "Power Distribution Sector",
    image: "/images/projects/project-smart-grid.jpg",
    description:
      "Supply and deployment of smart electrical distribution components to improve reliability, operational monitoring, and system efficiency.",
    category: "Energy",
  },

  {
    slug: "thermovision-maintenance",
    title: "Thermovision Inspection System",
    location: "Industrial Maintenance",
    image: "/images/projects/project-thermal.jpg",
    description:
      "Thermovision apparatus procurement and implementation for preventive maintenance and electrical infrastructure safety monitoring.",
    category: "Mechanical",
  },

  {
    slug: "pln-vehicle-rental",
    title: "PLN Operational Vehicle Rental",
    location: "Various Regions • Indonesia",
    image: "/images/projects/sewakendaraan.png",
    description:
      "Integrated car and motorcycle rental solutions to support PLN's operational mobility across various regional units in Indonesia, ensuring technical teams reach sites efficiently.",
    category: "Rental",
  },

  {
    slug: "dem-logistic-solutions",
    title: "DEM Logistic & Distribution",
    location: "National • Indonesia",
    image: "/images/projects/demlogistic.png",
    description:
      "End-to-end logistics and supply chain management for industrial and electrical equipment, ensuring safe and timely delivery to project sites across the archipelago.",
    category: "Logistic",
  },
];
