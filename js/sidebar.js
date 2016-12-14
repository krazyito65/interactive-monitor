$("#menu-toggle").click(function(e) {
        console.log("Toggling Menu");
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});
num = 0
$("#CreateNew").click(function(e) {
    num += 1;    
    console.log("Adding new Menu" + num);            
        $("#grabME").after("<div id=\"item"+num+"\" ><li><a onclick=\"removeItem("+num+")\">Link"+num+"<svg class=\"icon icon-link\"><use xlink:href=\"symbol-defs.svg#icon-link\"></use></svg></a></li></div>");
        
});
function removeItem(num) {
    item = "item"+num
    $("#"+item).remove()
}