window.onload=function(){
    $('.img1').hover(function(){
        $('.img2').css("display","block")
    },function(){
        $('.img2').css("display","none")
    },500)
    $('.img2').hover(function(){
        $('.img2').css("display","block")
    },function(){
        $('.img2').css("display","none")
    },500)
    $('.three-border').hover(function(){
        $('.three p').css("color","#333333")
    },function(){
        $('.three p').css("color","#a9a8a8")
    })
    $('.six-border').hover(function(){
        $('.six p').css("color","#333333")
    },function(){
        $('.six p').css("color","#a9a8a8")
    })
    $('.nine-border').hover(function(){
        $('.nine p').css("color","#333333")
    },function(){
        $('.nine p').css("color","#a9a8a8")
    })
    $("#audio_btn").click(function(){    
        var music = document.getElementById("music");    
        if(music.paused){    
            music.play();    
            $("#music_btn").attr("src","play.gif");    
        }else{    
            music.pause();    
            $("#music_btn").attr("src","pause.gif");    
        }    
    });    
}