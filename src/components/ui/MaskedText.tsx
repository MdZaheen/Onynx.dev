// 'use client';

// import React, { useState } from 'react';
// // import useMousePosition from '@/hooks/useMousePosition';

// interface MaskedTextProps {
//   text: string;
//   className?: string;
// }

// const MaskedText: React.FC<MaskedTextProps> = ({ text, className = '' }) => {
//   const { x, y } = useMousePosition();
//   const [isHovered, setIsHovered] = useState(false);

//   const maskPosition = `${x - 50}px ${y - 50}px`;

//   return (
//     <div
//       className={`relative w-full h-full ${className}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Mirrored text */}
//       <div
//         className="w-full h-full absolute top-0 left-0 text-gray-400 opacity-30 select-none"
//         style={{ transform: 'scaleX(-1)' }}
//       >
//         {text}
//       </div>

//       {/* Hover reveal text */}
//       <div
//         className="w-full h-full absolute top-0 left-0 text-white pointer-events-none select-none"
//         style={{
//           WebkitMaskImage: 'url("/public/images/Ellipse 1.svg")',
//           WebkitMaskSize: isHovered ? '100px' : '0px',
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: maskPosition,
//           maskImage: 'url("/public/images/Ellipse 1.svg")',
//           maskSize: isHovered ? '100px' : '0px',
//           maskRepeat: 'no-repeat',
//           maskPosition: maskPosition,
//           transition: 'all 0.2s ease-out'
//         }}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// export default MaskedText;
