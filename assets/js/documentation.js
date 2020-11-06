//Collapse presentations
$("#presentation").click(function () {
    $("#video").collapse("hide");
    $("#pdf").collapse("show");

});
//Collapse videos
$("#videos").click(function () {
    $("#pdf").collapse("hide");
    $("#video").collapse("show");
});

//Collapse pdf
$("#pdf-list li").click(function () {
    const id = $(this).find("a").attr("id");

    if ($("#noCollapse").find(`#${id}`).length !== 1) {
        let IDs = [];
        $("#pdf-list").find("a").each(function () {
            IDs.push(this.id)
        });
        IDs = $.grep(IDs, function (value) {
            return value !== id;
        });

        $.each(IDs, function (i, l) {
            $(`#${l}-pdf`).collapse("hide");
        });
        $(`#${id}-pdf`).collapse("show");
    }


});
//Collapse videos
$("#videos-list li").click(function () {
    let id = $(this).find("a").attr("id");
    let IDs = [];
    $("#videos-list li").find("a").each(function () {
        IDs.push(this.id)
    });

    IDs = $.grep(IDs, function (value) {
        return value !== id;
    });
    $.each(IDs, function (i, l) {
        $(`#${l}-v`).collapse("hide");
    });
    $(`#${id}-v`).collapse("show");

});
