import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Machine Learning Engineer Intern",
            company: "Aily Labs",
            period: "Oct 2024 - Present",
            focus: "Decision Intelligence & Agentic AI",
            details: [
                "Engineered Agentic AI workflows using LangChain and LLMs for Finance/Supply Chain.",
                "Developed scalable MLOps pipelines on AWS using Docker and Kubernetes to reduce deployment time."
            ]
        },
        {
            role: "Data Scientist Intern",
            company: "Altia-IN2",
            period: "Jul 2024 - Aug 2024",
            details: [
                "Architected a synthetic data generation pipeline for medical formats enabling privacy-compliant testing.",
                "Developed end-to-end automation solutions."
            ]
        },
        {
            role: "Computer Vision Researcher",
            company: "CVC",
            period: "Oct 2023 - Feb 2024",
            focus: "Domain Adaptation in Semantic Segmentation",
            details: [
                "Fine-tuned segmentation models using LoRA (Low-Rank Adaptation).",
                "Implemented Active Test-Time Adaptation (ATTA) for challenging weather conditions."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl font-bold text-white mr-4">Experience</h2>
                        <div className="h-px bg-gray-700 flex-grow"></div>
                    </div>

                    <div className="relative border-l border-gray-700 ml-3 md:ml-6 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-dark"></div>

                                <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <span className="text-sm font-mono text-gray-500">{exp.period}</span>
                                </div>

                                <div className="text-primary font-medium mb-4">@ {exp.company}</div>

                                {exp.focus && (
                                    <div className="text-sm text-gray-400 mb-2 italic">Focus: {exp.focus}</div>
                                )}

                                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
