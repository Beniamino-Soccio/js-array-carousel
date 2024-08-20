console.log('JS OK');

// !PREP
//array delle immagini
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

//prendiamo elem. dal DOM
const upBtn = document.getElementById('prev');
const downBtn = document.getElementById('next');
const carouselImages = document.getElementById('gallery');

//creo e recupero le immagini
for(let i = 0; i < sources.length; i++){
    const image = document.createElement('img');
    image.src = sources[i];
    carouselImages.appendChild(image);
}

const imgs = document.querySelectorAll('#carousel img');

let imgActive = 0;
imgs[imgActive].classList.add('active');

// ! EVENTS
//down event

downBtn.addEventListener('click', function(){
    //rendo visibile l'img successiva
    imgs[imgActive].classList.remove('active');
    imgActive++;
    //loop scorrimento img
    if (imgActive === imgs.length){
        imgActive = 0;
    }
    imgs[imgActive].classList.add('active');
})

//up event

upBtn.addEventListener('click', function(){
    //rendo visibile l'img successiva
    imgs[imgActive].classList.remove('active');
    imgActive--;
    //loop scorrimento img
    if (imgActive === -1){
        imgActive = imgs.length - 1;
    }
    imgs[imgActive].classList.add('active');
})