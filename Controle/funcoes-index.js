var listaProdutos = [[0, "Kit de marmitas na semana", "./imagens/img-para-texto-chamativo.jpg", false],
                     [1, "Kit de marmitas na semana", "./imagens.frutas", false],
                     [2, "Kit de marmitas na semana", "./imagens.frutas", false],
                     [3, "Kit de marmitas na semana", "./imagens.frutas", false],
                     [3, "Kit de marmitas na semana", "./imagens.frutas", false],
                     [5, "Kit de marmitas na semana", "./imagens.frutas", false]]

var carrinho = [];

window.onload = function(){
    montarCardsProdutosMaisVendidos();
}

function montarCardsProdutosMaisVendidos(){
    document.getElementById("divProdutos").innerHTML = "";
    for(var i=0; i < 3; i++){
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
        document.getElementById("divProdutos").innerHTML += conteudo;
    } 
}

function comprar(id){
    listaProdutos[id][3]=true;
    carrinho.push(listaProdutos[id])
    window.localStorage.setItem("Carrinho", JSON.stringify(carrinho));
    montarCardsProdutos();
}


/*


var cards = [['', 'Frutas'],
['https://ciclovivo.com.br/wp-content/uploads/2015/03/vegetables.jpg', 'Vegetais'],
['https://www.ahstatic.com/photos/b6v4_rsr004_00_p_1024x768.jpg', 'Carnes'],
['https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients.com/news/research/global-study-links-high-fat-dairy-consumption-to-blood-and-heart-health/11403932-1-eng-GB/Global-study-links-high-fat-dairy-consumption-to-blood-and-heart-health.jpg', 'Dairy'],
['https://media.istockphoto.com/photos/fresh-mixed-fruits-picture-id467652436?b=1&k=20&m=467652436&s=170667a&w=0&h=SgDVjLV5rfJ-kJ80GYcQJ4CL1R0n4LoxTYXixnSZuWs=', 'outro2'],
['https://www.ahstatic.com/photos/b6v4_rsr004_00_p_1024x768.jpg', 'outro3']];

var inicio = 0;
var fim =  3;

window.onload = function() {
    montarCards()
}

function montarCards(valor) {
    
    if (valor){
        inicio += 3;
        fim = cards.length;
    }

    for (var i = inicio; i < fim; i++){

        // conteudo deve ser zerado para gerar um novo card, senao ira repetir o card anterior
        var conteudo = ""; 

    conteudo += '<div class="card-produto">';
    conteudo += '<div class="img-produto">';
    conteudo += '<img src="'
    conteudo += cards[i][0];
    conteudo+= '"></img>';
    conteudo += '</div>';
    conteudo += '<div class="texto-img">';
    conteudo += cards[i][1];
    conteudo += '</div>';
    conteudo += '</div>';
    conteudo += '</div>';

    console.log(valor);
    document.getElementById("produtos-cards").innerHTML += conteudo;
    }

function goPaginaLogin(){
    window.location.href='../login.html';
}
}*/