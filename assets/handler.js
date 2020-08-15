$(document).ready(function() {
    var temp_sections = getSections("assets/content.txt");
    var temp_quotes = getQuotes("assets/quotes.txt"); //implement something to not parse the whole file
    var daily_quote = temp_quotes[Math.floor(Math.random() * 10)];
    $('#daily-quote').html(daily_quote);

    for (i = temp_sections.length - 1; 0 <= i; i--) {
        var sectionOBJ = $("#section").clone(true);
        setSection($(sectionOBJ), temp_sections[i].split('---'), i % 2 == 0);
        $(sectionOBJ).insertAfter($('#section:last')).show();
    }


    //setSection($(tempSectionOBJ), sections[0]);

});

function getSections(url) {
    var tmp = null;
    $.get({
        'async': false,
        'url': url,
        'success': function(data) {
            tmp = data.split('-NS-');
        }
    });
    return tmp;
};

function setSection(object, data, even = False) {

    if (even) $(object).find("#icon-container").addClass("w3-right").find("#icon").addClass(data[0]); //hacer algo q no sea buscar de nuevo en el dom
    else $(object).addClass("w3-light-grey").find("#icon").addClass(data[0]);

    $(object).find("#title").html(data[1]);
    $(object).find("#description").html(data[2]);
    $(object).find("#text").html(data[3]);

    return false;
};

function getQuotes(url) {
    var tmp = null;
    $.get({
        'async': false,
        'url': url,
        'success': function(data) {
            tmp = data.split('---');
        }
    });
    return tmp;
};