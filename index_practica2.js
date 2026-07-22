// Scroll suave en los enlaces del menú

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute('href'));
        if (destino){ // solo ejecutar si existe la secion
        destino.scrollIntoView({
            behavior: 'smooth',
            block:'start'
        });
    }
    });
});

// Botón volver arriba

const btnTop = document.createElement('button');
btnTop.id = 'btnTop';
btnTop.innerHTML = '↑';
btnTop.title= 'Volver al inicio';//Texto para accesibilidad
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
    btnTop.style.display = window.scrollY > 300 ?
     'block' : 'none';
});

btnTop.addEventListener('click', () => {

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

});

// Año automático en footer

const year = new Date().getFullYear();

const footer = document.querySelector('footer');

footer.innerHTML += `<p>© ${year} Kaley's Turismo en Katira</p>`;