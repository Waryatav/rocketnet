function heightDetected(){
    $(".invitation").css("height",$(window).height());
}

heightDetected();
$(window).resize(
    function(){heightDetected();
    });

$(document).on("click",".skip-video",function () {
    $(".inv-video-container").css({"display":"none"});
    $(".inv-event-container").css({"display":"block"});

    return false;
})