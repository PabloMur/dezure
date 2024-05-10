"use client";
import { Audio } from "@/components/Audio";
import { MessagesContainer } from "@/components/MessagesContainer";
import { useRef } from "react";

const messages = [
  {
    content:
      "¡Hola! Soy Maria, asesora de admisiones de la Universidad Online. ¿En qué puedo ayudarte hoy?",
    role: "agent",
    start: 1.005,
    end: 6.331625,
  },
  {
    content:
      "Hola María, ¿cómo estás? Estoy viendo en sus redes que estaban mostrando algunas licenciaturas, algo que tenga que ver con tecnología o podría contar un poquito más.",
    role: "user",
    start: 7.24,
    end: 15.562688,
  },
  {
    content:
      "¡Hola! Estoy bien, gracias por preguntar. En la Universidad Online ofrecemos la Licenciatura en Desarrollo de Software, una excelente opción relacionada con tecnología. ¿Te gustaría saber más detalles sobre este programa?",
    role: "agent",
    start: 17.028,
    end: 29.02025,
  },
  {
    content: "Sí, ¿cuál sería el el plan de estudio?",
    role: "user",
    start: 30.369999,
    end: 32.71,
  },
  {
    content:
      "El plan de estudios de la Licenciatura en Desarrollo de Software incluye materias como programación, diseño web, bases de datos y desarrollo de aplicaciones. ¿Te gustaría conocer más detalles sobre las asignaturas y duración del programa?",
    role: "agent",
    start: 34.359,
    end: 47.744,
  },
  {
    content: "No, me gustaría el precio nada más. Gracias.",
    role: "user",
    start: 49.14,
    end: 51.088,
  },
  {
    content:
      "El precio de la Licenciatura en Desarrollo de Software es de 36 mensualidades de dos mil ochocientos pesos mexicanos. ¿Te gustaría saber más sobre los",
    role: "agent",
    start: 52.838,
    end: 61.523,
  },
];
export default function Home() {
  const ref = useRef<HTMLAudioElement | null>(null);

  const handleAudio = async (start: number, end: number) => {
    if (ref.current) {
      const audio = ref.current;

      audio.currentTime = start;

      audio.play();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-5 sm:p-10 bg-slate-950 gap-5">
      <Audio ref={ref}></Audio>
      <MessagesContainer
        messages={messages}
        callback={handleAudio}
      ></MessagesContainer>
    </main>
  );
}
