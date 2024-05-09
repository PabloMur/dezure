type MessageType = {
  content: string;
  role: string;
  start: number;
  end: number;
  callback: any;
};

const AgentMessage = ({ content, role, start, end, callback }: MessageType) => {
  const handleClick = () => {
    callback(start);
  };

  return (
    <div className="w-full flex flex-col justify-end items-end">
      <p className="p-1 text-gray-500">{role}</p>
      <button
        className="bg-blue-100 text-gray-800 font-bold p-4 rounded-xl max-w-[800px]"
        onClick={handleClick}
      >
        <p>{content}</p>
      </button>
    </div>
  );
};

const UserMessage = ({ content, role, start, end, callback }: MessageType) => {
  const handleClick = () => {
    callback(start);
  };

  return (
    <div className="flex flex-col justify-start items-start">
      <p className="p-1 text-gray-500">{role}</p>
      <button
        className="bg-gray-100 text-gray-800 font-bold p-4 rounded-xl max-w-[800px]"
        onClick={handleClick}
      >
        <p className="text-left">{content}</p>
      </button>
    </div>
  );
};

//esto deberia recibirt un callback
const Message = ({ content, role, start, end, callback }: MessageType) => {
  const handleClick = () => {
    callback(start);
  };

  return role === "agent" ? (
    <AgentMessage
      content={content}
      role={role}
      start={start}
      end={end}
      callback={callback}
    />
  ) : (
    <UserMessage
      content={content}
      role={role}
      start={start}
      end={end}
      callback={callback}
    />
  );
};

export { Message };
