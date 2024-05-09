"use client";
import React from "react";
import { motion } from "framer-motion";

const Audio = React.forwardRef<HTMLAudioElement | null>((props, ref) => {
  return (
    <motion.audio
      ref={ref}
      controls
      src="/audio.mp3"
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    ></motion.audio>
  );
});

Audio.displayName = "Audio";

export { Audio };
