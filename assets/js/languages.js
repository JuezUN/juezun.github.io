function changeLanguage(messagesDictionary,language){
    let elements = $("[data-key]");
    elements.each(function(){
        let message = messagesDictionary['languages'][language][$(this).data("key")]
        $(this).html(message);
    });
}

/*Change lenguage of a page by dictionary*/
function changeByPage(language, pageName){
   switch(pageName){
        case "index.html":
             changeLanguage(indexPageMessages,language);
             break;
        case "contributors.html":
             changeLanguage(contributorsPageMessages,language);
             break;
        case "documentation.html":
             changeLanguage(documentationPageMessages,language);
             break;
        case "publications.html":
             changeLanguage(publicationsPageMessages,language);
             break;
        case "repositories.html":
             changeLanguage(repositoriesPageMessages,language);
             break;
        default:
             break;
   }
};

/*Change language on current page*/
function changePageMessages(language){

   let pageLocation = window.location.pathname;
   let pageName = pageLocation.substring(pageLocation.lastIndexOf('/') + 1);

   changeByPage(language, pageName);
   changeLanguage(footerPageMessages,language);
   changeLanguage(headerPageMessages,language);
   changeDropdownLanguage(language);

   localStorage.setItem("lang",language);
};

/*Change option on dropdown*/
function changeDropdownLanguage(language){
    $("#language-dropdown li").each(function(){
        if($(this)[0].innerText == language){
            $("#language-dropdown a")[0].innerHTML = $(this)[0].innerHTML;
        }
    });
}

/*Set the initial languages on the page for the messages*/
function setInitialLanguage(){
    let language = localStorage.getItem("lang");
    if(!language){
        language = 'en';
    }
    changePageMessages(language);
}
