$("#menu-toggle").click(function(e) {
        console.log("Toggling Menu");
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});
num = 0

$("#CreateNew").click(function(e) {
    num += 1;    
    console.log("Adding new Menu: item");            
        $("#grabME").after("<div id=\"item"+num+"\" ><li>Link"+num+"<a onclick=\"removeItem("+num+")\"><span class=\"sub_icon glyphicon glyphicon-minus\"></span></a></li></div>");
});

function removeItem(num) {
    item = "item"+num;
    console.log("Removing Item");
    $("#"+item).remove();
    this.num -= 1;
}