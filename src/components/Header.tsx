"use client";
import { Logo } from "./ui/Logo";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4 px-12">
      <motion.div
        initial={{ scale: 0 }} // Escala inicial (invisible)
        animate={{ scale: 1 }} // Escala final (visible)
        transition={{ duration: 0.5 }} // Duración de la animación
      >
        <Logo />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }} // Opacidad inicial y posición en Y
        animate={{ opacity: 1, y: 0 }} // Opacidad final y posición en Y
        transition={{ duration: 0.5, delay: 0.2 }} // Duración y retraso de la animación
      >
        Prueba técnica - Pablo Murillo
      </motion.h2>
    </header>
  );
};

export { Header };
