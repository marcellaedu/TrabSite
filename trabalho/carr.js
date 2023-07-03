
const removeButtons = document.getElementsByClassName("remove-product-button")

console.log(removeButtons)

for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.parentElement.remove()
        updateTotal()
    })
}

function updateTotal(){
    let totalAmount = 0
    const cardProducts = document.getElementsByClassName("card-body")
    for (var i = 0; i < cardProducts.length; i++) {
        // console.log(cardProducts)
        const product = cardProducts[i].getElementsByClassName("lead")[0].innerText.replace("R$","").replace(",",".")
        const productQuant = cardProducts[i].getElementsByClassName('product-qtd-input')[0].value
        console.log(product)
    
        totalAmount = totalAmount + (product * productQuant)
    }
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".",",")
    document.querySelector(".float-end span").innerText = "R$" + totalAmount

}

const adicionar = document.getElementsByClassName("btn");

for (var i = 0; i < adicionar.length; i++) {
    adicionar[i].addEventListener("click", adicionarCart);
}


// Vindos dos cards

function adicionarCart(event) {
    const button = event.target;
    const card = button.closest(".card");
    const imagem = card.querySelector(".card-img-top").src;
    const productTitt = card.querySelector(".fw-bolder").innerText;
    const acharPreco = card.querySelector(".text-center span").innerText;

     // console.log(acharPreco);

    // Redirecionar para a página de checkout
    window.location.href = `carrinho.html?imagem=${encodeURIComponent(imagem)}&nome=${encodeURIComponent(productTitt)}&preco=${encodeURIComponent(acharPreco)}`;
}

const buttons = document.getElementsByClassName("add-to-cart-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", adicionarAoCarrinho);
}

// Botao
// Função para redirecionar para a página "carrinho.html"
function redirecionarParaCarrinho() {
    window.location.href = "carrinho.html";
  }
  
  // Adicione um ouvinte de evento para cada botão com o texto "Comprar"
  function adicionarOuvinteDeEvento() {
    var botoes = document.querySelectorAll('button');
    for (var i = 0; i < botoes.length; i++) {
      if (botoes[i].textContent === 'Comprar') {
        botoes[i].addEventListener('click', redirecionarParaCarrinho);
      }
    }
  }
  
  // Chame a função para adicionar os ouvintes de evento quando a página for carregada
  window.addEventListener('load', adicionarOuvinteDeEvento);

    