// Added current day to show full date in the title
$(document).ready(function () {
  // Dom variables
  var hour = $(".hour");
  console.log(hour);
  var timeBlockContainer = $(".time-block");
  var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var businessHours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3 PM",
    "4PM",
    "5PM",
  ];
  //   This displays the military time to show if each hour is past, present or future
  var currentHour = moment().format("HH");

  $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
  // JS variables

  // Created a for loop and added 3 steps
  for (var i = 0; i < businessHours.length; i++) {
    var timeDisplay = $("<div>")
      .addClass("hour col-sm-1")
      .text(businessHours[i]);
    //   Created variables to add content using class to the element
    var button = $("<button>")
      .addClass("saveBtn col-sm-1 fas fa-save")
      .text("save");
    var row = $("<div>").addClass("row");
    var text = $("<textarea>").addClass("col-sm-10");

    var rowTimeEl = $("<div>").addClass("time-block");

    // Created if & else statements to add past present and future content

    if (currentHour > militaryHours[i]) {
      text.addClass("past");
    } else if (currentHour < militaryHours[i]) {
      text.addClass("future");
    } else {
      text.addClass("present");
    }

    //   Appending into the element

    row.append(timeDisplay, text, button);
    $("#time-container").append(row);

    //   Adding a click listener to the save button
    var saveBtn = $("<button>").addClass("saveBtn col-sm-1").text("save");
    rowTimeEl.append(saveBtn);

    saveBtn.on("click", function () {
      var saveWorkScheduler = $(this).data(textInput);
      $(document).on("click", ".save", function () {
        $(this);
        saveBtn;
      });
      console.log(saveBtn);
      console.log($(this).siblings("input").val());
      console.log($(this).siblings(".hour").attr("id"));

      // local Storage
    });
  }
  $("#9AM").val(localStorage.getItem("9AM"));
});
