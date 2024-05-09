import { Message } from "@/components/ui/Message";

type MessageType = {
  content: string;
  role: string;
  start: number;
  end: number;
};

type MessagesContainerProps = {
  messages: MessageType[];
  callback: any;
};

const MessagesContainer: React.FC<MessagesContainerProps> = ({
  messages,
  callback,
}) => {
  return (
    <div className="bg-black w-full rounded-xl p-4 flex flex-col gap-4">
      <p>Messages</p>
      {messages.map((message, index) => (
        <Message
          key={index}
          content={message.content}
          role={message.role}
          start={message.start}
          end={message.end}
          callback={callback}
        />
      ))}
    </div>
  );
};

export { MessagesContainer };
