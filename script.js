
$(document).ready(function(){

    //configuração inicial
    $("#tela2").hide();
    $("#tela3").hide();
    $("#tela4").hide();
    $("#tela5").hide();
    $("#tela6").hide();

    $("#tela_cerebro").hide();
    $("#tela_pulmao").hide();
    $("#tela_coracao").hide();
    $("#tela_figado").hide();
    $("#tela_rim").hide();

    $("#bt_iniciar").click(function(){

        $("#tela1").hide();
        $("#tela2").show();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_figado").hide();
        $("#tela_rim").hide();
    });

    $("#continuar1").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").show();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_figado").hide();
        $("#tela_rim").hide();
    });

    $("#continuar2").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").show();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_figado").hide();
        $("#tela_rim").hide();
    });

    $("#continuar3").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").show();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_figado").hide();
        $("#tela_rim").hide();
    });

    $("#continuar4").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").show();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_figado").hide();
        $("#tela_rim").hide();
    });

    $("#dnv").click(function(){

        //configuração inicial

        $("#tela1").show();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_figado").hide();
        $("#tela_rim").hide();
    });



    $("#cerebro").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").show();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_rim").hide();


        $(".voltar").click(function(){

            $("#tela1").hide();
            $("#tela2").hide();
            $("#tela3").show();
            $("#tela4").hide();
            $("#tela5").hide();
            $("#tela6").hide();
    
            $("#tela_cerebro").hide();
            $("#tela_pulmao").hide();
            $("#tela_coracao").hide();
            $("#tela_figado").hide();
            $("#tela_rim").hide();
        });
    });


    $("#pulmao").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").show();
        $("#tela_coracao").hide();
        $("#tela_figado").hide();
        $("#tela_rim").hide();


        $(".voltar").click(function(){

            $("#tela1").hide();
            $("#tela2").hide();
            $("#tela3").show();
            $("#tela4").hide();
            $("#tela5").hide();
            $("#tela6").hide();
    
            $("#tela_cerebro").hide();
            $("#tela_pulmao").hide();
            $("#tela_coracao").hide();
            $("#tela_figado").hide();
            $("#tela_rim").hide();
        });
    });


    $("#coracao").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").show();
        $("#tela_figado").hide();
        $("#tela_rim").hide();


        $(".voltar").click(function(){

            $("#tela1").hide();
            $("#tela2").hide();
            $("#tela3").show();
            $("#tela4").hide();
            $("#tela5").hide();
            $("#tela6").hide();
    
            $("#tela_cerebro").hide();
            $("#tela_pulmao").hide();
            $("#tela_coracao").hide();
            $("#tela_figado").hide();
            $("#tela_rim").hide();
        });
    });

    $("#figado").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_figado").show();
        $("#tela_rim").hide();


        $(".voltar").click(function(){

            $("#tela1").hide();
            $("#tela2").hide();
            $("#tela3").show();
            $("#tela4").hide();
            $("#tela5").hide();
            $("#tela6").hide();
    
            $("#tela_cerebro").hide();
            $("#tela_pulmao").hide();
            $("#tela_coracao").hide();
            $("#tela_figado").hide();
            $("#tela_rim").hide();
        });
    });


    $("#rim").click(function(){

        $("#tela1").hide();
        $("#tela2").hide();
        $("#tela3").hide();
        $("#tela4").hide();
        $("#tela5").hide();
        $("#tela6").hide();

        $("#tela_cerebro").hide();
        $("#tela_pulmao").hide();
        $("#tela_coracao").hide();
        $("#tela_figado").hide();
        $("#tela_rim").show();


        $(".voltar").click(function(){

            $("#tela1").hide();
            $("#tela2").hide();
            $("#tela3").show();
            $("#tela4").hide();
            $("#tela5").hide();
            $("#tela6").hide();
    
            $("#tela_cerebro").hide();
            $("#tela_pulmao").hide();
            $("#tela_coracao").hide();
            $("#tela_figado").hide();
            $("#tela_rim").hide();
        });
    });

});