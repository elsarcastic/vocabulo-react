export const getMapaCores = (palavraCorreta: string, palavra: string[]) => {
    const palavraCorretaArray = palavraCorreta.split('')
    const resultado = Array(palavraCorreta.length).fill(0);

    // verificacao de letras verdes
    palavraCorretaArray.map((letra, index) => {
        if (palavra[index] === letra) {
            resultado[index] = 2;
            palavraCorretaArray[index] = '';
        }
    })

    //verificacao de letras amarelas
    palavraCorretaArray.map((letra, index) => {
        if (palavra.includes(letra)) {
            resultado[palavra.indexOf(letra)] = 1;
            palavraCorretaArray[index] = '';
        }
    })

    return resultado;
}