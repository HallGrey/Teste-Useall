//variáveis com os valores propostos no exercício
let a = 3;
let b = 5;

//troca nos valores atráves de calculos simples, para dar o valor de A para o B, somando ambos primeiro e jogando o valor para A, que fica com 8, depois subtrai 8 pelo valor de B (5)
//que fica com 3 e joga o valor em B (já executando a primeira troca), depois subtrai 8 (valor de A) por 3 (novo valor de B) e joga em A (executando a ultima troca).
a = a + b;
b = a - b;
a = a - b;

//Apresenta os valores no console
console.log(a);
console.log(b);