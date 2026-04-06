// Capturando os elementos
const inputBox = document.getElementById("valueAccount");
const tipSelect = document.getElementById("tip");
const buttonCalc = document.querySelector("#calcular");
const buttonDelete = document.querySelector("#delete");
const resultTip = document.getElementById("result-tip");
const sumTotal = document.getElementById("sum-total");
const errorMessage = document.getElementById("error-message");
const errorMessage2 = document.getElementById("error-message2");
//-------------------------------------------------------\\

// Criando a função para calcular.
function calcular() {
  if (campoVazio()) {
    return;
  }
  errorMessage.textContent = "";
  errorMessage2.textContent = "";

  const valor = Number(inputBox.value);
  const gorjeta = tipSelect.value;
  const valorGorjeta = valor * gorjeta;
  const totalPagar = valorGorjeta + valor;
  resultTip.textContent = `Valor da Gorjeta R$: ${valorGorjeta.toFixed(2).replace(".", ",")}`;
  sumTotal.textContent = `Valor total da conta R$: ${totalPagar.toFixed(2).replace(".", ",")}`;
  inputBox.value = "";
  tip.value = "";
}
// Capturando e evento de clique no botão calcular.
buttonCalc.addEventListener("click", calcular);

// Criando a função para apagar
function dell() {
  // 1. Pegamos o que está escrito AGORA na caixa
  const textoAtual = inputBox.value; // 2. Medimos o tamanho desse texto
  const tamanho = textoAtual.length; // 3. Criamos a versão "fatiada" (do início até o penúltimo)
  const textoNovo = textoAtual.slice(0, tamanho - 1); // 4. Devolvemos o texto cortado para a caixa
  inputBox.value = textoNovo;
}
// Capturando e evento de clique no botão apagar.
buttonDelete.addEventListener("click", dell);

// Função para verificar se o campo está vazio.
function campoVazio() {
  let temErro = false;

  if (inputBox.value === "") {
    errorMessage.textContent = "Digite um valor";
    temErro = true;
  }
   else {
    errorMessage.textContent = "";
  }
  if (tipSelect.value === "") {
    errorMessage2.textContent = "Selecione uma opção";
    temErro = true;
  } 
  else {
    errorMessage2.textContent = "";
  }
  return temErro;
}
