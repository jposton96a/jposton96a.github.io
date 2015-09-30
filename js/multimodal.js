// Load All Extra Pages and add them to the document
var pages = [];
$("link[rel='import']").each(function () {
    pages.push($(this)[0].import.getElementsByClassName("page"))
});
for (pageNum in pages) {
    $("#page_content").append(pages[pageNum]);
}

$(".local_link").click(function () {
    goToPage($(this).attr("data-modal"));
});

function goToPage(pageName) {
    console.log("Going to page: " + pageName);
    $(".page").each(function () {
        if ($(this).attr("id") == pageName) {
            $(this).removeClass("offscreen");
        } else {
            $(this).addClass("offscreen");
        }
    });
}