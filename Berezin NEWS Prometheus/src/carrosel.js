const carrosselHome = document.getElementById('carrosel');
let imagens = document.querySelectorAll("#carrossel img");
let posit = 1;

const carrosselDireita = () => {
    if (posit >= imagens.length - 4) {
        posit = -2;
        carrosselDireita();
    };

    posit++;

    for (imagem of imagens) {
        imagem.style.left = `-${posit}00%`;
    };
}

const carrosselEsquerda = () => {
    if (posit === 0) {
        posit = imagens.length + 1;
        carrosselEsquerda();
    };

    posit--;

    for (imagem of imagens) {
        imagem.style.left = `-${posit}00%`;
    };
}

carrosselEsquerda();
/*
setInterval(carrosselDireita, 8000);
*/