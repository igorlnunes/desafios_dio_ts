var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Atriz"] = 0] = "Atriz";
    Profissoes[Profissoes["Padeiro"] = 1] = "Padeiro";
})(Profissoes || (Profissoes = {}));
var pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissoes.Atriz;
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissoes.Padeiro
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissoes.Atriz
};
var pessoa4 = {};
pessoa4.nome = 'carlos';
pessoa4.idade = 19;
pessoa4.profissao = Profissoes.Padeiro;
var arrPessoas = [pessoa1, pessoa2, pessoa3, pessoa4];
for (var _i = 0, arrPessoas_1 = arrPessoas; _i < arrPessoas_1.length; _i++) {
    var nomes = arrPessoas_1[_i];
    console.log(nomes.nome);
}
