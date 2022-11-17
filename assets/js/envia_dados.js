
//status=div contendo o status
//urlData= url com os parametros
//pagina= url da pagina a ser executada a operação
function buscaDados(status,urlData,pagina,msgErro,nivelFromImages){
    var loading="Aguarde...";

    try{
        // Opera 8.0+, Firefox, Safari
        objetoAjax = new XMLHttpRequest();
    }
    catch (e){
        // Internet Explorer Browsers
        try{
            objetoAjax = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
        try{
            objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e){
            // Something went wrong
            alert("Desculpe, mas seu navegador não é compatível, tente com outro navegador");
            $(status).fadeOut('fast');
            return false;
            }
        }
    }
    status = document.getElementById(status);
    status.innerHTML=loading;
    objetoAjax.onreadystatechange = function(){
        // O valor 4 na propriedade readyState significa que o objeto já completou/finalizou o
        // recebimento de dados

        if(objetoAjax.readyState == 4){
            // 200 = resposta do servidor OK
            if(objetoAjax.status == 200){
                var resposta=objetoAjax.responseText;
                switch(resposta.trim()){
                    case "OK":
                        status.innerHTML='';
                        location.reload();
                    break;
                    case "email":
                        status.innerHTML='Email enviado com sucesso!';
                        //alert("Email enviado com sucesso!");
                    break;
                    case "erro":
                        status.innerHTML = '<div class="alert alert-danger"><span><strong>'+msgErro+'</strong></span></div>';
                    break;
                    default:
                        if (resposta.indexOf("OK")!=-1)
                        {
                            if(resposta.indexOf("out")!=-1)//logout
                            {
                                location.reload();
                                break;    
                            }
                            if(resposta.indexOf("reseta")!=-1)
                            {
                                status.innerHTML='';
                                $('#modalResetaSenha').modal('show');
                                var index=resposta.indexOf('=');
                                index=resposta.substring(index+1);
                                $('#id_reseta').val(index);
                                break;
                            }
                            else
                            {
                                status.innerHTML = '!';
                                var r = confirm("Ver o erro?");
                                if (r == true) {
                                    alert(resposta);
                                } else {
                                    location.reload();    
                                }
                                break;
                            }
                        }
                        else
                        {
                            if (resposta.indexOf("foi")!=-1) 
                            {
                                status.innerHTML=resposta;
                                break;
                            }
                            else
                            {
                                status.innerHTML = '<font color="Red">Algo errado aconteceu, tente novamente!</font>';
                                var r = confirm("Ver o erro?");
                                if (r == true) {
                                    alert(resposta);
                                } else {
                                    location.reload();    
                                }
                            }
                        }
                }
            }
        }
        else
        {
            status.innerHTML='Aguarde...';
        }
    }
    //////////////////////////////////////////////////////
    objetoAjax.open("POST", pagina, true);
    objetoAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objetoAjax.send(urlData);
}

function validaCampos(campos)
{
    var retorno=true;
    for (var i = 0; i <= campos.length -1; i++) 
    {
        
        var elemento = document.getElementById(campos[i]).value;
        //alert(elemento);
        if(elemento=='')
        {
            alert("Algum campo nao foi preenchido corretamente!");
            document.getElementById(campos[i]).focus();
            retorno=false;
            break;
        }
    }
    return retorno;
}

//Formata número tipo moeda usando o evento onKeyDown
function Formata(campo,tammax,teclapres,decimal) 
{
        var tecla = teclapres.keyCode;
        vr = Limpar(campo.value,"0123456789");
        tam = vr.length;
        dec=decimal
        if (tam < tammax && tecla != 8){ tam = vr.length + 1;}
        if (tecla == 8 ) { tam = tam - 1; }
        if ( tecla == 8 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 )
        {
          if ( tam <= dec ) { campo.value = vr; }
          if ( (tam > dec) && (tam <= 5) )
          {
            campo.value = vr.substr( 0, tam - 2 ) + "," + vr.substr( tam - dec, tam ); 
          }
          if ( (tam >= 6) && (tam <= 8) )
          {
            campo.value = vr.substr( 0, tam - 5 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam );
          }
          if ( (tam >= 9) && (tam <= 11) )
          {
            campo.value = vr.substr( 0, tam  - 8 ) + "." + vr.substr( tam  - 8, 3 ) +  "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ); 
          }
          if ( (tam >= 12) && (tam <= 14) )
          {
            campo.value = vr.substr( 0, tam - 11 ) + "." + vr.substr( tam - 11, 3 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - dec, tam ); 
          }
          if ( (tam >= 15) && (tam <= 17) )
          {
            campo.value = vr.substr( 0, tam - 14 ) + "." + vr.substr( tam - 14, 3 ) + "." + vr.substr( tam - 11, 3 ) + "." + vr.substr( tam - 8, 3 ) + "." + vr.substr( tam - 5, 3 ) + "," + vr.substr( tam - 2, tam );
          }
        }
}

//formatar valor moeda
function Limpar(valor, validos) 
{
        // retira caracteres invalidos da string
        var result = "";
        var aux;
        for (var i=0; i < valor.length; i++) 
        {
          aux = validos.indexOf(valor.substring(i, i+1));
          if (aux>=0) 
          {
            result += aux;
          }
        }
        return result;
}
