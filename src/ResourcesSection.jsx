/* --- RESOURCES SECTION --- */
const ResourcesSection = () => {
    return (
        <section id="recursos" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#E36414] font-bold tracking-widest text-xs uppercase mb-3 block">Herramientas</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#0F4C5C]">Publicaciones</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#E36414] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                            <img src="/assets/book_angel.png" alt="Libro Angel" className="relative w-64 md:w-80 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 rounded-lg" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-serif text-[#0F4C5C]">ÁNGEL: Inteligencia Emocional y conversaciones que dan VIDA</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Una guía profunda para entender cómo nuestras emociones moldean nuestra realidad. Descubre las claves para transformar tus conversaciones internas y externas.
                        </p>
                        <button className="text-[#E36414] font-bold tracking-wide uppercase border-b-2 border-[#E36414] pb-1 hover:text-[#0F4C5C] hover:border-[#0F4C5C] transition-all">
                            Adquirir Libro
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 order-2 md:order-1"
                    >
                        <h3 className="text-3xl font-serif text-[#0F4C5C]">Diario Emocional 2026</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Tu compañero diario para el autoconocimiento. Un espacio estructurado para registrar, analizar y comprender tu paisaje emocional día a día.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-600"><div className="w-2 h-2 bg-[#E36414] rounded-full" /> Ejercicios de reflexión diaria</li>
                            <li className="flex items-center gap-3 text-gray-600"><div className="w-2 h-2 bg-[#E36414] rounded-full" /> Seguimiento de patrones anímicos</li>
                        </ul>
                        <button className="text-[#E36414] font-bold tracking-wide uppercase border-b-2 border-[#E36414] pb-1 hover:text-[#0F4C5C] hover:border-[#0F4C5C] transition-all">
                            Reservar Ejemplar
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center order-1 md:order-2"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#FB8B24] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                            <img src="/assets/journal_2026.png" alt="Diario Emocional" className="relative w-64 md:w-80 shadow-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500 rounded-lg" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
