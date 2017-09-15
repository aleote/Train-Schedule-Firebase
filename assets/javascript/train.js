

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
var currentTime = moment();

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
  time = $("#time-input").val().trim();
  frequency = $("#frequency").val().trim();


// Now I am saving the values of those input fields into firebase. 
//the left is what will show up in firebase, the 
//right is my values defined above

  database.ref().set({
    trainName,
    destination ,
    time,
    frequency,
    // timeAdded: firebase.database.ServerValue.TIMESTAMP
  });

});


// not sure? when .set goes off so do the "value"?

database.ref().on("value", function(snapshot){

  // var trainName=snapshot.val().trainName;
  // var destination = snapshot.val().destination;
  // var time = snapshot.val().time;
  // var frequency = snapshot.val().frequency;


  console.log(snapshot.val().trainName);
  console.log(snapshot.val().destination);
  console.log(snapshot.val().time);
  console.log(snapshot.val().frequency);
  console.log((moment().format("HH:mm")));




// I really tried to get this time working but I just couldnt figure out what it was exactly doing. 
// The example used in class is how I created this, but I don't understand how it is working and 
// how to add it to the html 

// var frequency = parseInt(frequency);
//   //CURRENT TIME
//   var currentTime = moment();
//   console.log("CURRENT TIME: " + moment().format('HH:mm'));
//   //FIRST TIME: PUSHED BACK ONE YEAR TO COME BEFORE CURRENT TIME
//   // var dConverted = moment(time,'hh:mm').subtract(1, 'years');
//   var dConverted = moment(childSnapshot.val().time, 'HH:mm').subtract(1, 'years');
//   console.log("DATE CONVERTED: " + dConverted);
//   var trainTime = moment(dConverted).format('HH:mm');
//   console.log("TRAIN TIME : " + trainTime);
  
//   //DIFFERENCE B/T THE TIMES 
//   var tConverted = moment(trainTime, 'HH:mm').subtract(1, 'years');
//   var tDifference = moment().diff(moment(tConverted), 'minutes');
//   console.log("DIFFERENCE IN TIME: " + tDifference);
//   //REMAINDER 
//   var tRemainder = tDifference % frequency;
//   console.log("TIME REMAINING: " + tRemainder);
//   //MINUTES UNTIL NEXT TRAIN
//   var minsAway = frequency - tRemainder;
//   console.log("MINUTES UNTIL NEXT TRAIN: " + minsAway);
//   //NEXT TRAIN
//   var nextTrain = moment().add(minsAway, 'minutes');
// console.log("ARRIVAL TIME: " + moment(nextTrain).format('HH:mm A'));








var newTr = $("<tr>");



//place the information submitted to my page

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


  });










