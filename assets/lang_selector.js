$(document).ready(function() {
    let searchParams = new URLSearchParams(window.location.search)
    var lang;
    if (searchParams.has('lang')){

        lang = searchParams.get('lang');

        $("body").load('./'+lang+'.html #body',function(responseTxt, statusTxt, xhr){
            if(statusTxt == "error")
                $("body").load('./en.html #body');
        });
    }
    else $("body").load('./en.html #body');
});
