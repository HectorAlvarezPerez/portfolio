import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-dark"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-primary rounded-full blur-xl"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: Math.random() * 0.5,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: Math.random() * 0.5,
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                        style={{
                            width: `${Math.random() * 300 + 50}px`,
                            height: `${Math.random() * 300 + 50}px`,
                        }}
                    />
                ))}
            </div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};

export default Background;
