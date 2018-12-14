const getInput = function(event) {

  event.preventDefault();

  //Gras API  data, determined by user input
  console.log("search clicked");
  const keywordInput = $('#keyword').val();
  console.log(keywordInput);
  const numRecordInput = $('#numRecord').val();
  console.log(numRecordInput);
  const startYearInput = $('#startYear').val();
  console.log(startYearInput);
  const endYearInput = $('#endYear').val();
  console.log(endYearInput);

  //Display Articles on index.html
  displayResults(keywordInput, numRecordInput, startYearInput, endYearInput);
}

const displayResults = function(keywordInput, numRecordInput, startYearInput, endYearInput) {
  console.log ("displayResults keywordInput", keywordInput);

  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=50349a9df4c9478e9df1bc1bc5277f63&q=${keywordInput}&beg_date${startYearInput}&end_date${endYearInput}`;
 
// AJAX request to retireve search results
$.ajax({
  url: queryURL,
  method: 'GET'

}).then(function(response) {
  console.log(response);

  for (let i=0; i<numRecordInput; i++) {
  const article = response.response.docs[i].headline.main;
  const articleUrl = response.response.docs[i].web_url;

  console.log("article", article);

  const artElement = $('<p>').text(`${article}`);
  const artUrlElement = $('<p>').text(`${articleUrl}`);


  $('#results').prepend(artUrlElement);
  $('#results').prepend(artElement);
  $('#results').prepend(`<hr>`);
 
  }
});

}

const clearResults = function() {

  $('#results').empty();
}


$('#search').on('click', getInput);
$('#clear').on('click', clearResults);