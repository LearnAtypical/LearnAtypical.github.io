
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  var parseAPPID = "b3FPYSUfviKmSHuazqSeavo0goTQFUgOXfr6KWgJ";
    var parseJSID = "1EiuYYlI34Ho4lLQPwWxNIFYz2wYCOgeLH8wNi7s";

    Parse.initialize(parseAPPID, parseJSID);
    var ClubObject = Parse.Object.extend("ClubObject");


    $("#createClub").on("submit", function(e) {
      e.preventDefault();

      console.log("Handling the submit");
      //add error handling here
      //gather the form data

      var data = {};
      data.email = $("#email").val();
      data.clubName = $("#clubName").val();
            data.community = $("#comm").val();
      data.firstName = $("#firstName").val();
      data.secondName = $("#secondName").val();
        data.thirdName = $("#thirdName").val();
          data.secondEmail = $("#secondEmail").val();
             data.secondName = $("#secondName").val()
             data.locationName = $("#locationName").val()

      // data.email = $("#email").val();
      // data.summary = $("#textarea").val();

      var comment = new ClubObject();
      comment.save(data, {
        success:function() {
          console.log("Success");
          //Alerts are lame - but quick and easy
          window.location = "index.html";
        },
        error:function(e) {
          console.dir(e);
        }
      });

    });

    $("#loginWithEmail").on("submit", function(e) {
      e.preventDefault();

      var query = new Parse.Query(ClubObject);
query.exists("email", $("#email").val());
query.find({
  success: function(results) {
       console.log("Success");
         if (results.length > 0) 
                   {                                   
                              for (var i = 0; i < results.length; i++){
                            var objectId = results[i].id;   
                            var gate = results[i].get("email");    
                            console.log(JSON.stringify(gate));
                            if(gate == $("#email").val()){
                                        window.location = "clubmaterials.html";

                            }
                          }

                   }        
          //Alerts are lame - but quick and easy

    // Do something with the returned Parse.Object values

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
      //add error handling here
      //gather the form data

      // var data = {};
      // data.email = $("#email").val();
      // data.clubName = $("#clubName").val();
      //       data.community = $("#comm").val();
      // data.firstName = $("#firstName").val();
      // data.secondName = $("#secondName").val();
      //   data.thirdName = $("#thirdName").val();
      //     data.secondEmail = $("#secondEmail").val();
      //        data.secondName = $("#secondName").val()
      //        data.locationName = $("#locationName").val()

      // data.email = $("#email").val();
      // data.summary = $("#textarea").val();



    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
