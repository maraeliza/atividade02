var contatos = [

]
var contatosHTML = [

]
var ints = [
    "Impressão 3D para Ferramentas de Assistência Personalizadas",
    "Uso da robótica para pessoas com necessidades especiais",
    "Uso de tecnologia como ferramenta educacional"
]
$(document).ready(()=>{
    $("#dataInput").datepicker({
        showOtherMonths:true,
        selectOtherMonths:true,
        showAnim:"slideDown",
        dateFormat:"dd/mm/yy"
    })
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
        $("#"+id+"Div div").fadeIn()
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
            case "Admin":
                montarContatos();
                changeColor('blue')
                break
        }
    })

    $("#btnEnviar").click(function(e){
        e.preventDefault();
        var nome = $("#nomeInput").val();
        var email = $("#emailInput").val();
        var telefone = $("#telInput").val();
        var data = $("#dataInput").val();
        var sexo = $("input[name='sexoOp']:checked").val();
        var interesses = [];
        $("input[name='intOps']:checked").map((item)=>{
            interesses.push(ints[item])
        });

        if(nome && email){
            contatos.push({
                nome:nome,
                email:email,
                telefone:telefone,
                data:data,
                sexo:sexo,
                interesses:interesses
            })
            $("#nomeInput").val('');
            $("#emailInput").val('');
            $("#telInput").val('');
            $("#dataInput").val('');
            swal({
                title:nome+" foi adicionado com sucesso!",
                button:"OK"
            })
        }else {
            swal({
                title:"Preencha os campos de e-mail e nome!",
                button:"OK"
            })
            
        }
        console.log(interesses)
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

function montarContatos(){
    $("#pessoasDiv").val('')
    contatosHTML = [];
    if(contatos.length > 0){
        for(var i = 0; i < contatos.length; i++){
            var texto = "<div class='contato'>";
            texto += "<p><b>Nome:</b> "+contatos[i].nome +"</p>";
            texto += "<p><b>E-mail</b>: "+contatos[i].email+"</p>";
            if(contatos[i].telefone){
                texto += "<p><b>Telefone</b>: "+contatos[i].telefone+"</p>";
            }
            if(contatos[i].data){
                texto += "<p><b>Data de nascimento</b>: "+contatos[i].data+"</p>";
            }
            if(contatos[i].sexo){
                if(contatos[i].sexo == 'F'){
                    texto += "<p><b>Sexo</b>: Feminino </p>";
                }else {
                    texto += "<p><b>Sexo</b>: Masculino</p>";
                }
                
            }
            if(contatos[i].interesses.length>0){
                 texto += "<p><b>Interesses:</b> "
                for(var n = 0; n < contatos[i].interesses.length; n++){
                    texto += "<p>"+contatos[i].interesses[n]+"</p>";
                }
               
            }
            texto += "</div><hr>";
            contatosHTML.push(texto);
            
        }
        $("#pessoasDiv").html(contatosHTML);
    }else{
        $("#pessoasDiv").append(
            "<p> Nenhuma pessoa tentou entrar em contato ainda </p>"
        )
    }
}