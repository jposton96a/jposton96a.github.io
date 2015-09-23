$(".read-more").click(function () {
    $("#circle-modals").addClass("offscreen");
    $("#modal-info").removeClass("offscreen");
});
$(".go-back").click(function () {
    $("#circle-modals").removeClass("offscreen");
    $("#modal-info").addClass("offscreen");
});