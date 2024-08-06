// Selecionar elementos
const produtoInput = document.getElementById('produto');
const quantidadeInput = document.getElementById('quantidade');
const listaProdutos = document.getElementById('lista-produtos');
const valorTotal = document.getElementById('valor-total');

let total = 0;

// Função para adicionar produto ao carrinho
function adicionar() {
  const produtoInfo = produtoInput.value.split(' - R$');
  const produtoNome = produtoInfo[0];
  const produtoPreco = parseFloat(produtoInfo[1]);
  const quantidade = parseInt(quantidadeInput.value);

  if (quantidade > 0) {
    const itemTotal = produtoPreco * quantidade;

    // Atualizar o total
    total += itemTotal;

    // Criar um novo elemento para o produto adicionado
    const novoProduto = document.createElement('section');
    novoProduto.className = 'carrinho__produtos__produto';
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${itemTotal.toFixed(2)}</span>`;
    
    // Adicionar o novo produto à lista de produtos
    listaProdutos.appendChild(novoProduto);

    // Atualizar o valor total no carrinho
    valorTotal.textContent = `R$${total.toFixed(2)}`;

    // Limpar o campo de quantidade
    quantidadeInput.value = '';
  } else {
    alert('Por favor, insira uma quantidade válida.');
  }
}

// Função para limpar o carrinho
function limpar() {
  // Limpar a lista de produtos
  while (listaProdutos.firstChild) {
    listaProdutos.removeChild(listaProdutos.firstChild);
  }

  // Resetar o total
  total = 0;
  valorTotal.textContent = 'R$0.00';
}

