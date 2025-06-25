const botoes = document.querySelectorA11 (".botão");

for (let i=0; i<botoes.length; i++){
    botoes [i].onclick =fuction (){

        for (let j=0; j<botoes.legth; j++){
            botoes [j].classlist.remove("ativo");
        }
        botoes[i].classlist.add("ativo");
    }
}