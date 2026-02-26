import { MapPin, Briefcase, GraduationCap, Heart, Coffee, Code2, Twitter, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterForm } from "@/components/NewsletterForm";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="relative">
                <img
                  src="https://pbs.twimg.com/media/HBwymBAbAAAke7c?format=jpg&name=small"
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg ring-4 ring-white"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center border-4 border-white shadow-sm">
                  <span className="text-white text-sm">⚡</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif mb-2">
                Hey, I'm Indra
              </h1>
              <p className="text-lg text-brand-600 font-medium mb-4">
                Writer, Warrior, God
              </p>
              <p className="text-gray-500 leading-relaxed mb-6 max-w-xl">
                I write whatever I want to write. My articles span across diverse range of Topics. I write with utmost neutrality & unbiased thought process.
              </p>

              {/* Quick Facts */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg">
                  <MapPin className="w-3.5 h-3.5" /> इन्द्रप्रस्थ, स्वर्ग
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg">
                  <Briefcase className="w-3.5 h-3.5" /> 5+ Years in Accounting
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg">
                  <Coffee className="w-3.5 h-3.5" /> 3 Cups/Day Minimum
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="https://x.com/IndraStratagem" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://buymeacoffee.com/indrastratagem" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                  <Coffee className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Story Section */}
        <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-5">My Story: The Mind Behind the Stratagem</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Welcome to my corner of the internet. My journey has always been driven by a fascination with how complex systems operate,
              interact, and ultimately evolve. Currently navigating the rigorous path of a Chartered Accountancy final student,
              I've spent years honing a deeply analytical approach to the world, dissecting everything from intricate GST provisions to the nuances of interest rate risk management.
            </p>
            <p>
              But financial frameworks are just one piece of the puzzle. To truly understand how the world works, you have to look at the grander chessboard.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-5">Beyond the Balance Sheet</h2>
            <p>
              My focus naturally extends beyond finance into the broader strategic landscape.
              I am deeply invested in global geopolitics,
              paying particular attention to the shifting dynamics and historical complexities of our immediate neighborhood,
              including Pakistan and Afghanistan.
            </p>
            <p>
              Coupled with this is a strong focus on India’s hard power and self-reliance.
              I closely track the strategic and technological evolution of Indian defense,
              following critical milestones from domestic defense procurement strategies to the development of indigenous technology like the Kaveri engine.
              Whether I am studying the maneuvering on a literal chessboard or the grand strategy of nations,
              I am drawn to the tactics that shape outcomes.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-5">Building and Connecting</h2>
            <p>
             I don't just want to analyze the world; I want to actively build within it.
             Alongside my studies and geopolitical research, I am constantly exploring the entrepreneurial landscape,
             specifically looking at opportunities to establish a manufacturing or trading business in India that bridges low investment with high market demand. 
            </p>
            <p>
              Through this blog and my ongoing conversations on X (@IndraStratagem),
              my goal is to document these intersections of finance, national defense, grand strategy, and business.
            </p>
          </div>
        </section>

        {/* What I Believe */}
        <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">What I Believe In</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Code2 className="w-5 h-5" />,
                title: "Simplicity Over Complexity",
                desc: "The best solution is usually the simplest one. Fight the urge to over-explain.",
              },
              {
                icon: <Heart className="w-5 h-5" />,
                title: "Empathy in Perception",
                desc: "Behind every user is a real person. Build for humans, not for metrics.",
              },
              {
                icon: <Coffee className="w-5 h-5" />,
                title: "Work-Life Harmony",
                desc: "Burnout doesn't produce good work. Rest is productive. Take the vacation.",
              },
              {
                icon: <GraduationCap className="w-5 h-5" />,
                title: "Continuous Learning",
                desc: "The world changes fast. Stay curious, stay humble, stay learning.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Career Journey</h2>
          <div className="space-y-8">
            {[
              {
                period: "2022 – Present",
                role: "CA Finalist",
                company: "Institute of Chartered Accountants of India",
                desc: "Learning Corporate financial reporting, taxation and auditing and Corporate finance.",
              },
              {
                period: "2022 – 2025",
                role: "CA Articleship",
                company: "Anonymous.",
                desc: "Learned practical aspects of all the theory learned in Foundation & Intermediate.",
              },
              {
                period: "2019 – 2022",
                role: "CA Intermediate",
                company: "Institute of Chartered Accountants of India",
                desc: "Learned Advanced Accounting, Compnay Laws, Costing, Taxation and Corporate finance.",
              },
              {
                period: "2018 – 2019",
                role: "CA Foundation",
                company: "Institute of Chartered Accountants of India",
                desc: "Learned Basics of Accounting and Professional Communications.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-brand-500 rounded-full ring-4 ring-brand-50 shrink-0 mt-1.5" />
                  {i < 3 && <div className="w-px bg-gray-200 flex-1 mt-2" />}
                </div>
                <div className="pb-2">
                  <span className="text-xs text-brand-600 font-semibold uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-1">{item.role}</h3>
                  <p className="text-sm text-gray-400 mb-1">{item.company}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">My Skill Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              "Geo-Politics", "Defence", "Economy", "Finance",
              "Taxation", "Auditing", "Tech", "ERP",
              "Nat-Sec", "Forensic Accounting", "Administration", "Public policy"
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-3 bg-gray-50 rounded-xl text-center text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Link
            to="/blog"
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-brand-100 transition-all group"
          >
            <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              Read My Blog
              <ArrowRight className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-sm text-gray-500">Explore all my articles, tutorials, and hot takes.</p>
          </Link>

          <Link
            to="/hall-of-fame"
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-yellow-100 transition-all group"
          >
            <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              Hall of Fame
              <ArrowRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-sm text-gray-500">The most savage tweets I've ever witnessed.</p>
          </Link>
        </div>

        {/* Newsletter */}
        <NewsletterForm variant="hero" source="about-page" />
      </div>
    </div>
  );
}
