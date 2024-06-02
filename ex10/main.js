
function formataCPF(cpfInput){
    let cpf = cpfInput.value;
    document.getElementById('cpfFormatado').innerHTML = cpf.replace(/\D/g, '');
}
