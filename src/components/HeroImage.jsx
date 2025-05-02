import React from "react";
import { motion } from "framer-motion";
import { blobPaths } from "./svg";

const HeroImage = () => {
  return (
    <div className="flex justify-center items-center h-screen xl:pb-20">
      <svg
        viewBox="0 0 900 600"
        width="900"
        height="600"
      >
        <g transform="translate(450 300)">
          {/* Clip path for the blob shape */}
          <clipPath id="blobClip">
            <motion.path
              d={blobPaths[0]}
              animate={{ d: blobPaths }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 5,
              }}
            />
          </clipPath>

          {/* Image clipped to the blob shape */}
          <image
            href="/images/HeroImage/image.png"
            width="400"
            height="400"
            x="-200"
            y="-200"
            clipPath="url(#blobClip)"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Optional: outline of blob for aesthetics */}
          <motion.path
            d={blobPaths[0]}
            fill="none"
            stroke="#BB004B"
            strokeWidth="3"
            animate={{ d: blobPaths }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              duration: 5,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default HeroImage;
