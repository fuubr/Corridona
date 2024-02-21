var carro1 = document.getElementById("carro1")
var carro2 = document.getElementById("carro2")
var posicao1 = 0
var posicao2 = 0
var velocidade1 = 0
var velocidade2 = 0

function start(){
    var tempo = setInterval(function(){
        velocidade1 = Math.floor(Math.random()*10)
        velocidade2 = Math.floor(Math.random()*10)

        carro1.style.marginLeft = posicao1+"0px"
        carro2.style.marginLeft = posicao2+"0px"
        posicao1+=velocidade1
        posicao2+=velocidade2


        if(posicao1 >= 150 ){
            alert("carro1 vencedor")
            clearInterval(tempo)
        }
        else if(posicao2 >=150){
            alert("carro2 vencedor")
            clearInterval(tempo)
        }
    },100)
}