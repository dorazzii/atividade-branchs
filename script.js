console.log("Projeto iniciado!");

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
});
