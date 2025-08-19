const nomes = ["Gabriel", "Adrielly", "Vinicius", "Caique", "Thalia", "Allana", "Otávio"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)


