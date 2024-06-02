let texto = 'LOL é melhor que Valorant'
//copia o texto para uma variavel em minusculo
let textoMin = texto.toLowerCase();
let resultado = document.getElementById('resultado')

//metodo includes: verifica a presença de uma substring dentro de uma string
if(textoMin.includes('dota') == true){
    resultado.innerHTML = 'Verdadeiro'
}else{
    resultado.innerHTML = 'Falso'
}