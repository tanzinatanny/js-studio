var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=EVtm49qiPF_Dy6XxVwsFcMbYr9d6DWpalwBRufM5zFY";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
      processData(request.response);
    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////

const processData = (response) => {

  const data =  JSON.parse(response).data;

  const result = data.filter(plant => plant.family = "Fagaceae");

  console.log(result);

  let html = '';

  for (i of result){

    html += `<div class="p-4 item">
            <img class="img-fluid " src="${i.image_url}" alt="">
            <h6>${i.common_name}</h6>
            <h6></h6>
          </div>
    ` 

  }

 

  items = document.getElementsByClassName('gallery')[0].innerHTML = html;

  console.log(items);



  
  




  


}


