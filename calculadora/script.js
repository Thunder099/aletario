function analise(num){
    const input = document.getElementById("num");
    input.value += num;
}

function calcular() {
    const input = document.getElementById("num");
    const resultado = eval(input.value);
    input.value = resultado;
}
