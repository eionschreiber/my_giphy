//javascript, jQuery

function getData(){

    var input = $("#searchtext").val()

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=jSPmjWAflCKQgsYNIYsb2NPnXB4DURdE&limit=30");
    xhr.done(function(response) {
         console.log("success got data", response);
    
    var jiffs = response.data;
    
    for (i in jiffs)
    {
        $('.grid-container').append("<div class='grid-item " + i +"'><img src='" + jiffs[i].images.original.url + "'/></div>")
    }
    });

}

