for(let i = 0; i < 10 ; i++){
    resultado.innerHTML += `<span> ${i+ 1}  </span>`
}

resultado.innerHTML += '<h3>Números pares</h3>'

for(let i = 0; i < 20 ; i++){
    if(i%2 == 0){
        resultado.innerHTML += `</h3> <span> ${i}  </span>`
    }
}



