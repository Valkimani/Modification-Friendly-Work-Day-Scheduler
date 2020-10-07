// Added current day to show full date in the title
$(document).ready(function () {
  // Dom variables
  var hour = $(".hour");
  console.log(hour);
  var timeBlockContainer = $(".time-block");
  var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var businessHours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12.00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));

  // Created a for loop and added 3 steps
  for (var i = 0; i < businessHours.length; i++)
    var timeDisplay = $("<div>")
      .addClass("hour col-sm-1")
      .text(businessHours[i]);

  {
  }
});
