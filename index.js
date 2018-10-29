function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());   
}

$(".toggleButton").hover(function() {
    $(this).addClass("highlightedButton");
}, function() {
    $(this).removeClass("highlightedButton");
});


var x = window.matchMedia("(min-width: 400px)")
myFunction(x) 
x.addListener(myFunction)

function myFunction(x) {
    if (x.matches) { 
        $(".toggleButton").click(function() {
            $(this).toggleClass("active");
            $(this).removeClass("highlightedButton");
            var panelId = $(this).attr("id") + "Panel";
            $("#" + panelId).toggleClass("hidden");
            var numberOfActivePanels = 4 - $('.hidden').length;
            $(".panel").width(($(window).width() / numberOfActivePanels) - 20);
        })
        
        $(".panel").height($(window).height() - $("#header").height() - 15);
        
        $(".panel").width(($(window).width() / 2) - 20);
        
        updateOutput();
        
        $("textarea").on('change keyup paste', function() {
            updateOutput();
        });
    }
    else { 
        $(".toggleButton").click(function() {
            $(this).toggleClass("active");
            $(this).removeClass("highlightedButton");
            var panelId = $(this).attr("id") + "Panel";
            $("#" + panelId).toggleClass("hidden");
            var numberOfActivePanels = 4 - $('.hidden').length;
            $(".panel").height(($(window).height() / numberOfActivePanels) - 18 );
        })
        
        $(".panel").height(($(window).height() / 2) - $("#header").height());
        
        updateOutput();
        
        $("textarea").on('change keyup paste', function() {
            updateOutput();
        });
    }}
