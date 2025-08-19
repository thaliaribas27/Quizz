const nomes = ["Arthur", "Guinevere", "Lancelot", "Morgana", "Merlin", "Elara", "Gareth"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)


