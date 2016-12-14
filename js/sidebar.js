$("#menu-toggle").click(function(e) {
        console.log("Toggling Menu");
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});
num = 0
$("#CreateNew").click(function(e) {
    num += 1;    
    console.log("Adding new Menu" + num);            
        $("#grabME").after("<div id=\"item"+num+"\" ><li><a id=\"CreateNew\">Link"+num+"<span class=\"sub_icon glyphicon glyphicon-link\"></span></a></li></div>");
        
});
//<li><a id="CreateNew">Link1<span class="sub_icon glyphicon glyphicon-link"></span></a></li>
function removeItem(num) {
    item = "item"+num
    $("#"+item).remove()
    this.num-=1
}