$(function () {
    $.get("pages/header.html", function (data) {
        let dataAux = $(data);
        let list = dataAux.find('#nav-list li');
        $(list).each(function () {
            let aLabel = $(this).find("a");
            if (aLabel.attr('id') !== 'class-tap') {
                aLabel.attr('href', `pages/${aLabel.attr('href')}`);
            }
        });
        let logo = dataAux.find('#un-h');
        logo.attr('src','assets/img/LogoUN.png');
        $('#header-index-id').html(dataAux);
    });
    $.get("pages/footer.html", function (data){
        let dataAux = $(data);
        let tate = dataAux.find('#un-f');
        let logo = dataAux.find('#unC-f');
        let contributorsLink = dataAux.find('#contributors-link');
        tate.attr('src','assets/img/escudo-letras.png');
        logo.attr('src','assets/img/Logo.png')
        contributorsLink.attr('href',`pages/${contributorsLink.attr('href')}`);
        $('#footer-index-id').html(dataAux);
    });
});