document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consulta-form");
  const msg = document.getElementById("mensagem");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const especialidade = document.getElementById("especialidade").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!nome || !email || !especialidade || !data || !hora) {
      mostrarMensagem("Por favor, preencha todos os campos.", "erro");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mostrarMensagem("Por favor, insira um email válido.", "erro");
      return;
    }

    const novaConsulta = { nome, email, especialidade, data, hora };
    let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    consultas.push(novaConsulta);
    localStorage.setItem("consultas", JSON.stringify(consultas));

    mostrarMensagem("Consulta agendada com sucesso!", "sucesso");
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