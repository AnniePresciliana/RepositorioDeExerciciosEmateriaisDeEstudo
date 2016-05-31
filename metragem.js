answer = prompt("Escreva o metodo de conversão:celsius ou fah:");

graus = prompt("Informe o numero em graus que queira converter:");


if(answer === celsius){
  console.log("Você escolheu a conversão do seu numero em graus Celsius para Fahrenheit! ");
CelsiusparaFah(graus);
}

    else{
  console.log("Você escolheu a conversão do seu número em graus Farenheit para Celsius!");
  FahParaCelsius(graus);
}



var CelsiusparaFah = function (graus){
  32*graus+32
    return "A conversão é:" +graus;
  
};

var FahParaCelsius = function(graus){
 graus-32/1.8;
  return("A conversão é:"+graus);
};