'use client'
import useMousePosition from '@/utils/useMousePosition'

import {motion} from 'framer-motion'
import React from 'react'
import NavForAbout from '@/components/NavForAbout'
import TeamNameFlipper from '@/components/ui/team-name-flipper'

const Zaheen = () => {
  const { x, y } = useMousePosition();
  const size = 500;




  return (
    <div className="min-h-screen w-full bg-black text-white font-inter px-6 md:px-24 py-12
    
        
         
    ">
      {/* Navbar */}
      <NavForAbout />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 mt-16
       
      
      ">
        {/* Text Section */}
        <motion.div className="md:w-1/2 w-[30%] text-[#d1d1d1] space-y-6 absolute top-[40%] left-[13%]

         mask-[url('/images/mask.svg')]
          bg-red-700
            mask-no-repeat
            z-10
          size-10%


        " animate={{webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          transition: {
         type: 'tween',ease: 'easeOut',duration: 0.2



          }


        }}>



          <h1 className="text-4xl font-bold text-[#9a0000]">
            <TeamNameFlipper href="https://www.linkedin.com/in/mohammed-zaheen-10a2a221b/">
              ZAHEEN
            </TeamNameFlipper>
          </h1>
          <div className="mask
           absolute
          
          ">

            <p className="text-lg text-gray-400 leading-relaxed">
              I am a student of B.Tech in Computer Science and Engineering at Indian Institute of
              Technology, Kharagpur. I am a member of the Robotics and Automation Club (RAC) and the
              Coding Club (CC) at IIT Kharagpur. Passionate about innovation, design systems, and AI-driven solutions for the real world.
            </p>

          </div>
          <div className="overlap ">
            <p className="text-lg text-gray-400 leading-relaxed">

              .dlrow laer eht rof snoitulos nevird-IA dna ,smetsys ngised ,noitavonni tuoba etanoissaP .rupargahT TI ta )CC( bulC gnidoC eht dna )CAR( bulC noitamotuA dna scitoboR eht fo rebmem a ma I .rupargahT ,ygolonhceT fo etutitsnI naidnI ta gnireenignE dna ecneicS retupmoC ni hceT.B fo tneduts a ma I

            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src="/images/zaheen.png"
            alt="Zaheen"
            className="h-[420px] transform scale-142 saturate-0 object-contain absolute top-[30%] left-[66%]"
          />
        </div>
      </div>
    </div>
  )
}

export default Zaheen
