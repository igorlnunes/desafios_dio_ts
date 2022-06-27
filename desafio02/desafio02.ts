interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissoes
}

enum Profissoes {
    Atriz,
    Padeiro
}

let pessoa1 = {} as Pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz;

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro

}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
} 

let pessoa4 = {} as Pessoa;
pessoa4.nome = 'carlos';
pessoa4.idade = 19;
pessoa4.profissao = Profissoes.Padeiro;

let arrPessoas = [pessoa1, pessoa2, pessoa3, pessoa4];

for (let nomes of arrPessoas){
    console.log(nomes.nome);
}