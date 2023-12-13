const YOUTUBE_SEARCH_URL = 
'https://www.googleapis.com/youtube/v3/search';
const key = 'AIzaSyAwlWaOK-ZH1FnQG4187zQkjsbJQVkRP4g';

function getDataFromApi(searchTerm, callback) {
 const query = {
  part: 'snippet',
  key: key,
  q: `${searchTerm} in:name`,
 }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
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

// function watchSubmit() {
 $('.js-search-form').submit(event => {
    console.log("works");
  event.preventDefault();
  const queryTarget = $(event.currentTarget).find('.js-query');
  const query = queryTarget.val();
  queryTarget.val("");
  getDataFromApi(query,displayYoutubeSearchData );
 });
// }


// $(watchSubmit);


