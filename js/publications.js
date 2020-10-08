function cite(id_ref,id){
    console.log(id_ref);
    /*copy reference*/
    let aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_ref).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    console.log(id);
    /*tooltip*/
    $(`#${id}`).tooltip('show');
    setTimeout(function(){ $(`#${id}`).tooltip('dispose');}, 700);
    /*collapse control*/
    let controls = $(`#${id}`).attr('aria-controls');
    $(controls).collapse('show')
}

window.cite = cite;
