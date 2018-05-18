//javascript, jQuery

function getData(){

    var input = $("#searchtext").val()

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=jSPmjWAflCKQgsYNIYsb2NPnXB4DURdE&limit=30");
    
    xhr.done(function(response) {
         console.log("success got data", response);
    
    var jiffs = response.data;
    console.log(jiffs);
    console.log(jiffs[1]);
    console.log(jiffs.length);
    console.log(typeof jiffs);

    var jiffsCutOne = jiffs.slice(0, 9);
    var jiffsCutTwo = jiffs.slice(10, 19);
    var jiffsCutThree = jiffs.slice(20, 30);
    console.log(jiffsCutOne);

    function sliceArray(){


    }
    for(i in jiffsCutOne)
    {
        $('.column-one').append("<img src='" + jiffsCutOne[i].images.original.url + "'/>");
    }
    for(i in jiffsCutTwo)
    {
        $('.column-two').append("<img src='" + jiffsCutTwo[i].images.original.url + "'/>");
    }
    for(i in jiffsCutThree)
    {
        $('.column-three').append("<img src='" + jiffsCutThree[i].images.original.url + "'/>");
    }


    // for (i in jiffs)
    // {
    //     $('.column-one').append("<img src='" + jiffs[i].images.original.url + "'/>");
    //     console.log(i);
    // }
    });

}



