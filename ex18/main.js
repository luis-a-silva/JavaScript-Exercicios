primos(0)
function primos(num){
    if(num%2==1){
        console.log('Ímpar')
    }else{
        console.log('Par')
    }
}

multiplica(5,2)
function multiplica(a ,b){
    console.log('Multiplicaçao: ' + a * b)
}

desconto(100)
function desconto(a){
    console.log(`Valor do desconto: ${a * 0.05}`)
}

maiorDeIdade(2006)
function maiorDeIdade(ano){
    let idade = 2024 - ano
    if(idade >= 18){
        console.log('Maior de idade!')
    }else{
        console.log('Menor de idade!')
    }
}