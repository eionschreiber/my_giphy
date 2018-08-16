

const getGiphyImages = theUrl => 
{
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    const data = xmlHttp.responseText;
    const jsonResponse = JSON.parse(data);
    const jsonArray = jsonResponse['data'];
    createImagesFromArray(jsonArray);
    return jsonArray;

}

let createImagesFromArray = dataArray =>{
    for(i in dataArray){
        const trendingImage = document.createElement('img');
        const mainContentDiv = document.getElementById('main');
        trendingImage.setAttribute('src', dataArray[i].images.original.url);
        mainContentDiv.appendChild(trendingImage);
    }
}

const trendingGiphyImages = () => {
    const urlWithAPIKey = 'https://api.giphy.com/v1/gifs/trending?api_key=jSPmjWAflCKQgsYNIYsb2NPnXB4DURdE&limit=25&rating=G';
    getGiphyImages(urlWithAPIKey);
}


const searchImages = () =>{
    const input = document.getElementById("searchtext").value;
    const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=jSPmjWAflCKQgsYNIYsb2NPnXB4DURdE&limit=30`;
    getGiphyImages(searchUrl);
}

trendingGiphyImages();


//Old Code that might come in handy for the furture espeically for styling

// const getData = () => {

//     const input = document.getElementById("searchtext").value;

//     const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=jSPmjWAflCKQgsYNIYsb2NPnXB4DURdE&limit=30");
    
//     xhr.done(function(response) {
//          console.log("success got data", response);
    
//     const jiffs = response.data;
//     console.log(jiffs[0]);
//     console.log(jiffs[0].url);
//     let jiffsCutOne = jiffs.slice(0, 9);
//     let jiffsCutTwo = jiffs.slice(10, 19);
//     let jiffsCutThree = jiffs.slice(20, 30);

//     const sliceArray = ()=> {

//     }

//     for(i in jiffsCutOne)
//     {
//         let newJiffImage = document.createElement('img');
//         newJiffImage.setAttribute('src', jiffsCutOne[i].images.original.url);
//         document.getElementsByClassName('column-one')[0].appendChild(newJiffImage);
//     }
//     for(i in jiffsCutTwo)
//     {
//         let newJiffImage = document.createElement('img');
//         newJiffImage.setAttribute('src', jiffsCutTwo[i].images.original.url);
//         document.getElementsByClassName('column-two')[0].appendChild(newJiffImage);
//     }
//     for(i in jiffsCutThree)
//     {
//         let newJiffImage = document.createElement('img');
//         newJiffImage.setAttribute('src', jiffsCutThree[i].images.original.url);
//         document.getElementsByClassName('column-three')[0].appendChild(newJiffImage);
//     }
//     });

// }





