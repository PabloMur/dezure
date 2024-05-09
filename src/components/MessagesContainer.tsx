// hacer un type para el array y hacer un type para los messages
import { Message } from "@/components/ui/Message";

const MessagesContainer = (message: any) => {
  return (
    <div className="bg-black w-full rounded-xl p-4 flex flex-col gap-4">
      <p>Messages</p>
      <Message
        content="¡Hola! Soy Maria, asesora de admisiones de la Universidad Online. ¿En qué puedo ayudarte hoy?"
        role="agent"
        start={1.005}
        end={6.331625}
      ></Message>
      <Message
        content="¡Hola! Soy Maria, asesora de admisiones de la Universidad Online. ¿En qué puedo ayudarte hoy?"
        role="agent"
        start={1.005}
        end={6.331625}
      ></Message>
      <Message
        content="¡Hola! Soy Maria, asesora de admisiones de la Universidad Online. ¿En qué puedo ayudarte hoy?"
        role="agent"
        start={1.005}
        end={6.331625}
      ></Message>
    </div>
  );
};

export { MessagesContainer };
