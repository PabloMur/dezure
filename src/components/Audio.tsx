const Audio = ({ ref }: any) => {
  return (
    <audio ref={ref} controls src={"/audio.mp3"} className="w-full"></audio>
  );
};

export { Audio };
