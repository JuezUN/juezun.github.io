//Collapse presentations
$("#presentacion").click(function () {
    $("#video").collapse('hide');
    $("#pdf").collapse('show');

});
//Collapse videos
$("#videos").click(function () {
    $("#pdf").collapse('hide');
    $("#video").collapse('show');
});

//Collapse pdf
$('#pdf-list li').click(function(){
    let IDs = []
    $('#pdf-list').find("a").each(function (){IDs.push(this.id)});
    let id = $(this).find('a').attr('id');

    IDs = $.grep(IDs,function(value){
        return value !== id;
    });
    
    $.each(IDs,function (i,l){
        console.log(l);
        $(`#${l}-pdf`).collapse('hide');
    });
    $(`#${id}-pdf`).collapse('show');
    
});
//Collapse videos
$('#videos-list li').click(function(){
    let IDs = [];
    $('#videos-list li').find("a").each(function (){IDs.push(this.id)});
    let id = $(this).find('a').attr('id');
   
    console.log("IDS:", IDs);
    IDs = $.grep(IDs,function(value){
        return value !== id;
    });
    console.log("IDS2:", IDs);
    $.each(IDs,function (i,l){
        $(`#${l}-v`).collapse('hide');
        console.log("hide",l);
    });
    $(`#${id}-v`).collapse('show');
    console.log("id",id);
});