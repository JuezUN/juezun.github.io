function toggleContent(id){
    let controls = $(`#${id}`).attr("aria-controls");
    $(controls).collapse("toggle");
}

window.toggleContent = toggleContent;
