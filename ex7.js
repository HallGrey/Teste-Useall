
// Variáveis que vão receber os valores do usuário
let altura = Number(prompt('digite sua altura em metros:'));
let peso = Number(prompt('digite seu peso em quilos:'));

//Cálculo para saber o IMC do usuário
let imc = peso / (altura * altura);

//Condicional que vai pegar o valor do IMC e validar com os valores que representam cada faixa de peso
if (imc < 18){
    document.write("Você está abaixo da faixa de peso ideal")
}else if (imc > 25){
    document.write("Você está acima da faixa de peso ideal")
}else{
    document.write("Você está dentro da faixa de peso ideal")
}