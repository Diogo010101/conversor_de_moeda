window.onload = function(){

}
    function ConverterNovo() {
        var valorNovoConversor = document.getElementById("valor_moeda");
        var valor = valorNovoConversor.value;
        var valorDolar = parseFloat(valor);
        var select = document.getElementById('tipo_moeda');
        value = select.options[select.selectedIndex].value;
        console.log(value)


        if (value == "euro"){
            var valorReal = valorDolar * 0.91 ;
            var transformar = valorReal.toFixed(2);
            var valorRealConvertido = (transformar);
            var valorConvertido = document.getElementById("valorDeSaida")
            var valorDeSaida = "€ " + valorRealConvertido;
            valorConvertido.innerHTML = valorDeSaida;
        }
        else
            if (value == "real"){
                var valorReal = valorDolar * 5.05;
                var transformar = valorReal.toFixed(2);
                var valorRealConvertido = (transformar);
                var valorConvertido = document.getElementById("valorDeSaida")
                var valorDeSaida = "R$ " + valorRealConvertido;
                valorConvertido.innerHTML = valorDeSaida;
            }
            else
                if (value == "bitcoin") {
                    var valorReal = valorDolar * 0.000026;
                    var valorConvertido = document.getElementById("valorDeSaida")
                    var valorDeSaida = "BitCoin " + valorReal;
                    valorConvertido.innerHTML = valorDeSaida;
                }

    }

