import PropTypes from "prop-types";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faGlobe,
    faLink,
} from "@fortawesome/free-solid-svg-icons";
import InfinteScroll from "./InfinteScroll.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const ProjectModal = ({ open, onClose, project }) => {
    if (!open || !project) return null;
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={onClose} // Close when clicking the background
        >
            <div
                className="bg-[var(--bg-surface)] rounded-xl p-8 max-w-lg w-full relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-[var(--text-primary)] text-2xl"
                >
                    &times;
                </button>
                <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full max-h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-[var(--text-primary)] text-2xl font-bold mb-2">
                    {project.title}
                </h3>
                <p className="text-[#b0b0b0] text-lg">{project.description}</p>
            </div>
        </div>
    );
};

ProjectModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    project: PropTypes.shape({
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export const Flexboxes = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            img: "/assets/ScrumBoard.png",
            alt: "Scrumboard",
            title: "Scrumboard",
            description: (
                <>
                    A digital scrumboard for agile project management, featuring
                    drag-and-drop tasks and real-time updates.
                    <br />
                    <a
                        href="https://github.com/KevinRuangrad/FE24-JS2-slutprojekt-front-kevin-ruangrad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-color)] underline mt-2"
                    >
                        View on GitHub
                    </a>
                </>
            ),
        },
        {
            img: "/assets/TMDB.png",
            alt: "TMDB",
            title: "TMDB",
            description: (
                <>
                    A movie database web app inspired by IMDb, built using The
                    Movie Database (TMDB) API. Browse, search, and discover
                    movies with detailed information and images.
                    <br />
                    <a
                        href="https://github.com/KevinRuangrad/fe24-js1-slutprojekt-kevin-ruangrad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-color)] underline mt-2"
                    >
                        View on GitHub
                    </a>
                </>
            ),
        },
        {
            img: "/assets/TRAINING.png",
            alt: "TRAINING",
            title: "TRAINING DIARY",
            description: (
                <>
                    A full stack training diary app where you can add, update,
                    and track your workouts. Built with a custom SQL database,
                    JavaScript, and both frontend and backend code.
                    <br />
                    <a
                        href="https://github.com/KevinRuangrad/fe24-js1-slutprojekt-kevin-ruangrad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-color)] underline mt-2"
                    >
                        View on GitHub
                    </a>
                </>
            ),
        },
        {
            img: "/assets/MESSAGEBOARD.png",
            alt: "Messageboard",
            title: "MESSAGEBOARD",
            description: (
                <>
                    GritSquare is a web application that allows users to post,
                    view, and manage messages in a dynamic and interactive
                    interface. It features dark mode, message sorting, search
                    functionality, and fun animations. This was a group project
                    where I acted as group leader and directed the final
                    versions commits.
                    <br />
                    <a
                        href="https://github.com/KevinRuangrad/fe24-versionshantering-gritsquare-grupp1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-color)] underline mt-2"
                    >
                        View on GitHub
                    </a>
                </>
            ),
        },
    ];

    return (
        <motion.div
            id="home"
            initial="initial"
            animate="animate"
            transition={{
                staggerChildren: 0.04,
            }}
            className="mx-2 m-6 grid grid-cols-4 gap-4 justify-end w-full"
        >
            <Block
                height="h-full"
                width="col-span-2"
                className="px-[48px] py-[40px]"
            >
                <img
                    src="/2470.jpg" // Update the path to reference the public folder
                    alt="avatar"
                    className="mb-4 size-24 rounded-full"
                />
                <h1 className="text-[var(--text-primary)] text-[62px] font-medium items-start tracking-tighter leading-[72px]">
                    Kevin Ruangrad is a Frontend Developer
                </h1>
                <h2 className="text-[#8a8a93] text-[64px] font-medium items-start tracking-tighter leading-[72px]">
                    currently studying in Grit Academy
                </h2>
            </Block>
            <Block
                height="h-full"
                width="col-span-2 flex justify-center items-center flex-col"
                className="px-[48px] py-[40px]"
            >
                <FontAwesomeIcon
                    className="text-[var(--text-primary)] text-8xl"
                    icon={faLink}
                />
                <h2 className="text-[var(--text-primary)] text-[64px] font-medium items-start tracking-tighter leading-[72px] text-center m-8">
                    Have a project in mind?
                </h2>
                <a
                    href="mailto:kevin.ruangrad@outlook.com"
                    className="button-link"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[var(--accent-color)] cursor-pointer text-white rounded-full px-[32px] py-[24px] min-h-24 w-auto font-medium text-3xl self-center ml-8"
                    >
                        kevin.ruangrad@outlook.com
                    </motion.button>
                </a>
            </Block>
            <Block
                height="h-14"
                width="col-span-1"
                className="flex text-center justify-center"
            >
                <a
                    href="https://www.linkedin.com/in/kevin-ruangrad-0696232b2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link"
                >
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileDrag={{ scale: 0.9, rotate: 10 }}
                        drag
                        className="text-[var(--text-primary)] text-[20px] font-medium tracking-tighter hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer"
                        style={{
                            height: "100%",
                            width: "100%",
                        }} /* Ensure the button takes the full height and width of the a tag */
                    >
                        Linkedin
                    </motion.button>
                </a>
            </Block>
            <Block
                height="h-14"
                width="col-span-1"
                className="flex text-center justify-center"
            >
                <a
                    href="https://github.com/KevinRuangrad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link"
                >
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileDrag={{ scale: 0.9, rotate: 10 }}
                        drag
                        className="text-[var(--text-primary)] text-[20px] font-medium tracking-tighter hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer"
                        style={{
                            height: "100%",
                            width: "100%",
                        }} /* Ensure the button takes the full height and width of the a tag */
                    >
                        Github
                    </motion.button>
                </a>
            </Block>
            <Block
                height="h-14"
                width="col-span-1"
                className="flex text-center justify-center"
            >
                <a
                    href="https://www.facebook.com/kruangrad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-link"
                >
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileDrag={{ scale: 0.9, rotate: 10 }}
                        drag
                        className="text-[var(--text-primary)] text-[20px] font-medium tracking-tighter hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer"
                        style={{
                            height: "100%",
                            width: "100%",
                        }} /* Ensure the button takes the full height and width of the a tag */
                    >
                        Facebook
                    </motion.button>
                </a>
            </Block>
            <Block
                height="h-14"
                width="col-span-1"
                className="flex text-center justify-center"
            >
                <a
                    href="/Kevin_Ruangrad_CV_frontend.pdf"
                    download
                    className="button-link"
                    rel="noopener noreferrer"
                >
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileDrag={{ scale: 0.9, rotate: 10 }}
                        drag
                        className="text-[var(--text-primary)] text-[20px] font-medium tracking-tighter hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer"
                        style={{
                            height: "100%",
                            width: "100%",
                        }} /* Ensure the button takes the full height and width of the a tag */
                    >
                        Download CV
                    </motion.button>
                </a>
            </Block>
            <Block
                height="h-full"
                width="col-span-1"
                className="px-[48px] py-[40px]"
            >
                <FontAwesomeIcon
                    className="text-[var(--text-primary)] text-8xl text-left"
                    icon={faGlobe}
                />
                <h2 className="text-[var(--text-primary)] text-[64px] font-medium items-start tracking-tighter leading-[72px] pt-6">
                    Based in Malmö, Sweden
                </h2>
                <h2 className="text-[#8a8a93] text-[64px] font-medium items-start tracking-tighter leading-[72px]">
                    GMT+1
                </h2>
            </Block>
            <Block
                height="h-full"
                width="col-span-3"
                className="px-[48px] py-[40px]"
            >
                <h2 className="text-[var(--text-primary)] text-[50px] font-medium items-start tracking-tighter leading-[60px]">
                    As a{" "}
                    <span className="text-[var(--accent-color)]">
                        Frontend Developer
                    </span>
                    , I specialize in building seamless, user-friendly
                    interfaces for digital products.
                </h2>
                <h2 className="text-[#8a8a93] text-[50px] font-medium items-start tracking-tighter leading-[60px]">
                    I believe that great user experiences are built on a
                    foundation of clear communication, a deep understanding of
                    the audience, and a passion for clean, efficient code.
                </h2>
            </Block>
            <Block
                height="h-full"
                width="col-span-4"
                className="px-[48px] py-[40px]"
            >
                <InfinteScroll>
                    <div style={{ width: "100%" }}>
                        {/* Your content here */}
                    </div>
                </InfinteScroll>
            </Block>
            <Block
                id="work"
                height="h-[740]"
                width="col-span-4"
                className="px-[48px] py-[40px] flex flex-col"
            >
                <div className="w-full h-20 pb-6 bg-[var(--bg-surface)] flex items-center justify-between">
                    <div className="flex items-center">
                        <FontAwesomeIcon
                            className="text-[var(--text-primary)] text-6xl mr-2"
                            icon={faBriefcase}
                        />
                        <h2 className="text-[var(--text-primary)] text-[40px] font-medium tracking-tighter ml-4">
                            Projects
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap shadow-inner bg-[var(--bg-surface)]">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: true }}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="w-full rounded-xl"
                    >
                        {projects.map((project, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={project.img}
                                    alt={project.alt}
                                    className="w-full max-h-[500px] object-cover cursor-pointer"
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setModalOpen(true);
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <ProjectModal
                        open={modalOpen}
                        onClose={() => setModalOpen(false)}
                        project={selectedProject}
                    />
                </div>
            </Block>
        </motion.div>
    );
};

const Block = ({ id, height, width, className, children }) => {
    return (
        <motion.div
            id={id}
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
                duration: 0.5,
            }}
            className={`${height} ${width} ${className} rounded-3xl bg-[var(--bg-surface)]`}
        >
            {children}
        </motion.div>
    );
};

Block.propTypes = {
    id: PropTypes.string,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};
