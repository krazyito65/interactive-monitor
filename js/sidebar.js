$("#menu-toggle").click(function(e) {
        console.log("Toggling Menu");
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});

$("#CreateNew").click(function(e) {
        console.log("Adding new Menu");            
        $("#grabME").after("<li>Link1<a><span class=\"sub_icon icon-link\"></span></a></li>")
});