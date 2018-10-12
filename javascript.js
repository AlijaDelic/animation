$(document).ready(function () {

    $("#object1").on("click", function () {
        if (Math.random() >= 0.5) {
            if ($("#object1").width() >= 0 && $("#object1").height() >= 0) {
                $(this).height("+=20px");
                $(this).width("+=20px");
            }
        } else {
            if ($("#object1").width() >= 100 && $("#object1").height() > 50) {
                $(this).height("-=20px");
                $(this).width("-=20px");
            }
        }
    })


    function moveobjects(object){
        for (var i = 0; i < 10; i++) {
            var randomHeight = Math.ceil(Math.random() * 400);
            var randomWidth = Math.floor(Math.random() * 700);
            $(object).animate({ top: randomHeight, left: randomWidth }, 1500)
            for (var y = 0; y < 5; y++) {
                var randomHeight = Math.ceil(Math.random() * 400);
                var randomWidth = Math.floor(Math.random() * 700);
                $(object).animate({ top: randomHeight , left: randomWidth }, 1500)
            }
        }
    }
    moveobjects("#object2")
    moveobjects("#object4")

    $("#object3").on("mouseover", function(){
        $(this).css("background-color","#db63b3d0")
    })
    $("#object3").on("mouseout", function(){
        $(this).css("background-color","#286090")
    })

  
});