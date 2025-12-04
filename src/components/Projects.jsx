import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "AI ChatBot for Telemedicine",
            event: "HackUAB 2025",
            stack: ["Python", "React", "NLP APIs"],
            desc: "Full-stack telemedicine platform with an AI medical assistant and doctor management system.",
            links: { github: "#", external: "#" }
        },
        {
            title: "LaLiga Fantasy Price Predictor",
            stack: ["Python", "Scikit-learn", "BeautifulSoup"],
            desc: "Regression-based ML model to forecast player prices using features engineered from scraped stats.",
            links: { github: "#" }
        },
        {
            title: "Image Captioning with Deep Learning",
            stack: ["PyTorch", "CNN", "LSTM"],
            desc: "Encoder-Decoder architecture to generate natural language descriptions for images automatically.",
            links: { github: "#" }
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-white mr-4">Featured Projects</h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass p-8 rounded-lg flex flex-col h-full group hover:border-primary/30 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <Folder size={40} className="text-primary" />
                                    <div className="flex space-x-4">
                                        {project.links.github && (
                                            <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.links.external && (
                                            <a href={project.links.external} className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                {project.event && (
                                    <span className="text-xs font-mono text-secondary mb-2 block">{project.event}</span>
                                )}

                                <p className="text-gray-400 mb-6 flex-grow">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-gray-500">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
