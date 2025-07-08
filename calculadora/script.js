function analise(num){
    const input = document.getElementById("num"); /* pega a coordenada do input pelo id */
    input.value += num; /* isso aqui é pra adicionar o numero e o simbolo na mesma coisa, e dentro do input tambem */
}

function calcular() {
    const input = document.getElementById("num"); /* novamente pega o input pelo id */
    const resultado = eval(input.value); /* esse eval serve pra rodar qualquer coisa que estiver no valor do input como se fosse código, ou seja, se voce escrever alert("cavalo") e apertar o "=" aparece um alert falando cavalo '-' */
    input.value = resultado; /* isso coloca o valor da constante resultado no input */
}
