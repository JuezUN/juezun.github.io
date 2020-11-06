/* it is a function to controls the div that you want to set toggle behavior  */
function toggleContent(id){
    let controls = $(`#${id}`).attr("aria-controls");
    $(controls).collapse("toggle");
}

window.toggleContent = toggleContent;
