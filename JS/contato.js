document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contato-form");
  const msg = document.getElementById("mensagem");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const texto = document.getElementById("mensagem-texto").value.trim();

    if (!nome || !email || !assunto || !texto) {
      mostrarMensagem("Por favor, preencha todos os campos.", "erro");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mostrarMensagem("Por favor, insira um email válido.", "erro");
      return;
    }

    mostrarMensagem("Mensagem enviada com sucesso!", "sucesso");
    form.reset();
  });

  function mostrarMensagem(texto, tipo) {
    msg.textContent = texto;
    msg.className = `mensagem ${tipo}`;
    msg.style.display = "block";

    setTimeout(() => {
      msg.style.display = "none";
    }, 4000);
  }
});
