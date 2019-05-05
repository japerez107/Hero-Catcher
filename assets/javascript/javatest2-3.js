
$("#search").on("click", function (event) {

    var heroname = $("#search-term").val();
  
    $.ajax({
      method: "POST",
      url: "https://mighty-brook-95893.herokuapp.com/cors/marvel2",
      data: {
        "url": "https://gateway.marvel.com:443/v1/public/characters?name=" + heroname + "&",
        "key": "efd92cf6cc5e7649916c4e73939e6281"
      }
    }).then(function (data) {
  
      var marvelName = $("<h2>").html(data.data.results[0].name);
      var marvelImage = $("<img>").attr("src", data.data.results[0].thumbnail.path + '/landscape_large.jpg');
      var marvelDes = $("<h4>").html(data.data.results[0].description);
      var marvelUrl = $("<a>").attr("href", data.data.results[0].urls[0].url).attr('target','_blank').text("Click for comic info");
  
  
      $("#marvelInfo").empty();
      $("#marvelInfo").append(marvelName, marvelDes, marvelUrl);
      $("#marvelInfo").prepend(marvelImage);
  
  
  
      // Printing the entire object to console
      console.log("ook", data);
      console.log("pk", data.data.results[0].name);
  
    });
  });
  
  $("#search").on("click", function (event) {
  
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
    $("#searchdump").empty();
    // Here we grab the text from the input box
    var movie = $("#search-term").val();
  
    // Here we construct our URL
    var queryURL = "https://www.omdbapi.com/?s=" + movie + "&y=&type=movie&apikey=4e36d18a";
  
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).
  
    then(function (response) {
      var movieMax = 6
      for (var i = 0; i < movieMax; i++) {
        var movieInfo = response.Search[i];
        console.log(movieInfo);
        movieCount = i + 1;
        var $movieDiv = $("<div>");
        $movieDiv.addClass("col-sm-3");
        $("#searchdump").append($movieDiv);
        var $movieList = $("<div class='col-sm-3'>");
        var title = $("<h2>").html(response.Search[i].Title);
        var released = $("<h4>").html(response.Search[i].Year);
        var Image = $("<img>").attr("src", response.Search[i].Poster);
        $movieDiv.append(title);
        $movieDiv.append(released);
        $movieDiv.append(Image);
        $("#searchdump").append($movieDiv);
        
      };
    });
  })
  
  // modal link function
  $('#modalFind').click(function(){
    location.href='https://www.fandango.com/avengers-endgame-2019-215871/movie-times';
  
      then(function (response) {
        var movieMax = 6
        for (var i = 0; i < movieMax; i++) {
          var movieInfo = response.Search[i];
          console.log(movieInfo);
          movieCount = i + 1;
          var $movieDiv = $("<div>");
          $movieDiv.addClass("col-sm-3");
          $("#searchdump").append($movieDiv);
          // var $movieList = $("<div class='col-sm-3'>");
          var title = $("<h2>").html(response.Search[i].Title);
          var released = $("<h4>").html(response.Search[i].Year);
          var Image = $("<img>").attr("src", response.Search[i].Poster);
          $movieDiv.append(title);
          $movieDiv.append(released);
          $movieDiv.append(Image);
          $("#searchdump").append($movieDiv);
        };
      });
  
  })