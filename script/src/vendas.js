const btnNovaVenda = document.getElementById("novaVenda");
const btnFecharNovaVenda = document.getElementById("fecharModal");
function fecharModal() {}
btnNovaVenda.addEventListener("click", function () {
  console.log("botao clicado");
  const novaVenda = document.getElementById("modalVenda");
  novaVenda.style.display = "flex";
  btnFecharNovaVenda.addEventListener("click", function () {
    novaVenda.style.display = "none";
  });
});
