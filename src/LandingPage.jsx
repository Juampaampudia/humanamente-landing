import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, ArrowRight, Brain, MessageCircle, Heart, Building2, User, Mail, Calendar, MapPin, Linkedin, Instagram, ArrowDown, CheckCircle2, BookOpen, Facebook, Youtube, Twitter } from 'lucide-react';

// --- COLORES & ESTILO (Lucia Remix) ---
const THEME = {
    primary: "#92A17C", // Verde Musgo (Lucia Brand)
    secondary: "#76805C", // Verde Oscuro
    accent: "#E39F21", // Dorado/Naranja CTA
    bgLight: "#F4F1EA", // Beige/Arena Suave
    textDark: "#2C3325", // Gris/Verde muy oscuro
    white: "#FFFFFF",
};

// ================= HERO SECTION =================
const Hero = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative w-full min-h-[95vh] flex items-center bg-[#92A17C] overflow-hidden text-[#2C3325]">
            {/* Noise Texture */}
            <div className="bg-noise" />

            {/* NAVBAR */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out px-6 md:px-12 py-4 ${isScrolled ? 'bg-[#92A17C]/95 backdrop-blur-md shadow-sm py-3 text-white' : 'bg-transparent text-white'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center bg-transparent">
                    <a href="#" className="flex flex-col leading-none group">
                        <span className="text-2xl md:text-3xl font-serif font-black tracking-wide flex items-center">
                            HUMANA<span className="text-[#E39F21] group-hover:text-gradient-gold transition-all duration-300">MENTE</span>
                        </span>
                        <span className="text-[0.6rem] tracking-[0.2em] font-light uppercase opacity-80 pl-1 group-hover:opacity-100 transition-opacity">
                            Javier González
                        </span>
                    </a>

                    <div className="hidden md:flex space-x-10 items-center text-sm font-medium tracking-widest uppercase">
                        {['Sobre Mí', 'Método ECE', 'Servicios', 'Recursos'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#E39F21] transition-colors duration-300 relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E39F21] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <button className="bg-[#E39F21] hover:bg-[#d48f15] text-white px-7 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-[#E39F21]/30 text-xs tracking-widest">
                            AGENDAR CITA
                        </button>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-inherit relative z-50">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Background Texture Layers */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-[#76805C] rounded-full blur-[100px] opacity-40 mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#E39F21] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDuration: '10s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">

                {/* Text Content */}
                <div className="text-white md:pr-10 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
                            <span className="w-2 h-2 rounded-full bg-[#E39F21] animate-pulse" />
                            <span className="text-xs font-bold tracking-widest uppercase">Inteligencia Emocional</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8">
                            Transfórmate desde <br />
                            <span className="italic relative z-10 inline-block">
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
                            <button className="bg-[#E39F21] hover:bg-[#d48f15] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-xl hover:shadow-[#E39F21]/20 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                Empezar el cambio
                                <ArrowRight size={18} />
                            </button>
                            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-all text-white font-medium backdrop-blur-sm">
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
                    className="relative h-[500px] md:h-[700px] rounded-t-full overflow-hidden border-b-0 border border-white/20 bg-white/5 backdrop-blur-sm order-1 md:order-2 shadow-2xl group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#92A17C] via-transparent to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity duration-700" />
                    <img
                        src="/javier_hero_new.png"
                        alt="Javier González"
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000"
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
    );
};

// ================= MÉTODO E.C.E =================
const Method = () => {
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

// ================= SERVICIOS =================
const Services = () => {
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

                    <div className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer">
                        <img
                            src="/services_personas_new.jpg"
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

// ================= RESOURCES (New Style) =================
const Resources = () => {
    return (
        <section id="recursos" className="py-24 bg-[#F4F1EA]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-[#E39F21] font-bold tracking-widest text-xs uppercase mb-3 block">Recursos</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#2C3325]">
                            Herramientas de vida
                        </h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-[#92A17C] font-bold border-b border-[#92A17C] pb-1 hover:text-[#76805C] transition-colors mt-6 md:mt-0">
                        Ver todas las publicaciones <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Resource 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-40 shrink-0 transform group-hover:-rotate-3 transition-transform duration-500">
                            <img src="/book_angel_cover.png" alt="Libro Angel" className="w-full h-auto rounded shadow-lg" />
                            {/* Fallback color if image fails */}
                            <div className="w-full h-56 bg-[#76805C] rounded flex items-center justify-center text-white/20 hidden">
                                <BookOpen size={40} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-[#2C3325] mb-3">ÁNGEL: Inteligencia Emocional</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                Una guía profunda para entender cómo nuestras emociones moldean nuestra realidad y transforman conversaciones.
                            </p>
                            <span className="text-[#E39F21] font-bold text-sm tracking-wide uppercase cursor-pointer group-hover:underline">Adquirir Libro</span>
                        </div>
                    </div>

                    {/* Resource 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-40 shrink-0 transform group-hover:rotate-3 transition-transform duration-500">
                            <img src="/diario_emocional_cover.png" alt="Diario Emocional" className="w-full h-auto rounded shadow-lg" />
                            {/* Fallback */}
                            <div className="w-full h-56 bg-[#E39F21] rounded flex items-center justify-center text-white/20 hidden">
                                <BookOpen size={40} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-[#2C3325] mb-3">Diario Emocional 2025</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                Tu compañero diario para el autoconocimiento. Registra, analiza y comprende tu paisaje emocional.
                            </p>
                            <span className="text-[#E39F21] font-bold text-sm tracking-wide uppercase cursor-pointer group-hover:underline">Reservar Copia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ================= CONTACTO =================
const Contact = () => {
    return (
        <section id="contacto" className="py-24 bg-[#F4F1EA] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#92A17C]/5 -skew-x-12 transform origin-top-right" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    <div className="md:w-2/5 bg-[#2C3325] text-white p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
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
                            </div>
                        </div>

                        <div className="mt-12">
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block">Sígueme</span>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/javier.inteligencia.emocional/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E39F21] transition-colors"><Instagram /></a>
                                <a href="https://www.linkedin.com/in/gonzacoach/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E39F21] transition-colors"><Linkedin /></a>
                                <a href="https://www.facebook.com/profile.php?id=100000117865506" target="_blank" rel="noopener noreferrer" className="hover:text-[#E39F21] transition-colors"><Facebook /></a>
                                <a href="https://www.youtube.com/@JavierG.IEmocional" target="_blank" rel="noopener noreferrer" className="hover:text-[#E39F21] transition-colors"><Youtube /></a>
                                <a href="https://www.tiktok.com/@javierg.iemocional" target="_blank" rel="noopener noreferrer" className="hover:text-[#E39F21] transition-colors">
                                    {/* TikTok Icon SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-2"><path d="M9 18V5l12-2v13" /><path d="M6 18a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3h0c.4 0 .9.1 1.4.2V18z" /><circle cx="18" cy="16" r="3" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

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

// ================= MAIN LANDING PAGE COMPONENT =================
const LandingPage = () => {
    return (
        <div className="bg-[#F4F1EA] font-sans antialiased text-[#2C3325]">
            <Hero />
            <Method />
            <Services />
            <Resources />
            <Contact />
        </div>
    );
};

export default LandingPage;
