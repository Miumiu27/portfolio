import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, ExternalLink, ChevronDown, Terminal, Code2, Database, Smartphone, Zap } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SectionHeading = ({ children, number }: { children: React.ReactNode, number: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className="flex items-end gap-4 mb-12 md:mb-20"
    >
      <span className="text-4xl md:text-6xl font-display font-light text-[var(--color-neon-green)] opacity-80 leading-none">
        {number}.
      </span>
      <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">
        {children}
      </h2>
      <div className="h-px bg-white/10 flex-grow mb-2 hidden md:block"></div>
    </motion.div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(heroScroll, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-neon-green)] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:px-12 flex justify-between items-center z-40 mix-blend-difference">
        <div className="font-display font-bold text-xl tracking-wider">AM.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="hover:text-[var(--color-neon-green)] transition-colors">À propos</a>
          <a href="#experience" className="hover:text-[var(--color-neon-green)] transition-colors">Expériences</a>
          <a href="#projects" className="hover:text-[var(--color-neon-green)] transition-colors">Projets</a>
          <a href="#contact" className="hover:text-[var(--color-neon-green)] transition-colors">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-20">
          <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
            <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[var(--color-neon-green)]/5 blur-[120px] mix-blend-screen" />
          </motion.div>

          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-[var(--color-neon-green)] font-mono mb-4 text-sm md:text-base tracking-wider">
                  &lt;Hello World /&gt; Je suis
                </p>
                <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.9] tracking-tighter uppercase mb-2">
                  Andoniaina <br/>
                  <span className="text-stroke">Miora.</span>
                </h1>
                <h2 className="text-2xl md:text-4xl text-gray-400 font-light mt-6 mb-8 max-w-2xl">
                  Développeuse Web Fullstack & Mobile.
                </h2>
                <p className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
                  Je conçois et développe des solutions numériques robustes, esthétiques et performantes. De la logique backend complexe aux interfaces utilisateur fluides.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="px-8 py-4 bg-[var(--color-neon-green)] text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors">
                    Voir mes projets
                  </a>
                  <a href="#contact" className="px-8 py-4 border border-white/20 hover:border-[var(--color-neon-green)] hover:text-[var(--color-neon-green)] transition-colors uppercase tracking-wider text-sm">
                    Me contacter
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="col-span-1 md:col-span-4 hidden md:flex flex-col justify-end pb-12">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col gap-6 items-end"
              >
                <div className="w-px h-24 bg-white/20"></div>
                <div className="flex flex-col gap-4">
                  <a href="https://github.com/Miumiu27" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[var(--color-neon-green)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                  </a>
                  <a href="mailto:miorarakotomalala28@gmail.com" className="text-gray-500 hover:text-[var(--color-neon-green)] transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-[var(--color-dark-surface)] relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeading number="01">À propos de moi</SectionHeading>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="text-lg md:text-xl text-gray-400 space-y-6 leading-relaxed font-light"
              >
                <p>
                  Persévérante, rigoureuse et avide d'apprentissage, je m'investis pleinement dans tout ce que j'entreprends. Mon approche du développement ne se limite pas à écrire du code, mais à <strong className="text-white font-normal">résoudre des problèmes réels</strong> à travers des expériences numériques fluides.
                </p>
                <p>
                  Diplômée d'une Licence en Informatique à l'ESTI et actuellement en Master 1 à l'ESMIA, je considère chaque défi comme une opportunité de consolider mes bases et de repousser mes limites techniques.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                    <h4 className="text-[var(--color-neon-green)] font-mono text-xl mb-1">Agilité</h4>
                    <p className="text-sm text-gray-500">Adaptation rapide</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                    <h4 className="text-[var(--color-neon-green)] font-mono text-xl mb-1">Équipe</h4>
                    <p className="text-sm text-gray-500">Collaboration</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-2 gap-4"
              >
                <motion.div variants={fadeIn} className="bg-black/50 p-6 border border-white/5 hover:border-[var(--color-neon-green)]/50 transition-colors group">
                  <Terminal className="text-[var(--color-neon-green)] mb-4" size={32} />
                  <h3 className="text-white font-medium mb-2">Frontend</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">ReactJS, NextJS, Nuxt, Tailwind CSS, HTML/CSS, JS</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-black/50 p-6 border border-white/5 hover:border-[var(--color-neon-green)]/50 transition-colors group translate-y-8">
                  <Database className="text-[var(--color-neon-green)] mb-4" size={32} />
                  <h3 className="text-white font-medium mb-2">Backend</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">Node.js, NestJS, Express, Django, Laravel, SpringBoot</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-black/50 p-6 border border-white/5 hover:border-[var(--color-neon-green)]/50 transition-colors group">
                  <Smartphone className="text-[var(--color-neon-green)] mb-4" size={32} />
                  <h3 className="text-white font-medium mb-2">Mobile</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">React Native, Expo, Quasar</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-black/50 p-6 border border-white/5 hover:border-[var(--color-neon-green)]/50 transition-colors group translate-y-8">
                  <Zap className="text-[var(--color-neon-green)] mb-4" size={32} />
                  <h3 className="text-white font-medium mb-2">Data & Outils</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">MongoDB, PostgreSQL, MySQL, Apps Script</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 md:py-40 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeading number="02">Parcours Pro</SectionHeading>
            
            <div className="space-y-24">
              {/* Exp 1 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/10 -ml-12"></div>
                <div className="hidden md:block absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--color-neon-green)] -ml-[54px] shadow-[0_0_10px_var(--color-neon-green)]"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Constellation Group</h3>
                  <span className="text-[var(--color-neon-green)] font-mono text-sm md:text-base">Mai 2025 — Présent</span>
                </div>
                <h4 className="text-xl text-gray-300 mb-6 font-light">Développeur Fullstack & Mobile</h4>
                
                <div className="bg-[var(--color-dark-surface)] p-6 md:p-8 border-l-2 border-[var(--color-neon-green)]/30 hover:border-[var(--color-neon-green)] transition-colors">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Développement de bout en bout d'une solution e-santé. L'objectif : digitaliser la gestion des dispensaires et optimiser le suivi patient.
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-6 font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--color-neon-green)] mt-1">▹</span>
                      Conception d'une plateforme web robuste avec Nuxt.js et NestJS.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--color-neon-green)] mt-1">▹</span>
                      Déploiement d'une application mobile cross-platform via Quasar.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {['Nuxt.js', 'NestJS', 'Quasar', 'Fullstack'].map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 bg-white/5 text-[var(--color-neon-green)] rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Exp 2 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-white/10 -ml-12"></div>
                <div className="hidden md:block absolute left-0 top-2 w-3 h-3 rounded-full bg-white/30 -ml-[54px]"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Groupe Taloumis / SFI</h3>
                  <span className="text-gray-500 font-mono text-sm md:text-base">Déc 2023 — Déc 2024</span>
                </div>
                <h4 className="text-xl text-gray-300 mb-6 font-light">Alternante - Développeur & Support</h4>
                
                <div className="bg-[var(--color-dark-surface)] p-6 md:p-8 border-l-2 border-white/10 hover:border-white/30 transition-colors">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Double casquette technique : développement d'outils internes sur mesure et assistance technique pour améliorer la productivité des équipes.
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-6 font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--color-neon-green)] mt-1">▹</span>
                      Création d'un outil de suivi de projet intégré avec ReactJS et Django REST API.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--color-neon-green)] mt-1">▹</span>
                      Automatisation des workflows Google Sheets via des macros Apps Script complexes.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {['ReactJS', 'Django REST', 'Apps Script', 'Google Workspace'].map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 bg-white/5 text-gray-400 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 md:py-40 px-6 md:px-12 bg-[var(--color-dark-surface)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-neon-green)]/5 blur-[150px] pointer-events-none mix-blend-screen translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeading number="03">Cas Pratiques</SectionHeading>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              
              {/* Project 1 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="group relative bg-black border border-white/5 hover:border-[var(--color-neon-green)]/50 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className="p-8 flex-grow flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <Code2 className="text-[var(--color-neon-green)]" size={32} />
                      <a href="#" className="text-gray-500 hover:text-[var(--color-neon-green)] transition-colors"><ExternalLink size={24} /></a>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[var(--color-neon-green)] transition-colors">Medic'Alert</h3>
                    <p className="text-gray-400 leading-relaxed font-light mb-6">
                      Application mobile d'assistance. Permet de scanner des ordonnances et d'alerter en cas de difficulté. Intégration de l'IA (Gemini & ChatGPT) pour analyser les traitements médicaux.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-500">
                    <span>React Native</span>
                    <span>Expo</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>IA API</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-neon-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Project 2 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="group relative bg-black border border-white/5 hover:border-[var(--color-neon-green)]/50 transition-all duration-500 overflow-hidden flex flex-col h-full lg:translate-y-12"
              >
                <div className="p-8 flex-grow flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <Code2 className="text-[var(--color-neon-green)]" size={32} />
                      <a href="#" className="text-gray-500 hover:text-[var(--color-neon-green)] transition-colors"><ExternalLink size={24} /></a>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[var(--color-neon-green)] transition-colors">IndepWeb</h3>
                    <p className="text-gray-400 leading-relaxed font-light mb-6">
                      Plateforme de mise en relation B2B. Conçue spécifiquement pour faciliter la recherche de missions et d'opportunités d'emploi pour les freelances basés en Afrique.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-500">
                    <span>Fullstack</span>
                    <span>Web Platform</span>
                    <span>UI/UX</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-neon-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Project 3 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="group relative bg-black border border-white/5 hover:border-[var(--color-neon-green)]/50 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className="p-8 flex-grow flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <Code2 className="text-[var(--color-neon-green)]" size={32} />
                      <a href="#" className="text-gray-500 hover:text-[var(--color-neon-green)] transition-colors"><ExternalLink size={24} /></a>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[var(--color-neon-green)] transition-colors">Planificateur de Cours</h3>
                    <p className="text-gray-400 leading-relaxed font-light mb-6">
                      Solution de gestion académique. Synchronisation bidirectionnelle avec Google Calendar API pour optimiser l'emploi du temps des établissements scolaires.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-500">
                    <span>Laravel</span>
                    <span>React</span>
                    <span>Google Calendar API</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-neon-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Project 4 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="group relative bg-black border border-white/5 hover:border-[var(--color-neon-green)]/50 transition-all duration-500 overflow-hidden flex flex-col h-full lg:translate-y-12"
              >
                <div className="p-8 flex-grow flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <Code2 className="text-[var(--color-neon-green)]" size={32} />
                      <a href="#" className="text-gray-500 hover:text-[var(--color-neon-green)] transition-colors"><ExternalLink size={24} /></a>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-[var(--color-neon-green)] transition-colors">E-commerce MERN</h3>
                    <p className="text-gray-400 leading-relaxed font-light mb-6">
                      Architecture e-commerce complète intégrant un catalogue de produits, un panier dynamique et un back-office de gestion des commandes.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-500">
                    <span>MongoDB</span>
                    <span>Express</span>
                    <span>React</span>
                    <span>Node.js</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-neon-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 md:py-48 px-6 md:px-12 text-center flex flex-col items-center justify-center relative">
          <SectionHeading number="04">Me Contacter</SectionHeading>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 uppercase tracking-tighter">
              Une idée en tête ?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
              Que ce soit pour une opportunité professionnelle, un projet freelance, ou juste pour dire bonjour, ma boîte de réception est toujours ouverte.
            </p>
            <a 
              href="mailto:miorarakotomalala28@gmail.com" 
              className="inline-block px-10 py-5 bg-transparent border border-[var(--color-neon-green)] text-[var(--color-neon-green)] font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-neon-green)] hover:text-black transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">Lancer la discussion</span>
              <div className="absolute inset-0 bg-[var(--color-neon-green)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-600 font-mono text-sm border-t border-white/5">
        <p>
          Designé & Développé avec passion par Andoniaina Miora <br className="md:hidden" />
          <span className="hidden md:inline"> • </span> 
          Antananarivo, Madagascar
        </p>
      </footer>
    </div>
  );
}

export default App;
