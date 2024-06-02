document.getElementById('calcular').addEventListener('click', function calcular(){
    /* 
    Number -> converte o tipo string para o tipo number
    */
    
    num1 = Number(document.getElementById('soma1').value);
    num2 = Number(document.getElementById('soma2').value);

    document.getElementById('resultado').innerHTML = `Resultado: ${num1 + num2}`
})