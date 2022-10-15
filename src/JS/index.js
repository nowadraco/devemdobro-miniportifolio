const abas = document.querySelectorAll(".aba")
abas.forEach(aba => {
    aba.addEventListener("click", function(){
        if(aba.classList.contains("selecionado")){
            return;
        }

        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado"):

        aba.classList.add("selecionado"):

        const informacaoselecionada = document.querySelector(".informacao.selecionado");
        informacaoselecionada.classList.remove("selecionado");

        
    });
});