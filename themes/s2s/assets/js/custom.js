$(document).ready(function(){
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".nav-item").find(".closed").removeClass("closed").addClass("open");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".nav-item").find(".open").removeClass("open").addClass("closed");
    });
});