"use client";
import React from "react";

const Audio = React.forwardRef<HTMLAudioElement | null>((props, ref) => {
  return <audio ref={ref} controls src="/audio.mp3" className="w-full"></audio>;
});

export { Audio };
