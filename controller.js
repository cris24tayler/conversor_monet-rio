document.getElementById('conversorForm').addEventListener('submit', function(event){
    const valor = parseFloat(document.getElementById('valor').value);
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;
//definir taxa de canbio fixa 
    const exchangeRates = {
        USD: {EUR: 0.93, BRL: 5.71 },
        BRL: {EUR: 0.16, USD: 0.18 },
        EUR: {USD: 1.08, BRL: 6.16 }
    };
});