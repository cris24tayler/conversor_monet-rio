document.getElementById('conversorForm').addEventListener('submit', function(event){

    event.preventDefault();
    
    const valor = parseFloat(document.getElementById('valor').value);
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;
//definir taxa de cambio fixa 
    const exchangeRates = {
        USD: {EUR: 0.93, BRL: 5.71 },
        BRL: {EUR: 0.16, USD: 0.18 },
        EUR: {USD: 1.08, BRL: 6.16 }
    };
    let valorConvertido;
    if(moedaOrigem === moedaDestino){
        valorConvertido = valor;
    } else{
        valorConvertido = valor * exchangeRates[moedaOrigem][moedaDestino];
    }

    let resultado = document.getElementById('resultado');
        resultado.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${moedaDestino}`;
});