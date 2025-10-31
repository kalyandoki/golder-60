import { useState, useEffect } from "react";
import {
  FaClock,
  FaUsers,
  FaCircle,
  FaBolt,
  FaCheckCircle,
  FaQuoteLeft,
  FaUserFriends,
  FaPlay,
  FaTimes,
  FaChevronDown,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaMoneyBillWave,
  FaHeart,
  FaBars,
  FaBalanceScale,
} from "react-icons/fa";
import mentorVideo from "../assets/videos/metor-video.mp4";

const G60LandingPage = () => {
  const [activeWeek, setActiveWeek] = useState("week1");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    "When does the workshop start?",
    "Is this really free?",
    "I can't make every session live — is it okay?",
    "Will my promoter see my data?",
    "How do I join the live call?",
    "What if I miss Day 1 — can I still join?",
  ];

  const faqsAns = [
    "The next cohort starts on [Start Date — replace]. Sessions run daily from 5:00–6:00 AM for 21 consecutive days.",
    "Yes — registration is free for this cohort. We show a payment step for commitment, but price is ₹0 for now.",
    "Absolutely. Recordings will be posted for all registered members.",
    "Your data is visible to the admin. Promoters can only see leads they personally referred (name, email & phone) through their referral dashboard.",
    "After registration you'll receive an email & WhatsApp link each morning. Add the calendar invite to stay reminded.",
    "Yes — start anytime during the first three days and catch up with recordings and community check-ins.",
  ];

  const navLinks = [
    // { id: "home", label: "Home" },
    { id: "what-is-g60", label: "What is G60?" },
    { id: "why-it-works", label: "Why It Works" },
    { id: "meet-your-mentor", label: "Meet Your Mentor" },
    { id: "curriculum", label: "Curriculum" },
    { id: "testimonials", label: "Testimonials" },
    { id: "how-to-attend", label: "How to Attend" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 text-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0F2147]/95 backdrop-blur-sm py-4 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center">
                  <span className="text-[#0F2147] font-bold text-xl">G</span>
                </div>
                <span className="text-2xl font-bold text-[#D4A017]">G60</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-300 hover:text-[#D4A017] transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#how-to-attend">
                <button className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0F2147] font-semibold px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                  Register Free
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="text-gray-300 hover:text-[#D4A017] transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#how-to-attend">
                  <button className="bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0F2147] font-semibold px-6 py-2 rounded-md transition-all duration-300 mt-4 w-full">
                    Register Free
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 pt-32"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/10 via-transparent to-[#0F2147]/20"></div>
        <div className="container mx-auto max-w-7xl relative z-10 px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Wake Up. <span className="text-[#D4A017]">Transform.</span>{" "}
                Thrive.
              </h1>
              <div className="inline-block bg-[#D4A017]/20 px-4 py-2 rounded-lg border border-[#D4A017]/30">
                <span className="text-[#D4A017] font-semibold text-lg">
                  G60 (Golden 60)
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                21 mornings, 60 minutes each. Practical coaching for Health,
                Relationships, Money & Happiness — from someone who's already
                won.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Join a focused community every morning from 5:00–6:00 AM for 21
                days. Learn the exact framework used by our mentor to transform
                health, relationships, finances and daily happiness. Live
                sessions, real tools, simple daily actions.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center h-11 rounded-md bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0F2147] font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  Save My Spot
                </button>
                <div className="flex gap-3">
                  <button className="inline-flex items-center justify-center text-sm font-medium border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-[#D4A017]/50 text-[#D4A017] hover:bg-[#D4A017]/10">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    See Schedule
                  </button>
                  <button className="inline-flex items-center justify-center text-sm font-medium border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-[#D4A017]/50 text-[#D4A017] hover:bg-[#D4A017]/10">
                    <FaUserFriends className="w-4 h-4 mr-2" />
                    Invite a Friend
                  </button>
                </div>
              </div> */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-lg font-semibold text-lg shadow-md transition"
                >
                  Save My Free Spot →
                </a>
                <a
                  href="#"
                  className="border border-slate-700 px-6 py-3 rounded-lg text-slate-300 hover:text-yellow-300 transition"
                >
                  Why G60 Works
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D4A017]/20">
                <img
                  className="w-full h-auto object-cover"
                  alt="Sunrise with energetic community members on morning video call"
                  src="https://images.unsplash.com/photo-1515656169252-343934eebc97"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2147]/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#2E8B57] text-white px-6 py-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">21 Days</div>
                <div className="text-sm">To Transform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is G60 Section */}
      <section id="what-is-g60" className="py-20 px-4 bg-[#0F2147]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is G60?
            </h2>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-8"></div>
          </div>
          <div className="bg-gradient-to-br from-[#0F2147] to-slate-900 rounded-2xl p-8 md:p-12 border border-[#D4A017]/20 shadow-xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              G60 (Golden 60) is a 21-day morning workshop designed to help you
              build sustainable improvements in four life pillars —{" "}
              <span className="text-[#D4A017] font-semibold">
                Health, Relationships, Money, and Happiness
              </span>
              . Each session is 60 minutes, delivered live at 5–6 AM, with
              actionable exercises and community accountability. It's for people
              who are serious about change but short on time.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 bg-[#D4A017]/10 rounded-lg p-4 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all">
                <FaClock className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  60 minutes daily, 5-6 AM
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#D4A017]/10 rounded-lg p-4 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all">
                <FaUsers className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Live community sessions
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#D4A017]/10 rounded-lg p-4 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all">
                <FaBalanceScale className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  4 life pillars covered
                </span>
              </div>
              <div className="flex items-center gap-3 bg-[#D4A017]/10 rounded-lg p-4 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all">
                <FaBolt className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Actionable daily exercises
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section id="why-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why this works{" "}
              <span className="text-[#D4A017]">(and why it's different)</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Daily micro-habits",
              "Proven framework",
              "Holistic focus",
              "Live guidance + recordings",
              "Community accountability",
              "Free registration today",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0F2147]/50 to-slate-900/50 rounded-xl p-6 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all hover:shadow-lg hover:shadow-[#D4A017]/10"
              >
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="w-6 h-6 text-[#2E8B57] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#D4A017] mb-2">
                      {item}
                    </h3>
                    <p className="text-gray-400">
                      60 minutes each morning — high impact, low friction.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Mentor Section */}
      <section id="meet-your-mentor" className="py-20 px-4 bg-[#0F2147]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet your mentor
            </h2>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D4A017]/20">
                <img
                  className="w-full h-auto object-cover"
                  alt="Professional portrait of successful Indian mentor and transformation coach"
                  src="https://horizons-cdn.hostinger.com/acbcdc3d-ee91-4dbc-81ad-0e8d7ee904cd/untitled-design-15-imbHc.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2147]/80 to-transparent"></div>
                {/* 🎥 Watch Video Button */}
                <button
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0F2147] font-semibold shadow-md"
                >
                  <FaPlay className="mr-2" /> Watch Intro Video
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-[#D4A017] mb-2">
                  Gnana Moorthy
                </h3>
                <p className="text-xl text-gray-300">
                  Founder & Lead Coach, G60
                </p>
                <p className="text-lg text-gray-400">
                  Entrepreneur, Speaker, Transformation Coach
                </p>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                A highly successful leader who turned everyday routines into
                extraordinary results — now teaching the exact framework he used
                to transform hundreds of lives.
              </p>
              <div className="space-y-4">
                {[
                  "20+ years of professional experience and mentorship",
                  "Impacted over 1 million people in transforming their health",
                  "Guided 500+ individuals to elevate their health, wealth, and relationships",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[#D4A017]/10 rounded-lg p-4 border border-[#D4A017]/20"
                  >
                    <FaCheckCircle className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-[#D4A017]/20 to-transparent border-l-4 border-[#D4A017] p-6 rounded-r-lg">
                <p className="text-xl italic text-gray-300 leading-relaxed">
                  "Small daily wins compound into a golden life. Join me each
                  morning — 21 days is all it takes to start the shift."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🎬 Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-3xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-10 right-0 text-white text-2xl"
              >
                <FaTimes />
              </button>
              <video
                src={mentorVideo}
                controls
                autoPlay
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What you'll get —{" "}
              <span className="text-[#D4A017]">day-by-day</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every morning has a theme: brief teaching (20 min), live Q&A (20
              min) and a practical action/exercise (20 min).
            </p>
          </div>

          <div className="w-full">
            <div className="h-10 items-center justify-center rounded-md p-1 text-muted-foreground grid w-full grid-cols-3 mb-8 bg-[#0F2147]/50">
              {["week1", "week2", "week3"].map((week) => (
                <button
                  key={week}
                  type="button"
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm ${
                    activeWeek === week
                      ? "bg-[#D4A017] text-[#0F2147]"
                      : "text-gray-300 hover:bg-[#D4A017]/10"
                  }`}
                  onClick={() => setActiveWeek(week)}
                >
                  {week === "week1"
                    ? "Week 1"
                    : week === "week2"
                    ? "Week 2"
                    : "Week 3"}
                </button>
              ))}
            </div>

            <div className="mt-2">
              {activeWeek === "week1" && (
                <div className="bg-gradient-to-br from-[#0F2147]/50 to-slate-900/50 rounded-2xl p-8 border border-[#D4A017]/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-[#D4A017]/20 p-4 rounded-xl">
                      <FaHeart className="w-8 h-8 text-[#D4A017]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#D4A017]">
                        Week 1
                      </h3>
                      <p className="text-xl text-gray-300">
                        Foundations & Health
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Mindset reset — Why mornings matter",
                      "Energize your body — simple morning routine",
                      "Nutrition that fuels focus",
                      "Sleep & recovery for high performance",
                      "Micro-exercise & mobility",
                      "Stress hacks & breathwork",
                      "Reflection & small wins",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-slate-900/50 rounded-lg p-4 border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-[#D4A017] text-[#0F2147] font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            {1 + index}
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-2">
              {activeWeek === "week2" && (
                <div className="bg-gradient-to-br from-[#0F2147]/50 to-slate-900/50 rounded-2xl p-8 border border-[#D4A017]/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-[#D4A017]/20 p-4 rounded-xl">
                      <FaUserFriends className="w-8 h-8 text-[#D4A017]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#D4A017]">
                        Week 2
                      </h3>
                      <p className="text-xl text-gray-300">
                        Relationships & Communication
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Emotional intelligence basics",
                      "Listening skills that transform relationships",
                      "Boundaries and healthy habits",
                      "Building deeper trust",
                      "Conflict to connection roadmap",
                      "Family & friend rituals that stick",
                      "Weekly reflection + check-in",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-slate-900/50 rounded-lg p-4 border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-[#D4A017] text-[#0F2147] font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            {8 + index}
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-2">
              {activeWeek === "week3" && (
                <div className="bg-gradient-to-br from-[#0F2147]/50 to-slate-900/50 rounded-2xl p-8 border border-[#D4A017]/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-[#D4A017]/20 p-4 rounded-xl">
                      <FaMoneyBillWave className="w-8 h-8 text-[#D4A017]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#D4A017]">
                        Week 3
                      </h3>
                      <p className="text-xl text-gray-300">Money & Happiness</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Money mindset & clarity",
                      "Practical budgeting for growth",
                      "Income streams & focus",
                      "Goal setting + time blocking",
                      "Daily happiness rituals",
                      "Purpose & small daily legacies",
                      "Graduation — integrate your 21-day plan",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-slate-900/50 rounded-lg p-4 border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-[#D4A017] text-[#0F2147] font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            {15 + index}
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#2E8B57]/20 to-transparent border-l-4 border-[#2E8B57] p-6 rounded-r-lg">
            <p className="text-lg text-gray-300">
              <FaCircle className="w-5 h-5 inline mr-2 text-[#2E8B57]" />
              After day 21 you'll have a personalized daily plan and community
              accountability to continue.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-[#0F2147]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real people, <span className="text-[#D4A017]">real results</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya R.",
                text: "I lost 6 kg, improved my sleep and finally found time for family.",
              },
              {
                name: "Ramesh K.",
                text: "My relationships at home improved — we communicate better now.",
              },
              {
                name: "Sunita M.",
                text: "I doubled my freelance income after Day 17's framework.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0F2147] to-slate-900 rounded-xl p-8 border border-[#D4A017]/20 hover:border-[#D4A017]/40 transition-all hover:shadow-lg hover:shadow-[#D4A017]/10 relative"
              >
                <FaQuoteLeft className="w-12 h-12 text-[#D4A017]/30 absolute top-4 right-4" />
                <p className="text-lg text-gray-300 mb-6 italic leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-[#D4A017]/20 pt-4">
                  <p className="font-semibold text-[#D4A017]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">G60 Grad</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center bg-[#D4A017]/10 rounded-lg p-6 border border-[#D4A017]/30">
            <p className="text-lg text-gray-300">
              Be a founding member — register free to join the first public
              cohort.
            </p>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="how-to-attend" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How to Attend{" "}
              <span className="text-[#D4A017]">(free limited seats)</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-[#0F2147] to-slate-900 rounded-2xl p-8 md:p-12 border-2 border-[#D4A017] shadow-2xl shadow-[#D4A017]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#2E8B57] text-white px-6 py-2 rounded-bl-2xl font-bold flex items-center gap-2">
              <FaBolt className="w-4 h-4" /> FREE
            </div>
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-[#D4A017] mb-2">₹0</div>
              <p className="text-xl text-gray-300">Limited Time Offer</p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
              Registration is currently{" "}
              <span className="text-[#D4A017] font-semibold">FREE</span>. We
              show a payment flow during sign-up to secure commitment, but your
              registration for this cohort is ₹0. Seats are limited — register
              now to reserve your spot.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "21 live morning sessions (5-6 AM)",
                "Access to all recordings & resources",
                "Community WhatsApp group",
                "Daily actionable exercises",
                "Certificate of completion",
                "Referral rewards program",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-[#2E8B57] flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row sm:w-auto gap-4 justify-center">
                <a
                  href="https://forms.gle/6boaEuZfc4hnSMdx9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-[#D4A017] hover:bg-[#D4A017]/90 text-[#0F2147] font-semibold text-lg py-6">
                    Register Free — Save My Spot
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-[#0F2147]/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently asked <span className="text-[#D4A017]">questions</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0F2147] to-slate-900 rounded-xl border border-[#D4A017]/20 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#D4A017]/5 transition-all"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-200">
                    {faq}
                  </span>
                  <FaChevronDown
                    className={`w-5 h-5 text-[#D4A017] transition-transform ${
                      activeFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFAQ === index && (
                  <div className="px-6 py-4 bg-[#D4A017]/5 text-gray-300">
                    {faqsAns[index]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F2147] border-t border-[#D4A017]/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-[#D4A017] mb-4">G60</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Golden 60 — Transform your mornings, transform your life. 21
                days to a better you.
              </p>
            </div>
            <div>
              <span className="font-semibold text-gray-300 mb-4 block">
                Quick Links
              </span>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="block text-gray-400 hover:text-[#D4A017] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span className="font-semibold text-gray-300 mb-4 block">
                Connect With Us
              </span>
              <div className="flex gap-4 mb-4">
                <button className="bg-[#D4A017]/10 p-3 rounded-lg hover:bg-[#D4A017]/20 transition-all border border-[#D4A017]/20 hover:border-[#D4A017]/40">
                  <FaInstagram className="w-5 h-5 text-[#D4A017]" />
                </button>
                <button className="bg-[#D4A017]/10 p-3 rounded-lg hover:bg-[#D4A017]/20 transition-all border border-[#D4A017]/20 hover:border-[#D4A017]/40">
                  <FaYoutube className="w-5 h-5 text-[#D4A017]" />
                </button>
                <button className="bg-[#D4A017]/10 p-3 rounded-lg hover:bg-[#D4A017]/20 transition-all border border-[#D4A017]/20 hover:border-[#D4A017]/40">
                  <FaLinkedin className="w-5 h-5 text-[#D4A017]" />
                </button>
                <button className="bg-[#D4A017]/10 p-3 rounded-lg hover:bg-[#D4A017]/20 transition-all border border-[#D4A017]/20 hover:border-[#D4A017]/40">
                  <FaWhatsapp className="w-5 h-5 text-[#D4A017]" />
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Email:{" "}
                <a
                  href="g60community@gmail.com"
                  className="text-[#D4A017] hover:underline"
                >
                  g60community@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-[#D4A017]/20 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 G60. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/917207029141"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full shadow-2xl px-3 py-3 font-semibold z-100 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white transition"
      >
        <FaWhatsapp size={42} />
      </a>
    </div>
  );
};

export default G60LandingPage;
