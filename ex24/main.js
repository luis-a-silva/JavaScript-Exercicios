const data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

document.getElementById('dataAtual').innerHTML = `${dia} / ${mes} / ${ano} `

var mesQueVem = document.getElementById('proximoMes')

switch (mes) {
    case 0:
        mesQueVem.innerHTML = 'Próximo mês é: Janeiro'
    break;
    case 1:
        mesQueVem.innerHTML = 'Próximo mês é: Fevereiro'
    break;
    case 2:
        mesQueVem.innerHTML = 'Próximo mês é: Março'
    break;
    case 3:
        mesQueVem.innerHTML = 'Próximo mês é: Abril'
    break;
    case 4:
        mesQueVem.innerHTML = 'Próximo mes é: Maio'
    break;
    case 5:
        mesQueVem.innerHTML = 'Próximo mes é: Junho'
    break;
    case 6:
        mesQueVem.innerHTML = 'Próximo mes é: Julho'
    break;
    case 7:
        mesQueVem.innerHTML = 'Próximo mes é: Agosto'
    break;
    case 8:
        mesQueVem.innerHTML = 'Próximo mes é: Setembro'
    break;
    case 9:
        mesQueVem.innerHTML = 'Próximo mes é: Outubro'
    break;
    case 10:
        mesQueVem.innerHTML = 'Próximo mes é: Novembro'
    break;
    case 11:
        mesQueVem.innerHTML = 'Próximo mes é: Dezembro'
    break;

    default:
        break;
}