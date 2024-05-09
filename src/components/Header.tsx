import { Logo } from "./ui/Logo";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-4">
      <Logo></Logo>
      <h2>Prueba técnica - Pablo Murillo</h2>
    </header>
  );
};

export { Header };
