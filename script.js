document.getElementById('converter').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;

    if (isNaN(valor)) {
        document.getElementById('resultado').textContent = 'Por favor, insira um valor válido.';
        return;
    }

    const taxasDeCambio = {
        BRL: { USD: 0.20, EUR: 0.18 },
        USD: { BRL: 5.00, EUR: 0.90 },
        EUR: { BRL: 5.50, USD: 1.10 }
    };

    let valorConvertido;

    if (moedaOrigem === moedaDestino) {
        valorConvertido = valor;  // Mesma moeda, não há conversão
    } else {
        valorConvertido = valor * taxasDeCambio[moedaOrigem][moedaDestino];
    }

    document.getElementById('resultado').textContent = `O valor convertido é: ${valorConvertido.toFixed(2)} ${moedaDestino}`;
});
