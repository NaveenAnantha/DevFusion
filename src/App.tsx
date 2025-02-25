import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  // ArrowUp,
  CheckCircle2,
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Navbar from "./components/Navbar";
import MarqueeText from "./components/MarqueeText";
import ServiceCard from "./components/ServiceCard";
import InsightCard from "./components/InsightCard";
import BrandCarousel from "./components/BrandCarousel";
import Starfield from "./components/starfield";
import FancyButton from "./components/fancybutton";
import WaveAnimation from "./components/waveanimation";
import Cursor from "./components/cursor";
import DiagonalReveal from "./components/diagnolreviel";
import Splitting from "splitting";



gsap.registerPlugin(ScrollTrigger);


const services = [
  {
    title: "SEO Optimization",
    description:
      "Boost your online visibility and drive organic traffic with data-driven SEO strategies",
    icon: "🔍",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Social Media Marketing",
    description:
      "Engage your audience and build brand presence across social platforms",
    icon: "📱",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Content Marketing",
    description:
      "Create compelling content that resonates with your target audience",
    icon: "📝",
    image:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "PPC Advertising",
    description:
      "Drive immediate results with targeted paid advertising campaigns",
    icon: "💰",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads and boost conversions with personalized email campaigns",
    icon: "📧",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Web Development",
    description:
      "Build stunning, responsive websites that convert visitors into customers",
    icon: "💻",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
];

const insights = [
  {
    title: "The Future of Digital Transformation",
    date: "March 15, 2024",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Emerging Tech Trends 2024",
    date: "March 10, 2024",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI in Modern Business",
    date: "March 5, 2024",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
];

const partners = [
  {
    name: "Microsoft",
    logo: "/logos/microsoft.png",
    color: "#f25022",
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.png",
    color: "#ff9900",
  },
  {
    name: "Google",
    logo:"/logos/google.png",
    color: "#4285F4",
  },
  {
    name: "IBM",
    logo: "/logos/ibm.png",
    color: "#006699",
  },
  {
    name: "Oracle",
    logo: "/logos/oracle.png",
    color: "#F80000",
  },
  {
    name: "Salesforce",
    logo:"/logos/salesforce.png",
    color: "#00A1E0",
  },
  {
    name: "Adobe",
    logo: "/logos/adobe.png",
    color: "#FF0000",
  },
  {
    name: "Intel",
    logo: "/logos/intel.png",
    color: "#00A1E0",
  },
];


function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesContentRef = useRef(null);
  const servicesBranchesRef = useRef(null);
  const whyUsRef = useRef(null);
  const insightsRef = useRef(null);
  const aboutImageRef = useRef(null);
  const whyChooseImageRef = useRef(null);
  const slicesRef = useRef([]);

  useEffect(() => {
    Splitting();
    // Home section Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutImageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(slicesRef.current, {
      height: 0,
      ease: "power4.inOut",
      stagger: { amount: 0.33 },
    }).to(
      aboutImageRef.current,
      { scale: 1.0, ease: "power4.inOut" },
      "-=1"
    );

    const tlWhyUs = gsap.timeline({
      scrollTrigger: {
        trigger: whyChooseImageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tlWhyUs.to(slicesRef.current, {
      height: 0,
      ease: "power4.inOut",
      stagger: { amount: 0.33 },
    }).to(
      whyChooseImageRef.current,
      { scale: 1.0, ease: "power4.inOut" },
      "-=1"
    );
    // Services Section Animation
    gsap.fromTo(
      servicesContentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    gsap.fromTo(
      servicesBranchesRef.current?.children || [],
      { opacity: 0, scaleY: 0 },
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.5,
        stagger: 0.1,
        transformOrigin: "top",
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    gsap.fromTo(
      servicesRef.current?.querySelectorAll(".service-card-tilt"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    // About Section Animation
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    // Why Choose Us Animation
    gsap.fromTo(
      whyUsRef.current?.children || [],
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  
    // Insights Section Animation
    gsap.fromTo(
      insightsRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: insightsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    // About section image animation
    gsap.fromTo(
      aboutImageRef.current,
      { opacity: 0, scale: 0.8, x: -100 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutImageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Why Choose Us section image animation
    gsap.fromTo(
      whyChooseImageRef.current,
      { opacity: 0, scale: 0.8, x: 100 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: whyChooseImageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    
  
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      
      <Navbar />
      <Cursor/>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Video for Flames */}
        {/* Starfield Animation - Fullscreen */}
      <div className="starfield position-absolute">
          <Starfield />
      </div>
        
        
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="relative text-5xl md:text-7xl font-bold mb-6 mix-blend-overlay">
            DevFusion Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforming Ideas into Digital Reality
          </p>
          <div className="text-center mt-16">
            <FancyButton text="Get Started Now" />
          </div>

        </div>
        

        {/* Marquee Text (If needed) */}
        <MarqueeText />
        <WaveAnimation/>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-lg shadow-xl diareviel" data-splitting="cells"  ref={aboutImageRef}>
              <div className="absolute inset-0 flex flex-col" ref={(el) => (slicesRef.current[0] = el)}>
                <div className="bg-black w-full h-full uncover_slice"></div>
              </div>
            {/* <canvas id="hero-lightpass" /> */}
           
            {/* <img
             ref={aboutImageRef}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="rounded-lg shadow-xl"
            /> */}
            < DiagonalReveal  imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"/>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">About DevFusion</h2>
            <p className="text-gray-600 mb-6">
              We are a leading digital solutions provider, combining innovation
              with expertise to deliver transformative technology solutions. Our
              team of experts works tirelessly to ensure your business stays
              ahead in the digital age.
            </p>
            
            <div className="transition-all getblack">
            <FancyButton text="Learn More" />
          </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div ref={servicesContentRef} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your digital presence with our comprehensive suite of
              marketing solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(33.33%-2rem)] lg:w-[calc(33.33%-2rem)]"
              >
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="text-center mt-16 getblack">
            <FancyButton text="Get Started Now" />
          </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div ref={whyUsRef} className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
            {[
              "Industry Leading Expertise",
              "Innovative Solutions",
              "Dedicated Support",
              "Proven Track Record",
              "Scalable Solutions",
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                <span className="text-lg text-gray-700">{point}</span>
              </div>
            ))}
          </div>
          <div className="md:w-1/2  rounded-lg shadow-xl diareviel" data-splitting="cells"  ref={whyChooseImageRef} >
            {/* <img
              ref={whyChooseImageRef}
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Why Choose Us"
              className="rounded-lg shadow-xl"
            /> */}
            < DiagonalReveal imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"/>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Insights & Updates
          </h2>
          <div
            ref={insightsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {insights.map((insight, index) => (
              <div key={index} className="hover-lift">
                <InsightCard {...insight} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50 relative">
        {/* Background Logo */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-10"
          style={{
            backgroundImage: "url('https://your-logo-url.com/logo.png')",
            backgroundSize: "contain",
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Partners
          </h2>
          <BrandCarousel brands={partners} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DevFusion Solutions</h3>
              <p className="text-gray-400">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Tech Street</li>
                <li>Silicon Valley, CA 94025</li>
                <li>contact@devfusion.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 DevFusion Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-top fixed bottom-8 right-8  text-white p-3 rounded-full shadow-lg  transition-all hover:bg-black"
      >
        <ChevronUp className="w-6 h-6" />
        <div className="btn_starfield position-relative rounded-full shadow-lg  transition-all">
          < Starfield/>
        </div>
        
      </button>
    </div>
  );
}

export default App;
