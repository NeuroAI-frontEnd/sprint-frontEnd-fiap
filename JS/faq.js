document.addEventListener("DOMContentLoaded", function () {
      const perguntas = document.querySelectorAll(".faq-pergunta");

      perguntas.forEach((pergunta) => {
        pergunta.addEventListener("click", function () {
          const item = this.parentElement;
          item.classList.toggle("ativo");
        });
      });
    });