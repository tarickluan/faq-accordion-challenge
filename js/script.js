document.addEventListener("DOMContentLoaded", () => {
    const perguntas = document.querySelectorAll(".pergunta");

    perguntas.forEach((pergunta) => {
        pergunta.addEventListener("click", () => {
            const isExpanded = pergunta.getAttribute("aria-expanded") === "true";
            const resposta = pergunta.nextElementSibling;
            const img = pergunta.querySelector("img");

            if (isExpanded) {
                pergunta.setAttribute("aria-expanded", "false");
                resposta.setAttribute("aria-hidden", "true");
                img.setAttribute("src", "../assets/images/icon-plus.svg");
                img.setAttribute("alt", "Expandir");
            } else {
                pergunta.setAttribute("aria-expanded", "true");
                resposta.setAttribute("aria-hidden", "false");
                img.setAttribute("src", "../assets/images/icon-minus.svg");
                img.setAttribute("alt", "Esconder");
            }
        });
    });
});