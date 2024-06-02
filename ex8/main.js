document.getElementById('saudacao').addEventListener('click', 
() => { 
        let nome = document.getElementById('nome').value;
        let sobrenome = document.getElementById('sobrenome').value;
        alert(`Olá, ${nome} ${sobrenome} !`)
});

