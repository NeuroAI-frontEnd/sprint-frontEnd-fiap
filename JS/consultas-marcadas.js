document.addEventListener("DOMContentLoaded", function () {
  const listaConsultas = document.getElementById("lista-consultas");
  let consultas = JSON.parse(localStorage.getItem("consultas")) || [];

  function renderizarConsultas() {
    listaConsultas.innerHTML = "";

    if (consultas.length === 0) {
      listaConsultas.innerHTML = "<p>Nenhuma consulta marcada.</p>";
      return;
    }

    consultas.forEach((consulta, index) => {
      const card = document.createElement("div");
      card.className = "card-consulta";

      card.innerHTML = `
        <h3>${consulta.nome}</h3>
        <p><strong>Email:</strong> ${consulta.email}</p>
        <p><strong>Especialidade:</strong> ${consulta.especialidade}</p>
        <p><strong>Data:</strong> ${consulta.data}</p>
        <p><strong>Hora:</strong> ${consulta.hora}</p>
        <button class="btn-excluir" data-index="${index}">Excluir</button>
      `;

      listaConsultas.appendChild(card);
    });

    EventoExcluir();
  }

  function EventoExcluir() {
    const botaoExcluir = document.querySelectorAll(".btn-excluir");

    botaoExcluir.forEach((btn) => {
      btn.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"));
        consultas.splice(index, 1);
        localStorage.setItem("consulta", JSON.stringify(consultas));
        renderizarConsultas();
      });
    });
  }

  renderizarConsultas();
});