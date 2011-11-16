var democlicked = 0;

$(".demo").addClass("menuslide");

$(".menuslide").hover(function() {
    $(".menuslide")
    .stop()
    .animate({
        height: 151 + "px"
    },
    {
        queue: true,
        duration: 300
    });
},
function() {
    $(".menuslide")
    .stop()
    .animate({
        height: 30 + "px"
    },
    {
        queue: false,
        duration: 300
    });
});

function is_touch_device() {
    //detect touch screen
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch(e) {
        return false;
    }
}
if (is_touch_device()) {
    $(".menuslide").click(function() {
        if (democlicked == 0) {
            democlicked++
            $(".menuslide")
            .stop()
            .animate({
                height: 151 + "px"
            },
            {
                queue: true,
                duration: 300
            });

        }
        else {
            democlicked--
            $(".menuslide")
            .stop()
            .animate({
                height: 30 + "px"
            },
            {
                queue: false,
                duration: 300
            });
        }
    });
}
