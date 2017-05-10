$(function () {
    $(".w-thumbnails div").slice(0, 96).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".w-thumbnails div:hidden").slice(0, 47).slideDown();
        if ($(".w-thumbnails div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
