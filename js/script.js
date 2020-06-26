
// Títulos e Subtítulos
    var textoinicial = "America: Land of Opportunity"
    $(".textoinicial").html(textoinicial);

// Esconder Texto Inicial e SubMenu
$(function(){
    $("#div-inicial").show();
    $("#div-conteudo").hide();
});

function openBasic(){
    $("#div-inicial").hide();
    $("#div-conteudo").show();
}

function reset(){
    $("#div-inicial").show();
    $("#div-conteudo").hide();
}
    