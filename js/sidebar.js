$("#menu-toggle").click(function(e) {
        console.log("Toggling Menu");
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});
num = 0

$("#CreateNew").click(function(e) {
    num += 1;    
    console.log("Adding new Menu: item");            
        $("#grabME").after("<div id=\"item"+num+"\" ><li><a onclick=\"removeItem("+item+")\">Link"+num+"<svg class=\"icon icon-link\"><use xlink:href=\"symbol-defs.svg#icon-link\"></use></svg></a></li></div>");
        
});

function removeItem() {
    item = "item"+num;
    console.log("Removing Item");
    $("#"+item).remove();
    this.num -= 1;
}