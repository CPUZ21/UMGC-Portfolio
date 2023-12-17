const YOUTUBE_SEARCH_URL = 
'https://www.googleapis.com/youtube/v3/search';
const key = 'AIzaSyAwlWaOK-ZH1FnQG4187zQkjsbJQVkRP4g';

var getJSON = function(url, query, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, query, true);
xhr.setRequestHeader('Access-Control-Allow-Origin',true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

function getDataFromApi(searchTerm, callback) {
  
 const query = {
  part: 'snippet',
  key: key,
  q: `${searchTerm} in:name`,
 }
  getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function renderResult(result) {
 return `
  <div>
   <h2>
   <a class="js-result-name" href="https://www.youtube.com/watch?v=${ 
   result.id.videoId}" target="_blank">${result.id.videoId}</a></h2>
  </div>
 `;
}

function displayYoutubeSearchData(data) {
 console.log(data);
 const results = data.items.map((item, index) => renderResult(item));
 $('.js-search-results').html(results);
}

function watchSubmit() {
  console.log('data');
//  $(',').submit(event => {
    console.log("works");
  event.preventDefault();
  const queryTarget = document.getElementById('search-value');
  console.log(queryTarget);
  const query = queryTarget.value;
  queryTarget.value="";
  getDataFromApi(query,displayYoutubeSearchData );
//  });
}


// $(watchSubmit);