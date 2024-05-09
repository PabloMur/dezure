const Footer = () => {
  return (
    <footer className="text-center py-4 mt-8">
      <p>Desarrollado por Pablo Murillo para una prueba técnica de Dezure.</p>
      <p>
        Contáctame en{" "}
        <a href="mailto:pablomurillo.sp@gmail.com" className="font-bold">
          pablomurillo.sp@gmail.com
        </a>
      </p>
      <p>
        Encuéntrame en GitHub:{" "}
        <a href="https://github.com/PabloMur" className="font-bold">
          PabloMur
        </a>
      </p>
      <p>
        Perfil profesional:{" "}
        <a
          href="https://www.linkedin.com/in/pablo-nicolas-murillo/"
          className="font-bold"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export { Footer };
