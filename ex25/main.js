var deuses = ['Aegir', 'Aud', 'Balder'];

var deuses2 = ['Loki', 'Odin', 'Frey'];
/*
var resultado = document.getElementById('total')
resultado.innerHTML = `${deuses.length}`
*/
deuses.push('Thor', 'Hella', 'Frigg')

for(i = 0; i < deuses.length; i++){
    var lista = document.getElementById('lista')
    var item = document.createElement('li')
  
    item.innerHTML = deuses[i]
    lista.appendChild(item)
}

deuses2.map(function(deus) {
    var item = document.createElement('li');
    item.innerHTML = deus;
    lista.appendChild(item);
});
