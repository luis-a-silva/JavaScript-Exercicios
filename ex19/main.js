let resultado = document.getElementById('resultado')
resultado.innerHTML = '<h3>Repetição (1x)</h3>'

for(let i = 0; i < 20 ; i++){
    resultado.innerHTML += `<h3>Repetição For (${i+ 1}x)</h3>`
}

let repeticoes = Array(5).fill(' Repetição Array Foreach ')
repeticoes.forEach(repeticao =>{
    resultado.innerHTML += `<h3>${repeticao} </h3>`
})

let i = 0
while(i < 5){
    resultado.innerHTML += `<h3>Repetição While (${i+ 1}x)</h3>`
    i++
}

let j = 0
do{
    resultado.innerHTML += `<h3>Repetição Do While (${j+ 1}x)</h3>`
    j++
}while( j < 5)