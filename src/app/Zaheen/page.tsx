"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import NavForAbout from "@/components/NavForAbout";
import TeamNameFlipper from "@/components/ui/team-name-flipper";
import "@/styles/Zaheen.css";

const Zaheen = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentSize, setCurrentSize] = useState(60);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

  const maskSize = useMotionValue(70);
  const smoothSize = useSpring(maskSize, { stiffness: 300, damping: 30 });

  // Update current size when smoothSize changes
  useEffect(() => {
    const unsubscribe = smoothSize.on('change', (latest) => {
      setCurrentSize(latest);
    });
    return unsubscribe;
  }, [smoothSize]);

  useEffect(() => {
    const updatePosition = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        
        setMaskPosition({ x: relativeX, y: relativeY });
      }
    };
    
    updatePosition();
    
    // Also update on scroll or resize
    const handleUpdate = () => requestAnimationFrame(updatePosition);
    window.addEventListener('scroll', handleUpdate);
    window.addEventListener('resize', handleUpdate);
    
    return () => {
      window.removeEventListener('scroll', handleUpdate);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [x, y]);

  useEffect(() => {
    maskSize.set(isHovered ? 300 : 60);
  }, [isHovered]);


  return (
    <div className="relative bg-black text-white min-h-screen  font-inter overflow-hidden">
  <div className="nav fixed top-12   left-20 w-full h-[10%] ">
    
     <NavForAbout /></div>   

      {/* Main Layout */}
      <div className="flex flex-col  md:flex-row justify-between items-center gap-16 ">
        {/* Content Container - for positioning */}
        <div
          ref={contentRef}
          className="content-container absolute top-[30%] left-[3%] text-[30px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Mirrored Text - Base Layer (z-10) - Hide when hovered */}
          <div className={`md:w-1/2 w-[30%] space-y-6 z-10 relative top-[30%] left-[5%] transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}>
            <h1 className="text-4xl font-bold text-[#9a0000] left-[70%]">
              <div className="z absolute top-[-30%] left-[8%]">
                <TeamNameFlipper href="https://www.linkedin.com/in/mohammed-zaheen-10a2a221b/">
                  ZAHEEN
                </TeamNameFlipper>
              </div>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed opacity-40 scale-x-[-1]">
              .dlrow laer eht rof snoitulos nevird-IA dna ,smetsys ngised
              ,noitavonni tuoba etanoissaP .rupargahT TI ta )CC( bulC gnidoC eht
              dna )CAR( bulC noitamotuA dna scitoboR eht fo rebmem a ma I
              .rupargahT ,ygolonhceT fo etutitsnI naidnI ta gnireenignE dna
              ecneicS retupmoC ni hceT.B fo tneduts a ma I
            </p>
          </div>

          {/* Masked Content Container - Top Layer (z-20) */}
          <motion.div
            className="masked-content absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0, // Hide completely when not hovering
              WebkitMaskImage: "radial-gradient(circle, black 0%, black 75%, transparent 85%)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: `${currentSize}px ${currentSize}px`,
              WebkitMaskPosition: `${maskPosition.x - currentSize/2}px ${maskPosition.y - currentSize/2}px`,
              maskImage: "radial-gradient(circle, black 0%, black 85%, transparent 100%)",
              maskRepeat: "no-repeat",
              maskSize: `${currentSize}px ${currentSize}px`,
              maskPosition: `${maskPosition.x - currentSize/2}px ${maskPosition.y - currentSize/2}px`
            }}
          >
            {/* Real Text Content - Match the mirrored text positioning exactly */}
            <div className="md:w-1/2 w-[30%] space-y-6 z-10 relative top-[15%] left-[5%]">
              <h1 className="text-4xl font-bold text-[#9a0000] left-[70%]">
                <div className="z absolute top-[-30%] left-[8%]">
                  <TeamNameFlipper href="https://www.linkedin.com/in/mohammed-zaheen-10a2a221b/">
                    ZAHEEN
                  </TeamNameFlipper>
                </div>
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                I am a student of B.Tech in Computer Science and Engineering at
                Indian Institute of Technology, Kharagpur. I am a member of the
                Robotics and Automation Club (RAC) and the Coding Club (CC) at
                IIT Kharagpur. Passionate about innovation, design systems, and
                AI-driven solutions for the real world.
              </p>
            </div>

            {/* Masked Image - Only visible through mask */}
          </motion.div>
        </div>
        <div className="absolute top-[30%] left-[60%] z-10 scale-145">
          <img
            src="/images/zaheen.png"
            alt="Zaheen"
            className="h-[420px] transform saturate-100 object-contain transition-all duration-300"
          />
        </div>
        {/* Mirrored Image - Always visible underneath */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end absolute top-[30%] left-[66%] z-0">
          <img
            src="/images/zaheen.png"
            alt="Zaheen"
            className="h-[420px] transform scale-142 saturate-0 object-contain"
          />
        </div>
      </div>

      {/* Visible Circle Tracker */}
      <motion.div
        className="fixed z-50 pointer-events-none border border-[#9a0000] rounded-full mix-blend-difference"
        style={{
          width: smoothSize,
          height: smoothSize,
          left: x,
          top: y,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 30 },
          height: { type: "spring", stiffness: 300, damping: 30 }
        }}
      />
    </div>
  );
};

export default Zaheen;