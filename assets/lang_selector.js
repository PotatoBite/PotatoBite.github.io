$(document).ready(function() {
    let preferred_lang = navigator.languages[0].substring(0,2);
    let searchParams = new URLSearchParams(window.location.search)
    var lang_in_URLget;
    if (searchParams.has('lang')){
        lang_in_URLget = searchParams.get('lang');
        $("body").load('./'+lang_in_URLget+'.html #body',function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("body").load('./' + preferred_lang + '.html #body',function(responseTxt, statusTxt, xhr){
                    if(statusTxt == "error")
                        $("body").load('./en.html #body');
                });
        });
    }
    else {
        $("body").load('./' + preferred_lang + '.html #body',function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("body").load('./en.html #body');
        });
    }
});
