function calcularIMC() {
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let masculino = document.getElementById('masculino').checked
    let feminino = document.getElementById('feminino').checked
    let resultadoElemento = document.getElementById('resultado')

    if (peso > 0 && altura > 0) {
        let imc = peso / (altura * altura)
        let classificacao

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso'
        } else if (imc < 24.9) {
            classificacao = 'Peso normal'
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso'
        } else {
            classificacao = 'Obesidade'
        }

        resultadoElemento.textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`
    } else {
        resultadoElemento.textContent = 'Por favor, insira peso e altura válidos.'
    }
}
    

