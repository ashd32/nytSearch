const APIKey = "50349a9df4c9478e9df1bc1bc5277f63";
//NOTE API Key for nytimes article search

const buildURL = function() {
  const userInputSearch = $("#input").val();
  const userInputBYear = $("#begin_date").val();
  const userInputEYear = $("#end_date").val();
  console.log(userInputSearch, userInputBYear, userInputEYear);
  $("#input, #begin_date, #end_date").val("");

  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKey}&q=${userInputSearch}&begin_date=${userInputBYear}0101&end_date=${userInputEYear}0101`;

  return queryURL;
};

const getArticles = function(e) {
  e.preventDefault();

  console.log(buildURL());

  // $.ajax({
  //     url: buildURL(),
  //     method: "GET"
  //   }).then(function(response) {
  //     console.log(response);

  //     //Creates div for articles
  // 		const articleDiv = $('<div>').addClass('articles');

  //     const headline = response.docs[0].headline.main;

  //     const headlineHolder = $(`<p>${headline}</p>`);

  //     articleDiv.append(headlineHolder);

  //     const pubDate = response.docs[0].pub_date;

  //     const webURL = response.docs[0].web_url;

  //     $(col-12).append(articleDiv)

  //   })
};

$("#searchbtn").on("click", getArticles);

// $('SECTION INPUT').on('click');

// render();
