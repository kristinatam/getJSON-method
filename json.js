$(document).ready(function() {
    $('button').click(function() {
        $('ul').empty();
            $.getJSON("data.json",function(data) {
                $.each(data.administration, function() {
                    $("ul").append("<li>Name: "+this['firstName']+"</li><li>Surname: "+this['lastName']+"</li><li>Age: "+this['age']+"</li>");
          });
        });
    });
});