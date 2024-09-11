$(document).ready(()=>{
 
    //esconde todas as divs
    $("#todasDivs div").hide()
    $("#SobreDiv").show()
    $("#logo").animate({
          opacity:'1',
          scale:1
    }, 'slow')
    $("#logoif").animate({
        opacity:'1',
        'margin-left': '20px'
    }, 'slow')
   
    //checa se eu cliquei em algum item do menu
    $("#menu p").click(function(){
        $("#logo").show()
        $("#logoMidi").animate({
            scale:0
        }, 'slow')
        //pega o id do item
        var id = $(this).attr('id')
        //esconde todos os itens
        $("#todasDivs div").hide()
        //exibe a div correspondente
        $("#"+id+"Div").fadeIn()
        switch(id){
            case "Sobre":
                changeColor('green')
                break
            case "Equipe":
                changeColor('blue')
                break
            case "Agenda":
                changeColor('red')
                break
            case "Projetos":
                $("#logo").hide()
                $("#logoMidi").animate({
                    scale:1
                }, 'slow')
                changeColor('brown')
                break
            case "Contato":
                changeColor('#ffe95c')
                break
        }
    })
})  

function changeColor(cor){
    $("#menu").css(
        "background-color",cor
    )
    $("body").css({
        color:cor
    })
    if(cor == "#ffe95c"){
        
        $("#menu p").css({
            color:'orange'
        })
        $("body").css({
            color:'orange'
        })
    }else{
        $("#menu p").css({
            color:'white'
        })
    }
    
}