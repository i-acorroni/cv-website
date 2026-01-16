import Link from "next/link";
import { Mail, Rss, GraduationCap, Github, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-h1 font-heading font-semibold text-text mb-4">
          Izabela Acorroni
        </h1>
        <div className="flex flex-wrap gap-3 mb-6">
          <Link
            href="mailto:izabela@lawtechmixmat.ch"
            className="px-4 py-2 rounded-lg bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors text-sm font-medium flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_SUBSTACK_FEED_URL?.replace(/\/feed$/, "") || "https://thelawandtechmixandmatch.substack.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors text-sm font-medium flex items-center gap-2"
          >
            <Rss className="h-4 w-4" />
            Substack
          </Link>
          
          <Link
            href="https://scholar.google.com/citations?user=o1ALjbEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors text-sm font-medium flex items-center gap-2"
          >
            <GraduationCap className="h-4 w-4" />
            Scholar
          </Link>
          <Link
            href="https://github.com/i-acorroni"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors text-sm font-medium flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          
         
        </div>
        <p className="text-xl text-text mb-6">
        Law & Technology Researcher
        </p>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-h2 font-heading font-semibold text-text mb-4">
          About
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-text mb-4">I work at the intersection of digital regulation, platform governance, and law’s evolving relationship with technology. My current focus is how platforms operationalise rules—through policies, enforcement workflows, and technical design—and what this means for due process, accountability, and privacy.
          Graduated with distinction from the LLM in Law and New Technologies at Birkbeck, University of London, where I was awarded the Global Futures Scholarship and the Academic Excellence
          Award for Best Overall Postgraduate Law Student.
          </p>
          <p className="text-text mb-4">
            
          </p>
          
          <h3 className="text-xl font-heading font-semibold text-text mt-8 mb-4">
            Research Interests
          </h3>
          <ul className="list-disc list-inside text-text space-y-2">
            <li>Platform governance: how platforms operationalise rules through policies, enforcement workflows, and technical design</li>
            <li>Implications of the use of AI systems in legal decision-making</li>
            <li> Law as Code vs. Code as Law</li>
            <li>Algorithmic regulation</li>
            <li>EU digital regulatory framework and compliance design</li>
          </ul>

          <h3 className="text-xl font-heading font-semibold text-text mt-8 mb-4">
            Strenghts
          </h3>
          <ul className="list-disc list-inside text-text space-y-2">
            <li><b>Research maturity:</b> over a decade of research experience, with sustained focus on law&tech questions since 2020.</li>
            <li><b>Justice systems experience:</b> former legal consultant at a Brazilian State Court of Justice (TJMG), former legal consultant at Brazil’s State Court of Justice (TJMG), leading and supporting projects on technology adoption, access to justice, and service design.</li>
            <li><b>Interdisciplinarity:</b> experience working across legal theory, regulation, and socio-technical infrastructures, bridging doctrinal analysis with implementation realities.</li>
            <li><b>Technical fluency:</b> a tecnólogo background that supports engagement with technical subjects, and occasional coding to prototype and test ideas.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

