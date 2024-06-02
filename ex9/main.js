function formatCPF(cpfInput) {
    let cpf = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    var cpfFormatado = document.getElementById('cpfFormatado');
    // Aplica a formatação conforme a quantidade de números digitados
    if (cpf.length > 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
        cpfFormatado.innerHTML = cpf
    } else if (cpf.length > 6) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
        cpfFormatado.innerHTML = cpf
    } else if (cpf.length > 3) {
        cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
        cpfFormatado.innerHTML = cpf
    }

    cpfInput.value = cpf;
}