import { Letra } from "..";

interface gridPalavrasProps {
    linhas: number;
    letras: number;
}

export function GridPalavras({letras, linhas}: gridPalavrasProps) {
    const letrasArray:number[] = []
    const linhasArray:number[] = []

    for (let i = 0; i < letras; i++) {
        letrasArray.push(i)
    }

    for (let i = 0; i < linhas; i++) {
        linhasArray.push(i)
    }
    
    return (
        <div>
            {linhasArray.map((linha) => {
                return <div>            
            {letrasArray.map((item) => {
                return (
                    <Letra />
                )
            })}
            </div>
        })}
        </div>
    )
}