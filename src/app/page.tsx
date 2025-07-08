'use client'

import { useState, useEffect } from "react";
import { Header } from "../components/header";
// import { GridPalavras } from "@/components/letra/grid";
import { InputCode } from "@/components/inputBlock";
import { ModalJogoFinalizado } from "@/components/modal/modalJogoFinalizado";


export default function Home() {
  const [palavras, setPalavras] = useState<string[]>(['', '', '', '', '', '']);
  const [linhaComFoco, setLinhaComFoco] = useState<number>(1);
  const [jogoFinalizado, setJogoFinalizado] = useState<boolean>(false);
  const [palavrasEditaveis, setPalavrasEditaveis] = useState<string[][]>(
    Array(6).fill(null).map(() => ["", "", "", "", ""])
  );
  const [coresLetras, setCoresLetras] = useState<number[][]>(
    Array(6).fill(null).map(() => [0, 0, 0, 0, 0])
  );

  const palavraCorreta: string = 'CARTA'

  const setPalavra = (nova: string[], tentativaIndex: number) => {
    const novas = [...palavrasEditaveis];
    novas[tentativaIndex] = nova;
    setPalavrasEditaveis(novas);
  };

  const setCores = (nova: number[], tentativaIndex: number) => {
    const novas = [...coresLetras];
    novas[tentativaIndex] = nova;
    setCoresLetras(novas);
  }

  // useEffect(() => {
  //   const tentativaAnterior = coresLetras[linhaComFoco - 2]
  //   if(tentativaAnterior) {

  //   }
  // }, [coresLetras]);

  return (
    <div>
      <Header />
      <div className="pt-14 flex flex-col gap-2 justify-center">
        {palavras.map((pal, index) => {
          return <InputCode
            key={'tentativa-' + index}
            palavra={palavrasEditaveis[index]}
            tentativa={index + 1}
            setPalavra={setPalavra}
            palavraFinal={pal}
            setPalavras={setPalavras}
            palavras={palavras}
            linhaComFoco={linhaComFoco}
            setLinhaComFoco={setLinhaComFoco}
            coresLetras={coresLetras[index]}
            setCoresLetras={setCores}
            palavraCorreta={palavraCorreta}
          />
        })}
      </div>
      <ModalJogoFinalizado />
    </div>
  );
}
