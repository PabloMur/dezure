"use client";
import React from "react";
import { motion } from "framer-motion";
import { Message } from "@/components/ui/Message";

type MessageType = {
  content: string;
  role: string;
  start: number;
  end: number;
};

type MessagesContainerProps = {
  messages: MessageType[];
  callback: (start: number, end: number) => void;
};

const MessagesContainer: React.FC<MessagesContainerProps> = ({
  messages,
  callback,
}) => {
  return (
    <div className="bg-black w-full rounded-xl p-4 flex flex-col gap-4">
      <p>Messages</p>
      {messages.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }} // Opacidad inicial y posición en Y
          animate={{ opacity: 1, y: 0 }} // Opacidad final y posición en Y
          transition={{ duration: 0.5, delay: index * 0.2 }} // Duración y retraso gradual para cada mensaje
        >
          <Message
            content={message.content}
            role={message.role}
            start={message.start}
            end={message.end}
            callback={callback}
          />
        </motion.div>
      ))}
    </div>
  );
};

export { MessagesContainer };
