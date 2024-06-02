for(i = 0; i <= 10 ; i++){
    let coluna = document.createElement('div')
    coluna.className = 'coluna'
    for(j = 0; j <= 10; j++){
        coluna.innerHTML += `<p> ${i} x ${j} = ${i * j} </p>`
    }
    tabuada.appendChild(coluna)
}