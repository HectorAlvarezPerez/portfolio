import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-mono text-lg mb-4 block"
                    >
                        Hi, my name is
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
                    >
                        Héctor Álvarez Pérez.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-gray-400 mb-6 leading-tight"
                    >
                        Data Scientist & <br className="hidden md:block" />
                        <span className="text-secondary">Machine Learning Engineer</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
                    >
                        Bridging the gap between statistical analysis and scalable software solutions.
                        Based in <span className="text-white">Barcelona, Spain</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary/10 text-primary border border-primary/50 rounded hover:bg-primary/20 transition-all duration-300 flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/cv.pdf"
                            download="Hector_Alvarez_CV.pdf"
                            className="px-8 py-4 bg-gray-800 text-white border border-gray-700 rounded hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
                        >
                            Download CV
                            <Download size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
