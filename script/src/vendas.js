const btnNovaVenda = document.getElementById("novaVenda");
const btnFecharNovaVenda = document.getElementById("fecharModal");
const modalNovoCliente = document.getElementById("modalNovoCliente");
const btnNovoCliente = document.getElementById("btnNovoCliente");

btnNovaVenda.addEventListener("click", function () {
  console.log("botao clicado");
  const novaVenda = document.getElementById("modalVenda");
  novaVenda.style.display = "flex";

  btnFecharNovaVenda.addEventListener("click", function () {
    novaVenda.style.display = "none";
  });

  btnNovoCliente.addEventListener("click", function () {
    modalNovoCliente.style.display = "flex";
  });
});
