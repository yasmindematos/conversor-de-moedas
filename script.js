function ConverterDolar() {
  //pegar o valor inserido no campo input
  var valorElementoDolar = document.getElementById("valorReal");
  //acessar somente o id, sem aparecer toda a linha html no console
  var valorReal = valorElementoDolar.value;
  //transformar o valor inserido no input no tipo number
  var valorEmDolar = parseFloat(valorReal);
  // tranformar o valor R$ em U$ // arrendonda as casas decimais para 2
  var valorEmReal = (valorEmDolar * 0.1951334).toFixed(2);

  //pegar o elemento da linha h2
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Em Dólar o valor é: US$ " + valorEmReal;

  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElementoEuro = document.getElementById("valorReal");
  var valorReal = valorElementoEuro.value;
  var valorEmEuro = parseFloat(valorReal);
  var valorEmReal = (valorEmEuro * 0.1911753).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Em Euro o valor é: Є " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterLibra() {
  var valorElementoLibra = document.getElementById("valorReal");
  var valorReal = valorElementoLibra.value;
  var valorEmLibra = parseFloat(valorReal);
  var valorEmReal = (valorEmLibra * 0.1613085).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Em Libra o valor é: £ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
