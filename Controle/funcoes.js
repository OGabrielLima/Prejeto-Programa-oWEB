var listaProdutos = [[0, "Kit de marmitas na semana", "./imagens/combo semana.png", false],
                     [1, "Salada de frutas", "./imagens/frutas.jpg", false],
                     [2, "Kit de marmitas para 2 semanas", "./imagens/com2semanas congelado.png", false],
                     [3, "Sucos naturais", "./imagens/img-para-texto-chamativo.jpg", false],
                     [4, "Prato Especial do Chef", "./imagens/especialdoChef.jpg", false],
                     [5, "Kit Casal fit", "./imagens/marmita do dia.jpg", false],
                     [6, "Kit Familia Fit", "./imagens/marmitas.jpg", false],
                     [7, "Marmitex do dia com sobremesa", "./imagens/premium.jpg", false]];


var carrinho = [];
var tam = 4;
window.onload = function () {  
    //mostrarItensDoCarrinho();
    montarCardsProdutos(tam);
}

function mostrarMais(){
    tam = listaProdutos.length;
    montarCardsProdutos(tam);
}

function montarCardsProdutos(tamanho){
    document.getElementById("divProd").innerHTML = "";
    for(var i=0; i < tamanho; i++){
        var conteudo = "";
        conteudo += "<div class='div-card-prod'>";
        conteudo += "<div class='div-card-img-prod'>";
        conteudo += "<img width='100%' src='"+listaProdutos[i][2]+"'>";
        conteudo += "</div>";
        conteudo += "<div class='div-card-descricao-prod'>";
        conteudo += "<h5>"+listaProdutos[i][1]+"<h5>";
        conteudo += "</div>";
        if(listaProdutos[i][3] == false){
            conteudo += "<div class='div-card-comprar-prod' onclick='comprar("+listaProdutos[i][0]+")'>";
            conteudo += "Comprar";
            conteudo += "</div>";
        } else {
            conteudo += "<div class='div-card-comprar-prod div-card-comprado-prod '>";
            conteudo += "Adicionado ao Carrinho";
            conteudo += "</div>";
        }
        conteudo += "</div>";
        document.getElementById("divProd").innerHTML += conteudo;
    } 
}

function comprar(id){
    listaProdutos[id][3]=true;
    carrinho.push(listaProdutos[id])
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
    montarCardsProdutos(tam);
}

function mostrarItensDoCarrinho(){
    alert("entra aqui");
    document.getElementById("divProdCarrinho").innerHTML = "";
    storage = window.localStorage;
    var itemCarrinho = JSON.parse(storage.getItem('carrinho'));
    console.log(itemCarrinho);
    for(var y=0; y < itemCarrinho; y++){
        carrinho.push(itemCarrinho);
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