console.log("Projeto iniciado!");

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
});
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "") {
    alert("Digite seu nome!");
    return;
}

if (email === "") {
    alert("Digite seu e-mail!");
    return;
}

alert("Formulário enviado com sucesso!");
});
