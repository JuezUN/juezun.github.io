$("#presentacion").click(function () {
    $("#video").collapse('hide');
    $("#pdf").collapse('show');

    console.log("BOOLEAN", isExpandedPDF)

});
$("#videos").click(function () {
    $("#pdf").collapse('hide');
    $("#video").collapse('show');
});
$("#submission-ml").click(function () {
    $(".docCollapse").collapse('hide');
});

$('.docAux').click(function () {
    let id = $(this).attr('id');
    $(".docCollapse").collapse('hide');
    $(`#${id}-v`).collapse('show');
    console.log(id);
});
$('.docAux2').click(function () {
    let id = $(this).attr('id');
    $(".docCollapse2").collapse('hide');
    $(`#${id}-pdf`).collapse('show');
    console.log(id);
});