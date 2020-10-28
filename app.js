var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=t4W0efQC2wihfCRK5NB6aB-prPrGmuXa01CMe60cWqc";

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

function renderData(response) {
  var data_array = JSON.parse(response).data
  return data_array
}

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      const plants = JSON.parse(request.response).data
      console.log(plants);
      const names = plants.map(plant => plant.common_name);
      const body = document.getElementById('body');

      names.map(name => {
        var wrapper = document.createElement('div')
        wrapper.setAttribute("class", "wrapper")
        var h3 = document.createElement('h3');
        h3.innerHTML = name;
        wrapper.appendChild(h3);
        body.appendChild(wrapper);
      })



      // for (var i = 0; i < data_array.length; i++) {
      //   var div = document.createElement("div");
      //   var text = document.createTextNode(dara_array[common_name]);
      //   div.appendChild(text);
      //
      //   var element = document.getElementById('body');
      //   element.appendChild(div);
      // }

    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
