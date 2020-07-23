$(document).ready(function() {
    var temp_sections = getSections("static/content.txt");

    /*   var sections = [];//aqui solo seteo las diferentes partes de cada seccion, en un array de arrays
       for (i = 0; i < temp_sections.length; i++) {
           sections.push(temp_sections[i].split('---'));
       }*/

    for (i = 0; i < temp_sections.length; i++) {
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

    if (!even) {
        $(object).find("#icon-container").addClass("w3-right").find("#icon").addClass(data[0]); //hacer algo q no sea buscar de nuevo en el dom
    } else $(object).find("#icon").addClass(data[0]);
    $(object).find("#title").html(data[1]);
    $(object).find("#description").html(data[2]);
    $(object).find("#text").html(data[3]);
    return false;
};