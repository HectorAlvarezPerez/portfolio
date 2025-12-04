import { motion } from 'framer-motion';

const About = () => {
    const skills = {
        "Languages": ["Python", "SQL"],
        "ML & Data": ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "GenAI", "LangChain"],
        "MLOps & Cloud": ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Git"],
        "Databases": ["MongoDB", "Neo4j", "Amazon RDS"]
    };

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-white mr-4">About Me</h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                I hold a BSc in <span className="text-primary">Computational Mathematics and Data Analysis</span>.
                                I am passionate about building predictive models and deploying them into production environments
                                using <span className="text-secondary">MLOps best practices</span>.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                My work bridges the gap between theoretical statistics and practical software engineering,
                                ensuring that data-driven insights are not just accurate but also scalable and actionable.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
                            <div className="space-y-6">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category}>
                                        <h4 className="text-sm font-mono text-gray-500 mb-3">{category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-gray-800/50 text-primary text-sm rounded border border-gray-700/50 hover:border-primary/50 transition-colors cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
