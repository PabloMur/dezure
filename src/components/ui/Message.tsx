type MessageTpye = {
  content: string;
  role: string;
  start: number;
  end: number;
  callback: any;
};

//esto deberia recibirt un callback
const Message = ({ content, role, start, end, callback }: MessageTpye) => {
  return (
    <button
      className="bg-white text-black font-bold p-4 rounded-xl"
      onClick={callback}
    >
      {content}
      <p>{role}</p>
    </button>
  );
};

export { Message };
