$(document).ready(function() {
  //other method
  fetch("./en.html",{
    headers: {
        'Content-Type': 'text/plain'
        //'Content-Type': 'application/x-www-form-urlencoded',
    }}).then(function(response) {
        return response;
    })
    .then(function(response) {
        console.log( response.body.response );
});
//other method
function ajax(url, callbackFunction) {
    var request =  new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader("Content-Type",
      "application/x-www-form-urlencoded");

    request.onreadystatechange = function() {
      var done = 4, ok = 200;
      if (request.readyState == done && request.status == ok) {
        if (request.responseText) {
          callbackFunction(request.responseText);
        }
      }
    };
    request.send();
  }

  var getComplete = function (text) {
    var x = document.getElementsByTagName("html");
    //alert(x.innerHTML());
  }
  //ajax("./en.html", getComplete);
});
