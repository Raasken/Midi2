alert('ola mundo');
function tocaSom(seletorAudio){
    const elemento = dosucment.querySelector(seletorAudio);

    if (elemento && elemento.localName ==='audio') {
        elemento.play();
    }
    else{
        //alert('Elemento não encontrado');
        console.log('Elemento não encotrado ou seletor invalido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (letcontador = 0; contador <listaDeTeclas.length; contador++) {

    const tecla = litaDeTeclas[contador];
    const intrumento = tecla.classList[1];
    const idAudio = ` #som_${intrumento} ` ; //template string 

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if(evento.code ===  `sapace`) || evevento.code === `enter`){
            tecla.classList.add(´ativa´);
        }

    }
    
    tecla.onkeyup = function (){
        tecla.classList.remove(`ativa`);
    }

}