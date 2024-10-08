import Image from "next/image";
import { Header } from "./components/Header";
import { GridPalavras } from "@/components/letra/grid";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-14 flex justify-center">
        <GridPalavras letras={5} linhas={6} />
      </div>
    </div>
  );
}
