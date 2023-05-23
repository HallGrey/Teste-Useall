// Variáveis que iniciam a contagem das notas e o valor que o usuário deseja sacar
let saque = Number(prompt('Digite quanto deseja sacar: R$'));
let notasDez = 0;
let notasVinte = 0;
let notasCinquenta = 0;
let notasCem = 0;

//Pega o valor do saque e vai passando em cada validação, enquanto for maior que o número da nota, vai somando uma nota ao saque e diminuindo do valor total colocado pelo usuário
while (saque){
    if (saque >= 100){
        saque = saque - 100
        notasCem++
    }else if (saque >= 50){
        saque = saque - 50
        notasCinquenta++
    }else if (saque >= 20){
        saque = saque - 20
        notasVinte++
    }else if (saque >= 10){
        saque = saque - 10
        notasDez++
    }else{
        confirm("Número digitado não suportado: Somente notas de R$ 100, R$ 50, R$ 20 e R$ 10 no caixa");
        location.reload(); //Aqui, caso não passe pela validação das notas necessárias, ele vai apresentar a mensagem e quando o usuário clicar em ok, vai reiniciar a página
        break
    }
}

//Apresenta o número de notas sacadas de cada valor
document.write(`R$ 100 -> ${notasCem}<br>`);
document.write(`R$ 50 -> ${notasCinquenta}<br>`);
document.write(`R$ 20 -> ${notasVinte}<br>`);
document.write(`R$ 10 -> ${notasDez}<br>`);