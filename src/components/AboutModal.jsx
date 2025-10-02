import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const AboutModal = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.1,
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className="bg-[var(--bg-surface)] rounded-xl p-8 max-w-2xl w-full mx-4 relative max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-[var(--text-primary)] text-3xl hover:text-[var(--accent-color)] transition-colors duration-200"
                        >
                            &times;
                        </button>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                                <motion.img
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    src="/2470.jpg"
                                    alt="Kevin Ruangrad"
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                                <div>
                                    <motion.h2
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 0.5,
                                        }}
                                        className="text-[var(--text-primary)] text-3xl font-bold mb-2"
                                    >
                                        About Me
                                    </motion.h2>
                                    <motion.h3
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.6,
                                            duration: 0.5,
                                        }}
                                        className="text-[var(--accent-color)] text-xl font-semibold"
                                    >
                                        Kevin Ruangrad - Frontend Developer
                                    </motion.h3>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="space-y-4"
                            >
                                <div>
                                    <h4 className="text-[var(--text-primary)] text-lg font-semibold mb-2">
                                        My Journey
                                    </h4>
                                    <p className="text-[#b0b0b0] text-base leading-relaxed">
                                        I&apos;m a passionate Frontend Developer
                                        currently studying at Grit Academy in
                                        Malmö, Sweden. My journey into web
                                        development began with a fascination for
                                        creating digital experiences that
                                        combine beautiful design with functional
                                        code. I believe that great user
                                        interfaces are the bridge between
                                        complex technology and human needs.
                                    </p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    <h4 className="text-[var(--text-primary)] text-lg font-semibold mb-2">
                                        What I Do
                                    </h4>
                                    <p className="text-[#b0b0b0] text-base leading-relaxed">
                                        I specialize in modern frontend
                                        technologies including React,
                                        JavaScript, HTML, and CSS. My focus is
                                        on creating responsive, accessible, and
                                        performant web applications. I enjoy
                                        working with motion design and
                                        animations to bring interfaces to life,
                                        always keeping user experience at the
                                        forefront of my development process.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                >
                                    <h4 className="text-[var(--text-primary)] text-lg font-semibold mb-2">
                                        Beyond Code
                                    </h4>
                                    <p className="text-[#b0b0b0] text-base leading-relaxed">
                                        When I&apos;m not coding, you can find
                                        me exploring new design trends,
                                        experimenting with new technologies, or
                                        enjoying the beautiful city of Malmö. I
                                        believe in continuous learning and
                                        staying up-to-date with the
                                        ever-evolving world of frontend
                                        development. I&apos;m always excited to
                                        take on new challenges and collaborate
                                        on innovative projects.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0, duration: 0.5 }}
                                    className="flex flex-wrap gap-3 mt-6"
                                >
                                    <h4 className="text-[var(--text-primary)] text-lg font-semibold mb-2 w-full">
                                        Skills & Technologies
                                    </h4>
                                    {[
                                        "React",
                                        "JavaScript",
                                        "HTML5",
                                        "CSS3",
                                        "Tailwind CSS",
                                        "Motion/Framer Motion",
                                        "Git",
                                        "Node.js",
                                        "Responsive Design",
                                    ].map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 1.1 + index * 0.1,
                                                duration: 0.3,
                                            }}
                                            className="bg-[var(--accent-color)] text-white px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

AboutModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AboutModal;
