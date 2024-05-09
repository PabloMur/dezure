type MessageTpye = {
  content: string;
  role: string;
  start: number;
  end: number;
};

//esto deberia recibirt un callback
const Message = ({ content, role, start, end }: MessageTpye) => {
  return (
    <button className="bg-white text-black font-bold p-4 rounded-xl">
      {content}
      <p>{role}</p>
    </button>
  );
};

export { Message };
