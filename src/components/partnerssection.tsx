import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import images
import MicrosoftLogo from "../assets/microsoft.jpg";
import AmazonLogo from "../assets/amazon.jpg";
import GoogleLogo from "../assets/google.jpg";
import IBMLogo from "../assets/ibm.jpg";
import OracleLogo from "../assets/oracle.jpg";
import SalesforceLogo from "../assets/salesforce.jpg";
import AdobeLogo from "../assets/adobe.jpg";
import CiscoLogo from "../assets/cisco.jpg";
import IntelLogo from "../assets/intel.jpg";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "Microsoft", logo: MicrosoftLogo, color: "#6668ED" },
  { name: "Amazon", logo: AmazonLogo, color: "#FF9900" },
  { name: "Google", logo: GoogleLogo, color: "#4285F4" },
  { name: "IBM", logo: IBMLogo, color: "#0033A0" },
  { name: "Oracle", logo: OracleLogo, color: "#F80000" },
  { name: "Salesforce", logo: SalesforceLogo, color: "#00A1E0" },
  { name: "Adobe", logo: AdobeLogo, color: "#FF0000" },
  { name: "Cisco", logo: CiscoLogo, color: "#1BA0D7" },
  { name: "Intel", logo: IntelLogo, color: "#0071C5" },
];

const BrandCarousel = ({ brands }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-6">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="relative w-40 h-40 flex items-center justify-center rounded-xl shadow-lg transition-all duration-500 border-2 border-transparent group overflow-hidden"
        >
          {/* Text Name (Initial State) */}
          <span
            className="absolute text-lg font-bold transition-all duration-500"
            style={{ color: brand.color }}
          >
            {brand.name}
          </span>

          {/* Logo Image (Hidden Initially) */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-500 scale-90 group-hover:opacity-100 group-hover:scale-100"
            style={{ backgroundImage: `url(${brand.logo})` }}
          />

          {/* Gradient Border on Hover */}
          <div
            className="absolute inset-0 rounded-xl border-4 opacity-0 transition-all duration-500 group-hover:opacity-100"
            style={{
              borderImageSource: `linear-gradient(45deg, ${brand.color}, #ffffff)`,
              borderImageSlice: "1",
            }}
          />
        </div>
      ))}
    </div>
  );
};

const PartnersSection = () => {
  return (
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
  );
};

export default PartnersSection;
