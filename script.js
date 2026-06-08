const numeros = document.querySelectorAll(".numero");

numeros.forEach(numero => {
    const atualizar = () => {
        const alvo = +numero.getAttribute("data-target");
        const atual = +numero.innerText;

        const incremento = Math.ceil(alvo / 100);

        if (atual < alvo) {
            numero.innerText = atual + incremento;
            setTimeout(atualizar, 20);
        } else {
            numero.innerText = alvo;
        }
    };

    atualizar();
});
