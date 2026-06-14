import Image from "next/image";
import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "About Us | Duta Energi",
  description:
    "Learn more about PT. Duta Energi Muliatama, our mission, vision, and commitment to excellence in engineering and contracting.",
  openGraph: {
    title: "About Us | Duta Energi",
    description:
      "Discover the story behind Duta Energi Muliatama and our dedication to providing high-quality engineering solutions.",
    images: ["/images/opengraph-default.jpg"], // Ganti dengan gambar OG yang relevan
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Engineering Infrastructure"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/10 to-slate-30" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-sky-400 uppercase border border-sky-400/30 bg-sky-400/10 rounded-full">
              Established 2009
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
              Building a <span className="text-sky-400">Stronger</span> <br />
              Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              PT. Duta Energi Muliatama was established in 2015 and is a
              provider of mechanical engineering solutions and dynamic
              contracting services. With a unique blend of mechanical
              engineering and construction experience, we put innovation and
              sustainability first while providing excellent services. Our team
              of highly qualified specialists upholds the highest standards of
              quality and honesty in every project, bringing a lot of expertise
              to the table. We are dedicated to being leaders in the provision
              of cutting-edge mechanical and construction solutions that have a
              beneficial influence. Our goal is to provide unmatched service by
              fusing knowledge with the newest technologies, providing value to
              each client along the way. Our objective is to use cutting-edge
              technology to create sustainable surroundings. At PT. Duta Energi
              Muliatama, we work together as a passionate team committed to
              completing exceptional projects.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-12 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Vision Card */}
            <div className="group p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Eye size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Our Vision
              </h2>
              <ul className="text-slate-600 leading-relaxed space-y-4 list-disc pl-5 marker:text-sky-600">
                <li>
                  Our goal is to play a significant role in advancing the energy
                  technology and infrastructure industries.
                </li>
                <li>
                  Our dedication lies in utilizing state-of-the-art technologies
                  in the sectors of mechanical and electrical building to create
                  a sustainable future.
                </li>
                <li>
                  Our objective is to be innovators and pioneers in the creation
                  of technologically advanced, sustainable, and efficient built
                  environments by merging our knowledge in both fields.
                </li>
                <li>
                  Our vision entails a constructive shift in the construction
                  and management of energy, contributing significantly to global
                  development.
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="group p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <ul className="text-slate-600 leading-relaxed space-y-4 list-disc pl-5 marker:text-sky-600">
                <li>
                  Integrate mechanical-electrical systems and construction using
                  a holistic approach to produce robust, effective, and
                  functional built environments.
                </li>
                <li>
                  Encourage ongoing sustainable innovation in mechanical and
                  electrical technology and construction to develop systems that
                  are both energy- and environmentally-efficient.
                </li>
                <li>
                  Create enduring strategic alliances with stakeholders,
                  business partners, and clients in order to develop and put
                  into practice solutions that can handle upcoming difficulties.
                </li>
                <li>
                  To ensure a workforce that is aware and skilled, offer
                  education and training programs that are designed to improve
                  understanding of the mechanical-electrical and construction
                  sectors.
                </li>
                <li>
                  Provide creative and sustainable energy solutions to meet
                  changing energy needs while reducing the negative effects on
                  the environment.
                </li>
                <li>
                  Make quality and safety the first priorities in every project
                  so that the results not only meet but also surpass the
                  expectations of your clients.
                </li>
                <li>
                  Actively contribute to the community by undertaking projects
                  that have positive social and economic impacts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Our Professional{" "}
                <span className="text-sky-600">Commitment</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that engineering is more than just technical
                execution; it is about building trust and delivering enduring
                solutions for Indonesia energy infrastructure.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">
                      Safety First
                    </h4>
                    <p className="text-sm text-slate-500">
                      Strict HSSE protocols at every project site.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">
                      Quality Assurance
                    </h4>
                    <p className="text-sm text-slate-500">
                      Measured and documented workmanship.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">
                      Expert Team
                    </h4>
                    <p className="text-sm text-slate-500">
                      Certified and experienced technical experts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">
                      On-Time Delivery
                    </h4>
                    <p className="text-sm text-slate-500">
                      Disciplined execution aligned with project schedules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 shadow-2xl">
                <Image
                  src="/images/hero-bg.jpeg"
                  alt="Duta Energi Commitment"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-400/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
