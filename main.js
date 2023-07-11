function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.currentTime = 0;
        elemento.play();
    
    } else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTecla = document.querySelectorAll('.tecla');

listaDeTecla.forEach(tecla => {
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.addEventListener('click', event => {
        tocaSom(idAudio);
    });

    tecla.addEventListener('keydown', event => {
        if(event.code === 'Space' || event.code === 'Enter' || event.code === 'NumpadEnter'){
            tecla.classList.add('ativa');
        }
    });

    function addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn);
        })
    }

    addEventListenerAll(tecla, 'keyup blur', e => {
        tecla.classList.remove('ativa');
    });
});
