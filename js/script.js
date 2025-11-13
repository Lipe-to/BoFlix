document.addEventListener("DOMContentLoaded", () => {
    const posters = document.querySelectorAll(".grid-filmes img");
    const titulo = document.querySelector(".titulo-filme");
    const descricao = document.querySelector(".descricao-filme");
    const imagemPrincipal = document.querySelector(".img-principal");

    function trocarFilme(img) {
      const novoTitulo = img.dataset.titulo;
      const novaDescricao = img.dataset.descricao;
      const novaImagem = img.getAttribute("src");
  
      imagemPrincipal.classList.add("fade-out");
      titulo.classList.add("fade-out");
      descricao.classList.add("fade-out");
  
      setTimeout(() => {
        titulo.textContent = novoTitulo;
        descricao.textContent = novaDescricao;
        imagemPrincipal.setAttribute("src", novaImagem);
  
        imagemPrincipal.classList.remove("fade-out");
        titulo.classList.remove("fade-out");
        descricao.classList.remove("fade-out");
        imagemPrincipal.classList.add("fade-in");
        titulo.classList.add("fade-in");
        descricao.classList.add("fade-in");
  
        setTimeout(() => {
          imagemPrincipal.classList.remove("fade-in");
          titulo.classList.remove("fade-in");
          descricao.classList.remove("fade-in");
        }, 400);
      }, 300);
    }
    posters.forEach((img) => {
      img.addEventListener("click", () => trocarFilme(img));
    });
  });
  