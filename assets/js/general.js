/* it is used to insert footer and header for normal pages that have data-include attribute on some div tag
* Actually can insert any html page, data-include content the path*/
$(function(){
    let includes = $("[data-include]");
    jQuery.each(includes, function(){
        let file = $(this).data("include") + ".html";
        $(this).load(file);
    });
});