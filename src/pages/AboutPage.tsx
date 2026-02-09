import { MapPin, Briefcase, GraduationCap, Heart, Coffee, Code2, Twitter, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
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
                  src="Indra.png"
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg ring-4 ring-white"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center border-4 border-white shadow-sm">
                  <span className="text-white text-sm">👋</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif mb-2">
                Hey, I'm Indra
              </h1>
              <p className="text-lg text-brand-600 font-medium mb-4">
                Writer, Admin, Minutes of Meeting Maker
              </p>
              <p className="text-gray-500 leading-relaxed mb-6 max-w-xl">
                I Write about Geo-Politics, Economics, Corruption, Social issues, Finance and so much more. Welcome to my corner of the internet.
              </p>

              {/* Quick Facts */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg">
                  <MapPin className="w-3.5 h-3.5" /> Indraprastha, IN
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg">
                  <Briefcase className="w-3.5 h-3.5" /> 10+ Years in Tech
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
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:hello@example.com"
                  className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Story Section */}
        <section className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-5">My Story</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              I started my journey on X the way most people do — by making opinion tweets. My first tweets were mostly regarding India-Pak conflict in May 2025, but I went on to create a website that tried to record every security Incident in Pakistan.
            </p>
            <p>
              Fast forward to today, and I have created this website as my personal blog to write my long form opinion articles and keep a archive of them here. I didn't want to pay for X premium just to write long articles on X, therefore the Idea to create this website was born. 
            </p>
            <p>
              Another Reason I wanted to create this website was: <strong>The Hall of Fame page</strong>. I wanted to dedicate a page to best and most brutal Replies, Posts and Ratios made by Indian Right Wingers on X.
            </p>
            <p>
              This blog is where I share my thoughts — unfiltered and uncensored. Some posts are carefully researched technical deep-dives. Others are hot takes I wrote at Night to vent my frustration on everyone. Both are equally important to me.
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
                title: "Empathy in Debate",
                desc: "Behind every account is a real person. Respect other's dignity and be compassionate.",
              },
              {
                icon: <Coffee className="w-5 h-5" />,
                title: "Work-Life Harmony",
                desc: "Burnout doesn't produce good work. Rest is productive. Take the vacation.",
              },
              {
                icon: <GraduationCap className="w-5 h-5" />,
                title: "Continuous Learning",
                desc: "The industry changes fast. Stay curious, stay humble, stay learning.",
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
                role: "CA Final Student",
                company: "ICAI",
                desc: "Completed my articleship, started dealing clients on my own, learned everthing at a much higher level than Intermediate.",
              },
              {
                period: "2019 – 2022",
                role: "CA Intermediate Student",
                company: "ICAI",
                desc: "Learned a Lot here, Taxation, Accounting, Auditing, Costing and the core of strategic planning",
              },
              {
                period: "2018 – 2019",
                role: "CA Foundation Student",
                company: "ICAI",
                desc: "joined CA course, learned basics of professionalism and how to use calculator efficiently",
              },
              {
                period: "2006 – 2018",
                role: "School Student",
                company: "School",
                desc: "Learned all the basics of life, from Interpersonal Comms to behavioral antics",
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
              "Accounting", "Taxation", "Auditing", "Economics",
              "Geopolitics", "Research", "Coding", "Writing",
              "Defence", "Git", "Administration", "Web-Scraping"
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
