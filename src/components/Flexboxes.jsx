import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGlobe,
  faInfo,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import InfinteScroll from "./InfinteScroll.jsx";

export const Flexboxes = () => {
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
      <Block height="h-full" width="col-span-2" className="px-[48px] py-[40px]">
        <img
          src="/2470.jpg" // Update the path to reference the public folder
          alt="avatar"
          className="mb-4 size-24 rounded-full"
        />
        <h1 className="text-white text-[62px] font-medium items-start tracking-tighter leading-[72px]">
          kevin ruangrad is a frontend developer
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
        <FontAwesomeIcon className="text-white text-8xl" icon={faLink} />
        <h2 className="text-white text-[64px] font-medium items-start tracking-tighter leading-[72px] text-center m-8">
          have a project in mind?
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ff5e1a] cursor-pointer text-white rounded-full px-[32px] py-[24px] min-h-24 w-auto font-medium text-3xl self-end"
        >
          kevin.ruangrad@gritacademy.se
        </motion.button>
      </Block>
      <Block
  height="h-14"
  width="col-span-1"
  className="flex text-center justify-center"
>
  <a href="https://www.linkedin.com/in/kevin-ruangrad-0696232b2/" target="_blank" rel="noopener noreferrer" className="button-link">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.9, rotate: 10 }}
      drag
      className="text-white text-[20px] font-medium tracking-tighter"
      style={{ height: '100%', width: '100%' }} /* Ensure the button takes the full height and width of the a tag */
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
  <a href="https://github.com/KevinRuangrad" target="_blank" rel="noopener noreferrer" className="button-link">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.9, rotate: 10 }}
      drag
      className="text-white text-[20px] font-medium tracking-tighter"
      style={{ height: '100%', width: '100%' }} /* Ensure the button takes the full height and width of the a tag */
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
  <a href="https://www.facebook.com/kruangrad/?locale=sv_SE" target="_blank" rel="noopener noreferrer" className="button-link">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.9, rotate: 10 }}
      drag
      className="text-white text-[20px] font-medium tracking-tighter"
      style={{ height: '100%', width: '100%' }} /* Ensure the button takes the full height and width of the a tag */
    >
      Facebook
    </motion.button>
  </a>
</Block>

      <Block height="h-full" width="col-span-4" className="px-[48px] py-[40px]">
        <InfinteScroll>
          <div style={{ width: "100%" }}>
            {/* Your content here */}
          </div>
        </InfinteScroll>
      </Block>
      <Block
        height="h-full"
        width="col-span-1"
        className="px-[48px] py-[40px]"
      >
        <FontAwesomeIcon
          className="text-white text-8xl text-left"
          icon={faGlobe}
        />
        <h2 className="text-white text-[64px] font-medium items-start tracking-tighter leading-[72px] pt-6">
          Based in Malmö, Sweden
        </h2>
        <h2 className="text-[#8a8a93] text-[64px] font-medium items-start tracking-tighter leading-[72px]">
          GMT+1
        </h2>
      </Block>
      <Block height="h-full" width="col-span-3" className="px-[48px] py-[40px]">
        <h2 className="text-white text-[50px] font-medium items-start tracking-tighter leading-[60px]">
          As a <span className="text-[#ff5e1a]">frontend developer</span>, I
          specialize in building seamless, user-friendly interfaces for digital
          products.
        </h2>
        <h2 className="text-[#8a8a93] text-[50px] font-medium items-start tracking-tighter leading-[60px]">
          I believe that great user experiences are built on a foundation of
          clear communication, a deep understanding of the audience, and a
          passion for clean, efficient code.
        </h2>
      </Block>
      <Block height="h-full" width="col-span-4" className="px-[48px] py-[40px]">
        <InfinteScroll>
          <div style={{ width: "100%" }}>{/* Your content here */}</div>
        </InfinteScroll>
      </Block>
      <Block
        id="work"
        height="h-[740]"
        width="col-span-4"
        className="px-[48px] py-[40px] flex flex-col"
      >
        <div className="w-full h-20 pb-6 bg-[#131315] flex items-center justify-between">
          <div className="flex items-center">
            <FontAwesomeIcon
              className="text-white text-6xl mr-2"
              icon={faBriefcase}
            />
            <h2 className="text-white text-[40px] font-medium tracking-tighter ml-4">
              projects
            </h2>
          </div>
          <motion.button
            className="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon
              className="text-white text-4xl bg-[#ff5e1a] rounded-full p-4 w-10 hover:bg-[#131315] hover:text-white transition duration-200"
              icon={faInfo}
            />
          </motion.button>
        </div>
        <div className="flex flex-wrap shadow-inner bg-[#131315]">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="/src/assets/ScrumBoard.png"
                alt="Scrumboard"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="src/assets/Vintage.png" alt="Burger" className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="" alt="Burger" className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="" alt="Burger" className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
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
      className={`${height} ${width} ${className} rounded-3xl bg-[#131315]`}
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
