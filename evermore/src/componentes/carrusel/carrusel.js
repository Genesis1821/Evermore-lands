

function Carrusel(){
    const carousel = document.querySelector('.carrusel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
        image.style.display = 'block';
        } else {
        image.style.display = 'none';
        }
    });
    }

    function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
    }

    function previousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
    }

    // Event listeners para los botones de siguiente y anterior
    document.querySelector('.next-button').addEventListener('click', nextImage);
    document.querySelector('.previous-button').addEventListener('click', previousImage);

    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);
    return(
        <>
        <img src="../img/chateau.jpg" alt="Propiedad"></img>
        <img src="../img/construction.jpg" alt="Propiedad"></img>
        <img src="../img/architecture.jpg" alt="Propiedad"></img>
        <img src="../img/alley.jpg" alt="Propiedad"></img>
        <button class="next-button"> <img src="img/flecha1.png" alt="" class="next-img"></img></button>
        <button class="previous-button"><img src="img/flecha2.png" alt="" class="before-img"></img> </button>
        </>
    )
};

export default Carrusel