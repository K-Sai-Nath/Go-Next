import React, { useEffect, useState } from "react";
import SplitText from "../components/SplitText";
import Aurora from "../components/Aurora";
import Portfolio from "./Portfolio";
import Industries from "./Industries";
import Contact from "./Contact";
import About from "./About";
function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "services",
        "portfolio",
        "industries",
        "about",
        "contact",
      ];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["services", "portfolio", "industries", "about", "contact"];

  return (
    <div className="relative bg-[var(--bg-color)] min-h-screen">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-nav">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a className="flex items-center space-x-2" href="#">
              <svg
                className="h-8 w-8 text-[var(--accent-color)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21a9 9 0 0 0 9-9h-9v9ZM3 12a9 9 0 1 1 18 0h-9a9 9 0 0 0-9 9v-9Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="font-heading text-2xl font-bold text-[var(--primary-color)]">
                Go Technologies
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === sec
                      ? "text-[var(--primary-color)]"
                      : "text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              className="hidden lg:inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold btn-primary"
              href="#contact"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="button-glow"></div>
            </a>

            {/* Mobile Menu */}
            <button
              className="lg:hidden text-[var(--primary-color)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[var(--bg-color)] border-t border-gray-700 px-4 py-4 space-y-4">
            {navItems.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium ${
                  activeSection === sec
                    ? "text-[var(--primary-color)]"
                    : "text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-full text-sm font-semibold btn-primary"
            >
              Start a Project
            </a>
          </div>
        )}
      </header>

      {/* Main */}
      <main>
        {/* Hero Section */}
        <section className="hero-section min-h-screen flex items-center justify-center text-center overflow-hidden py-24 px-4">
          <div className="hero-glow"></div>
          <div className="relative z-10 container mx-auto">
            <SplitText
              text="Build What's Next."
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              onLetterAnimationComplete={""}
            />
            <SplitText
              text="We are your dedicated technology partner, delivering cutting-edge Mobile Apps, Web Platforms, and AI-powered solutions for ambitious startups and enterprises."
              className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[var(--secondary-color)]"
              delay={80}
              duration={0.6}
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              onLetterAnimationComplete={""}
            />
            <div
              className="mt-12 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                className="inline-flex items-center justify-center px-10 py-5 rounded-full text-base font-bold btn-primary group"
                href="#contact"
              >
                <span className="relative z-10">Let's Innovate Together</span>
                <span className="material-symbols-outlined ml-2 transform transition-transform duration-300 group-hover:translate-x-1 relative z-10">
                  arrow_forward
                </span>
                <div className="button-glow"></div>
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8" id="services">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                Our Core Expertise
              </h2>
              <p className="mt-4 text-lg text-[var(--secondary-color)]">
                We provide a comprehensive suite of services to transform your
                vision into a market-leading digital product.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="service-card rounded-2xl p-8 text-center"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="inline-block p-5 bg-indigo-500/10 rounded-2xl mb-6">
                  <span className="material-symbols-outlined text-4xl text-indigo-400 service-icon">
                    phone_iphone
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Mobile App Development
                </h3>
                <p className="text-[var(--secondary-color)]">
                  High-performance, intuitive iOS and Android applications that
                  engage and retain your users.
                </p>
              </div>

              <div
                className="service-card rounded-2xl p-8 text-center"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="inline-block p-5 bg-purple-500/10 rounded-2xl mb-6">
                  <span className="material-symbols-outlined text-4xl text-purple-400 service-icon">
                    dvr
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Web Development
                </h3>
                <p className="text-[var(--secondary-color)]">
                  Scalable and secure web platforms, from dynamic websites to
                  complex enterprise applications.
                </p>
              </div>

              <div
                className="service-card rounded-2xl p-8 text-center"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="inline-block p-5 bg-pink-500/10 rounded-2xl mb-6">
                  <span className="material-symbols-outlined text-4xl text-pink-400 service-icon">
                    auto_awesome
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  AI &amp; ML Solutions
                </h3>
                <p className="text-[var(--secondary-color)]">
                  Unlock the power of data with custom AI models, machine
                  learning, and automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <Portfolio id="portfolio" />

        {/* Industries Section */}
        <Industries id="industries" />

        {/* About Section */}
        <About id="about" />

        {/* Contact Section */}
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default Home;
