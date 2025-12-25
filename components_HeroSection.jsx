import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, ArrowRight, Brain, MessageCircle, Heart, Building2, User, Mail, Calendar, MapPin, Linkedin, Instagram, ArrowDown, CheckCircle2 } from 'lucide-react';

// --- COLORES & ESTILO (Lucia Remix) ---
const THEME = {
  primary: "#92A17C", // Verde Musgo (Lucia Brand)
  secondary: "#76805C", // Verde Oscuro
  accent: "#E39F21", // Dorado/Naranja CTA
  bgLight: "#F4F1EA", // Beige/Arena Suave
  textDark: "#2C3325", // Gris/Verde muy oscuro
  white: "#FFFFFF",
};

const HumanamenteHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen font-sans antialiased bg-[#F4F1EA] text-[#2C3325]">

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out px-6 md:px-12 py-4 ${isScrolled ? 'bg-[#92A17C]/95 backdrop-blur-md shadow-sm py-3 text-white' : 'bg-transparent text-white'
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span className="text-2xl md:text-3xl font-serif font-black tracking-wide">
              HUMANA<span className="text-[#E39F21]">MENTE</span>
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] font-light uppercase opacity-80 pl-1">
              Javier González
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center text-sm font-medium tracking-widest uppercase">
            {['Sobre Mí', 'Método ECE', 'Servicios', 'Blog'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#E39F21] transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E39F21] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button className="bg-[#E39F21] hover:bg-[#d48f15] text-white px-7 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-[#E39F21]/30 text-xs tracking-widest">
              AGENDAR CITA
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-inherit">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#92A17C] text-white overflow-hidden"
            >
              <div className="flex flex-col p-8 space-y-6 text-center font-serif text-xl">
                {['Sobre Mí', 'Método ECE', 'Servicios', 'Blog'].map((item) => (
                  <a key={item} href="#" className="hover:text-[#E39F21]">{item}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ================= HERO SECTION (Lucia Style) ================= */}
      <section className="relative w-full min-h-[95vh] flex items-center bg-[#92A17C] overflow-hidden">

        {/* Background Texture/Shape */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-[#76805C] rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
          <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#E39F21] rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">

          {/* Text Content */}
          <div className="text-white md:pr-10 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#E39F21] animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase">Inteligencia Emocional</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8">
                Transfórmate desde <br />
                <span className="italic relative z-10">
                  el interior.
                  <svg className="absolute w-[110%] -bottom-2 -left-2 -z-10 text-[#E39F21] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed max-w-lg mb-10">
                Acompañamiento estratégico para líderes y personas que buscan coherencia, paz mental y resultados sostenibles.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-[#E39F21] hover:bg-[#d48f15] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-xl hover:shadow-[#E39F21]/20 flex items-center justify-center gap-3">
                  Empezar el cambio
                  <ArrowRight size={18} />
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-all text-white font-medium">
                  <Play size={18} className="fill-current" />
                  Ver Manifiesto
                </button>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] md:h-[700px] rounded-t-full overflow-hidden border-b-0 border border-white/20 bg-white/5 backdrop-blur-sm order-1 md:order-2 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#92A17C] via-transparent to-transparent opacity-60 z-10" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
              alt="Javier González"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Ticker / Marquee */}
        <div className="absolute bottom-0 w-full bg-[#76805C] py-4 transform overflow-hidden z-20">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-white/40 font-bold text-sm uppercase tracking-[0.3em] mx-8 flex items-center gap-4">
                  Bienestar <span className="w-1.5 h-1.5 rounded-full bg-[#E39F21]" />
                  Liderazgo <span className="w-1.5 h-1.5 rounded-full bg-[#E39F21]" />
                  Consciencia <span className="w-1.5 h-1.5 rounded-full bg-[#E39F21]" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ECEMethodSection />
      <ServicesSplit />
      <ContactSection />
    </div>
  );
};

// ================= COMPONENTE 2: MÉTODO E.C.E =================
const ECEMethodSection = () => {
  const steps = [
    {
      id: 1,
      letter: "E",
      title: "Entrenamiento",
      icon: <Brain strokeWidth={1.5} className="w-8 h-8 text-[#92A17C]" />,
      desc: "Gimnasia mental para romper patrones limitantes."
    },
    {
      id: 2,
      letter: "C",
      title: "Coaching",
      icon: <MessageCircle strokeWidth={1.5} className="w-8 h-8 text-[#92A17C]" />,
      desc: "Acompañamiento profesional para ver lo invisible."
    },
    {
      id: 3,
      letter: "E",
      title: "Emocional",
      icon: <Heart strokeWidth={1.5} className="w-8 h-8 text-[#92A17C]" />,
      desc: "Gestión de la energía para decisiones vitales."
    }
  ];

  return (
    <section id="metodo-ece" className="py-28 bg-[#F4F1EA] text-[#2C3325]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Header Left */}
          <div className="md:w-1/3 sticky top-32">
            <span className="text-[#E39F21] font-bold tracking-widest text-xs uppercase mb-4 block">Nuestra Metodología</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              El arte de <br /> <span className="text-[#92A17C] italic">hacer consciente</span> <br /> lo inconsciente.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              El Método ECE no es una terapia tradicional. Es un sistema activo de entrenamiento diseñado para líderes que necesitan claridad rápida y profunda.
            </p>
            <a href="#" className="inline-flex items-center text-[#92A17C] font-bold tracking-wide hover:text-[#76805C] transition-colors">
              CONOCE MÁS DEL MÉTODO <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Cards Right */}
          <div className="md:w-2/3 grid gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-[#92A17C]/10 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all hover:shadow-xl hover:border-[#92A17C]/30"
              >
                <div className="w-20 h-20 bg-[#F4F1EA] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold text-[#2C3325] mb-2 flex items-center justify-center md:justify-start gap-3">
                    <span className="text-4xl text-[#E39F21]/20 font-black">{step.letter}</span> {step.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// ================= COMPONENTE 3: SERVICIOS (Minimalista) =================
const ServicesSplit = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#2C3325] mb-6">
            Espacios de Transformación
          </h2>
          <p className="text-gray-500 font-light text-lg">
            Diseñados para adaptarse a tu momento vital o a la cultura de tu organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Empresas */}
          <div className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Empresas"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#2C3325]/40 group-hover:bg-[#2C3325]/30 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3325] via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="bg-[#E39F21] w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg">
                <Building2 size={24} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Para Empresas</h3>
              <p className="text-white/80 font-light mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Liderazgo consciente, prevención de burnout y equipos de alto rendimiento humano.
              </p>
              <div className="flex items-center gap-2 text-white font-bold tracking-widest text-sm uppercase">
                Explorar Soluciones <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Card 2: Personas */}
          <div className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2038&auto=format&fit=crop"
              alt="Personas"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#92A17C]/40 group-hover:bg-[#92A17C]/30 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3325] via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#92A17C] shadow-lg">
                <User size={24} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Para Personas</h3>
              <p className="text-white/80 font-light mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Procesos 1 a 1 para recuperar tu centro y diseñar una vida con propósito.
              </p>
              <div className="flex items-center gap-2 text-white font-bold tracking-widest text-sm uppercase">
                Empezar Ahora <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= COMPONENTE 4: CONTACTO (Clean) =================
const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-[#F4F1EA] relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#92A17C]/5 -skew-x-12 transform origin-top-right" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

          {/* Info Side */}
          <div className="md:w-2/5 bg-[#2C3325] text-white p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">

            {/* Abstract circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E39F21] rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />

            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Hablemos.</h3>
              <p className="text-white/60 leading-relaxed mb-8">
                El primer paso requiere valentía. Estoy aquí para escuchar tu historia y ver cómo podemos avanzar.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E39F21]">
                    <Mail size={20} />
                  </div>
                  <span className="text-sm tracking-wide">hola@humanamente.es</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E39F21]">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sm tracking-wide">Madrid, España / Online</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block">Sígueme</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#E39F21] transition-colors"><Linkedin /></a>
                <a href="#" className="hover:text-[#E39F21] transition-colors"><Instagram /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-12 md:p-16">
            <h4 className="text-2xl font-serif font-bold text-[#2C3325] mb-8">Envíame un mensaje</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nombre</label>
                  <input type="text" className="w-full bg-[#F4F1EA] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#92A17C] outline-none transition-all placeholder-gray-400" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</label>
                  <input type="email" className="w-full bg-[#F4F1EA] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#92A17C] outline-none transition-all placeholder-gray-400" placeholder="tucorreo@ejemplo.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Interés</label>
                <select className="w-full bg-[#F4F1EA] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#92A17C] outline-none transition-all text-gray-600">
                  <option>Coaching Personal</option>
                  <option>Consultoría para Empresas</option>
                  <option>Conferencias</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mensaje</label>
                <textarea rows="4" className="w-full bg-[#F4F1EA] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#92A17C] outline-none transition-all placeholder-gray-400" placeholder="¿En qué puedo ayudarte?"></textarea>
              </div>

              <button className="w-full bg-[#2C3325] hover:bg-[#92A17C] text-white py-4 rounded-xl font-bold transition-all shadow-xl flex justify-center items-center gap-2">
                Enviar Mensaje <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HumanamenteHero;