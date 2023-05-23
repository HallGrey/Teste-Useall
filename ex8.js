//Função que apresenta a media de três números
function media (n1, n2, n3){
    return (n1 + n2 + n3)/3
}

//Chamada da funcão, com os três valores definidos para os três parâmetros da função. 
console.log(media(3, 8, 10))

//Função para calcular a média de vários valores
function calcularMedia() {
    //Se o valor do vetor for 0, já vai retornar zero aqui
    if (arguments.length === 0) {
      return 0;
    }
    
    //aqui vai fazer uma repetição, pegando os valores dados no parâmetro e jogando em um tipo de array. 
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
      soma += arguments[i];
    }
  
    //Depois vai somar todos os valores e dividir pela quantidade de itens nesse vetor
    const media = soma / arguments.length;
    return media;
  }

//Exemplos de chamadas com diferentes valores
console.log(calcularMedia(2, 4, 6)); 
console.log(calcularMedia(10, 20, 30, 40, 50));  
console.log(calcularMedia());  