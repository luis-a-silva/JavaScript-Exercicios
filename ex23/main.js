var numeroAleatorio = Math.random() * 10;
//alert(`Número aleatorio foi: <strong> ${numeroAleatorio.toFixed()}</strong>`)

document.getElementById('sortear').addEventListener('click', () => {
    numero = Number(document.getElementById('chute').value);
    if(numero == numeroAleatorio.toFixed()){
        alert(`Você acertou ! ${numeroAleatorio.toFixed()}`)
    }else{
        alert(`Você errou ! ${numeroAleatorio.toFixed()}`)
    }
})