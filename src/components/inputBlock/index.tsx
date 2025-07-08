'use client'

import { getMapaCores } from "@/utils/cores";
import { useEffect } from "react";

interface InputCodeProps {
    palavra: string[];
    tentativa: number;
    setPalavra: (nova: string[], tentativaIndex: number) => void;
    palavraFinal: string;
    palavras: string[];
    setPalavras: (nova: string[]) => void;
    linhaComFoco: number;
    setLinhaComFoco: (linha: number) => void;
    coresLetras: number[];
    setCoresLetras: (nova: number[], tentativaIndex: number) => void;
    palavraCorreta: string;
}


export function InputCode({
    palavra,
    setPalavra,
    tentativa,
    palavraFinal,
    palavras,
    setPalavras,
    setLinhaComFoco,
    linhaComFoco,
    palavraCorreta,
    setCoresLetras,
    coresLetras
}: InputCodeProps) {

    const gabaritoCores: string[] = ['#172554', '#eab308', '#16a34a']

    useEffect(() => {
        if (linhaComFoco === tentativa) {
            const el = document.getElementById(`tentativa-${tentativa}-code-0`);
            if (el) {
                (el as HTMLInputElement).focus();
            }
        }
    }, [linhaComFoco, tentativa]);

    const handleChange = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        const value = key.replace(/[^A-Za-z]/g, "").toUpperCase();


        if (key === "Enter") {
            const finalizado = palavra.every((val) => val !== "");
            if (finalizado) {
                setPalavras((prev) => {
                    const newValues = [...prev];
                    newValues[tentativa - 1] = palavra.join('');
                    return newValues;
                });
                setLinhaComFoco(tentativa + 1);

                const mapaCores: number[] = getMapaCores(palavraCorreta, palavra)

                setCoresLetras(mapaCores, tentativa - 1);

            }
            return;
        }

        if (value.length > 1 && key !== "Backspace") return

        if (key === "Backspace") {
            if (index == palavra.length - 1 && palavra[index] == "") {
                const newValues = [...palavra]
                newValues[index - 1] = "" // Limpa o valor do input atual
                setPalavra(newValues, tentativa - 1)

                document.getElementById(`tentativa-${tentativa}-code-${index - 1}`)?.focus()
                return

            }
            const newValues = [...palavra];
            const pos: number = index == palavra.length - 1 ? index : index - 1
            // const pos = index > 0 ? index - 1 : 0;
            newValues[pos] = "";
            setPalavra(newValues, tentativa - 1);
            document.getElementById(`tentativa-${tentativa}-code-${pos}`)?.focus();
            return;
        }

        if (value.length === 1) {
            const newValues = [...palavra];
            newValues[index] = value;
            setPalavra(newValues, tentativa - 1);

            if (index < palavra.length - 1) {
                document.getElementById(`tentativa-${tentativa}-code-${index + 1}`)?.focus();
            }
        }
    };

    return (
        <div className="flex gap-2 justify-center">
            {palavraFinal?.length > 0
                ? palavraFinal.split('').map((val, index) => {
                    const cor = gabaritoCores[coresLetras[index]]
                    return (
                        <input
                            key={index}
                            id={`tentativa-${tentativa}-code-${index}`}
                            type="text"
                            maxLength={1}
                            style={{ backgroundColor: cor }}
                            className='input input-ghost w-20 h-20 text-center text-4xl font-bold pointer-events-none'
                            value={val}

                        />
                    )
                })
                : palavra.map((val, index) => (
                    <input
                        key={index}
                        id={`tentativa-${tentativa}-code-${index}`}
                        type="text"
                        maxLength={1}
                        className="input input-ghost border-2 disabled:border-blue-900 w-20 h-20 text-center text-4xl font-bold focus:bg-blue-900 disabled:bg-blue-900"
                        value={val}
                        onKeyUp={(e) => handleChange(index, e)}
                        disabled={tentativa > 1 ? palavras[tentativa - 2] === "" : false}
                    />
                ))}
        </div>
    );
}
