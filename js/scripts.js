$(document).ready(function() {
  for ( var i = 0; i < works.length; ++i) {
    $("#work-row").append("\
      <div class='col-md-3 col-xs-12'>\
          <div class='hover-text'>\
            <a href=" + works[i].URL + " class='work-img'>\
            <div class='overlay'><span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span></div>\
            \
              <img class='img-responsive' src='" + works[i].pic + "'>\
            </a>\
          </div>\
    ");

    var images = $("#work-row img");

    if(i%2 === 0){
      //make border green
      $(images[i]).css("border", "2px solid #499A91");

    } else {
      //make border grey
      $(images[i]).css("border", "2px solid #858585");
    };

    $(".work-img").mouseenter( function() {
        $(".info", this).show();
    }).mouseleave(function (){
        $(".info", this).hide();
    });

  };

});
