

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFMUYgOz48nBaDeHVYLA9_-PZB8673FJ0",
    authDomain: "train-game-cea77.firebaseapp.com",
    databaseURL: "https://train-game-cea77.firebaseio.com",
    projectId: "train-game-cea77",
    storageBucket: "train-game-cea77.appspot.com",
    messagingSenderId: "910746448204"
  };
  firebase.initializeApp(config);

//creating my var to reference the database
var database = firebase.database();

//create values
var trainName = "";
var destination = "";
var time = "00:00";
var frequency = " ";
var tBody = $(".tBody");

//button click
$("#search").on("click",function(){
  event.preventDefault();



  //store and retrieve information

  trainName = $("#searchTerm").val().trim();
  destination = $("#whereTo").val().trim();
  time = $("#military").val().trim();
  frequency = $("#frequency").val().trim();


// Now I am saving the values of those input fields into firebase. 
//the left is what will show up in firebase, the 
//right is my values defined above

  database.ref().set({
    trainName,
    destination ,
    time,
    frequency
  });

});


// not sure? when .set goes off so do the "value"?

database.ref().on("value", function(snapshot){


  console.log(snapshot.val().trainName);
  console.log(snapshot.val().destination);
  console.log(snapshot.val().time);
  console.log(snapshot.val().frequency);



var newTr = $("<tr>");



// I am trying to place the information submitted to my page

var trainNameId = $("<td>").html(snapshot.val().trainName);
    newTr.append(trainNameId);


var destinationId = $("<td>").html(snapshot.val().destination);
    newTr.append(destinationId);

var timeId= $("<td>").html(snapshot.val().time);
    newTr.append(timeId);


var frequencyId = $("<td>").html(snapshot.val().frequency);
    newTr.append(frequencyId);

   $(".form-control").val("");
 tBody.append(newTr);




// var differenceTimes = moment().diff(moment.unix(fireFirstTrain), "minutes");
//     var remainder = moment().diff(moment.unix(fireFirstTrain), "minutes") % frequency ;
//     var minutes = frequency - remainder;

//     var arrival = moment().add(minutes, "m").format("hh:mm A"); 
//     console.log(minutes);
//     console.log(arrival);

//     console.log(moment().format("hh:mm A"));
//     console.log(arrival);
//     console.log(moment().format("X"));

//     // Append train data to table 
//     $("#trainSchedule > tbody").append("<tr><td>" + fireName + "</td><td>" + fireDestination + "</td><td>" + fireFrequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");

  });










