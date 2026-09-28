// A palavra export permite que esta função
// seja utilizada em outro arquivo JavaScript.
export function aleatorio(lista) {
    /*
        Math.random() gera um número decimal
        maior ou igual a 0 e menor que 1.

        lista.length informa a quantidade
        de elementos existentes na lista.

        Math.floor() arredonda o resultado
        para baixo.
    */
    const posicao = Math.floor(
        Math.random() * lista.length
    );
    // Retorna o elemento guardado na posição sorteada.
    return lista[posicao];
}