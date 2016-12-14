$("#menu-toggle").click(function(e) {
        console.log("Toggling Menu");
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});

$("#CreateNew").click(function(e) {
        console.log("Adding new Menu");            
        $("#grabME").after("<li><a>Link1<svg class=\"icon icon-link\"><use xlink:href=\"symbol-defs.svg#icon-link\"></use></svg></a></li>")
});