document.getElementById('contar').addEventListener('click', () => {
    let letras = document.getElementById('texto').value;
    document.getElementById('total').innerHTML = `Total de letras: ${letras.length}`
})