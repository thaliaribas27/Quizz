const nomes = ["Allana", "Thalia", "Adrielly", "Otávio", "Gabriel", "Vini", "Caique"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)