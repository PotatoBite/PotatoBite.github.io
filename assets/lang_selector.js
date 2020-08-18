$(document).ready(function() {
    let searchParams = new URLSearchParams(window.location.search)
    var lang;
    if (searchParams.has('lang')){

        lang = searchParams.get('lang');

        $("html").load(lang+'.html',function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("html").load('en.html');
        });
    }
    else $("html").load('en.html');

});
