import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import Image from "next/image";


const workExperience = [
  {
    period: "2024 — Now",
    title: "Software Engineer",
    company: "Shopee",
    description: "Commercial intelligence and planning. Built template generation systems, internal service platforms, and automation scripts enabling data-driven decision-making."
  },
  {
    period: "2023 — 2024",
    title: "Data Scraper",
    company: "FoodStyles",
    description: "Created scraping templates and instructions for accurate data extraction. Verified and reviewed data quality across the team."
  },
  {
    period: "2021 — 2023",
    title: "Frontend Developer",
    company: "Freelance",
    description: "Developed responsive websites transforming Figma designs into functional web experiences using modern frontend technologies."
  }
];

const education = [
  {
    period: "2019 — 2022",
    degree: "Master's Degree",
    institution: "USP — Universidade de São Paulo",
  },
  {
    period: "2011 — 2016",
    degree: "Bachelor's Degree",
    institution: "Damascus University",
  },
];

export default function Home() {

  return (
    <main className="min-h-screen px-6 py-16 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-4xl">
        <section className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          <div className="relative h-64 w-44 shrink-0 overflow-hidden rounded-full md:h-80 md:w-56">
            <Image
              src="/hero3.webp"
              alt="Hasan Zaibak"
              fill
              priority
              className="object-cover object-[50%_10%]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
                Hasan Zaibak
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Software Engineer
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                São Paulo, Brazil
              </p>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-foreground/80">
              I build automation systems and full-stack web applications that
              make workflows faster, cleaner, and more scalable. Passionate
              about designing APIs, optimizing databases, and connecting data
              pipelines into reliable, real-world tools.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "FastAPI",
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Redis",
                "Docker",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </h2>

          <div className="mt-8 flex flex-col gap-10">

            {workExperience.map((entry, idx) => {
              return (
                <div key={entry.title + idx} className="grid gap-1 md:grid-cols-[140px_1fr] md:gap-8">
                  <span className="text-sm text-muted-foreground">{entry.period}</span>
                  <div>
                    <h3 className="font-medium">{entry.title}</h3>
                    <p className="text-sm text-muted-foreground">{entry.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {entry.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Education
          </h2>

          <div className="mt-8 flex flex-col gap-6">
            {education.map((entry, idx) => {
              return (
                <div key={entry.period + idx} className="grid gap-1 md:grid-cols-[140px_1fr] md:gap-8">
                  <span className="text-sm text-muted-foreground">{entry.period}</span>
                  <div>
                    <h3 className="font-medium">{entry.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {entry.institution}
                    </p>
                  </div>
                </div>
              )
            })}

          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </h2>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="mailto:hasan.zaibak@hotmail.com"
              className="group flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              hasan.zaibak@hotmail.com
            </a>
            <a
              href="https://linkedin.com/in/alzaibak"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/alzaibak
            </a>
            <a
              href="tel:+5511959398197"
              className="group flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              +55 11 95939-8197
            </a>
          </div>
        </section>

        <footer className="mt-24 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hasan Zaibak
          </p>
        </footer>
      </div>
    </main>
  );
}