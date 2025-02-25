import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
// import logo from '/logos/logo.png';
const services = [
  { title: 'SEO Optimization', icon: '🔍' },
  { title: 'Social Media Marketing', icon: '📱' },
  { title: 'Content Marketing', icon: '📝' },
  { title: 'Pay-Per-Click (PPC) Advertising', icon: '💰' },
  { title: 'Email Marketing', icon: '📧' },
  { title: 'Web Design & Development', icon: '💻' },
  { title: 'Influencer Marketing', icon: '🌟' }
];


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dropdownRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => 
      setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  useEffect(() => {
    if (isServicesOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10,ease: "power2.out" },
        { opacity: 1, y: 0, duration: 0.3,ease: "power2.out" }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: -10,ease: "power2.out" },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.3,
          stagger: 0.1,ease: "power2.out"
        }
      );
    }
    else{
      gsap.to(dropdownRef.current, { opacity: 0, y: -10, duration: 0.3,stagger:0.1,ease: "power2.out",onComplete: () => setIsServicesOpen(false) });
      gsap.to(dropdownRef.current, { opacity: 0, y: -20, duration: 0.3, delay: 0.3,ease: "power2.out" });
    }
  }, [isServicesOpen]);
// Creating Elements
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 ">
          <a href="#" className={`text-2xl font-bold ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            {/* <img src={logo} alt="DevFusion Logo" className="h-10 w-25" /> */}
           <h1> DevFusion</h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className={`${
              isScrolled ? 'text-gray-600' : 'text-white'
            }  `}>
              Home
            </a>
            <a href="#" className={`${
              isScrolled ? 'text-gray-600' : 'text-white'
            } `}>
              About
            </a>
            <div className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => {
                  gsap.to(menuItemsRef.current, { opacity: 0, y: -10, duration: 0.8, stagger: 0.3, onComplete: () => setIsServicesOpen(false) });
                }}
                // onMouseLeave={() => {
                //   gsap.to(menuItemsRef.current, { opacity: 0, y: -10, duration: 0.8, stagger: 0.3, onComplete: () => setIsServicesOpen(false) });
                // }}
              >
              <button
                className={`services flex items-center space-x-1 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }  `}
                onClick={() => {
                  gsap.to(menuItemsRef.current, { opacity: 0, y: -10, duration: 0.6, stagger: 0.2, onComplete: () => setIsServicesOpen(false) });
                }}
                // onMouseOver={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 d-arrow" />
              </button>
              {isServicesOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-2 mt-2"
                >
                  
                  {services.map((service, index) => (
                    
                    <a
                      key={service.title}
                      href="#"
                      ref={el => menuItemsRef.current[index] = el}
                      className={`flex items-center px-4 py-2 transition-all ${hoveredIndex === index ? 'scale-110' : 'opacity-70 hover:opacity-100'}`} 
                      onMouseEnter={() => {
                        setHoveredIndex(index);
                        gsap.to(menuItemsRef.current[index], {
                          scale: 1.1,
                          opacity: 1,
                          duration: 0.3,
                          ease: "back.out(1.7)", // Bounce effect
                        });
                        gsap.to(menuItemsRef.current.filter((_, i) => i !== index), {
                          opacity: 0.5,
                          duration: 0.3,
                        });
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        gsap.to(menuItemsRef.current[index], {
                          scale: 1,
                          duration: 0.3,
                        });
                        gsap.to(menuItemsRef.current, {
                          opacity: 1,
                          duration: 0.3,
                          
                        });
                        

                      }}
                    >
                      <span className={`mr-2 text-lg transition-transform ${hoveredIndex === index ? 'scale-125' : 'scale-100'}`}>{service.icon}</span>
                      <span className="text-gray-700">{service.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#" className={`${
              isScrolled ? 'text-gray-600' : 'text-white'
            }  transition-colors`}>
              Insights
            </a>
            <a href="#" className={`${
              isScrolled ? 'text-gray-600' : 'text-white'
            }  transition-colors`}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-600  transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-600  transition-colors">
                About
              </a>
              <div className="space-y-2">
                <button
                  className="flex items-center space-x-1 text-gray-600  transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2">
                    {services.map(service => (
                      <a
                        key={service.title}
                        href="#"
                        className="flex items-center text-gray-600  transition-colors"
                      >
                        <span className="mr-2">{service.icon}</span>
                        <span>{service.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-600  transition-colors">
                Insights
              </a>
              <a href="#" className="text-gray-600  transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;