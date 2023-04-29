const maquina1 = document.querySelector('#pName');

const maquinaEcribir1 = (text = '',tiempo = 200, etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML += ''
    let cont = 0
    let escribir = setInterval(function() {
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++
        if (cont == arrayCaracteres.length){
            cont = 0
            etiqueta.innerHTML = ''
        }
    },tiempo)
};

maquinaEcribir1("Hector Gonzalez Pastenes....",350,maquina1);

