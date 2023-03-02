var MAP;

$(document).ready(function(){
    MAP = getMap(0);
    load();


    function load(){
        $("body").html("<div class='gameContainer "+MAP["biome"]+"'></div>");
        $(".gameContainer").css({
            "width": screenWidth * MAP["x"]+"px",
            "height": screenHeight * MAP["y"]+"px"
        });
    }

    function getMap(id){
        return MAP_DATA[id];
    }
});