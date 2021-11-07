window.onload = function () {  

    mostrarItensDoCarrinho();
}


function mostrarItensDoCarrinho(){

    var carrinho = [];
    var itemCarrinho = [];


    document.getElementById("divProdCarrinho").innerHTML = "";
    
    itemCarrinho = JSON.parse(window.localStorage.getItem('carrinho'));



    for(var y=0; y < itemCarrinho.length; y++){
        carrinho.push(itemCarrinho[y]);
    }
  

    for(var i=0; i < carrinho.length; i++){
        var conteudo = "";
        conteudo += "<div class='div-card-prod'>";
        conteudo += "<div class='div-card-img-prod'>";
        conteudo += "<img width='100%' src='"+carrinho[i][2]+"'>";
        conteudo += "</div>";
        conteudo += "<div class='div-card-descricao-prod'>";
        conteudo += "<h5>"+carrinho[i][1]+"<h5>";
        conteudo += "</div>";
        conteudo += "<div class='div-card-comprar-prod div-card-comprado-prod'>";
        conteudo += "Adicionado ao Carrinho";
        conteudo += "</div>";
        conteudo += "</div>";
        document.getElementById("divProdCarrinho").innerHTML += conteudo;
    } 
}