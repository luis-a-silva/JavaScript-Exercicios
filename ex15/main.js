function adicao(a , b) {
    document.getElementById('resultado').innerHTML = `Resultado: ${ a + b}`
}

function calcular() {
    var a = Number(document.getElementById('soma1').value) || 0;
    var b = Number(document.getElementById('soma2').value) || 0;
    adicao(a, b);
}
