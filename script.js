// Added current day to show full date in the title

$("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));

// DOM variables
var hour = $(".hour");
var timeBlock = $(".time-block");
var currentDay = $(".currentDay");
var past = $(".past");
var present = $(".present");
var future = $(".future");
var saveBtn = $(".saveBtn");
// JS variables
var time = moment().format("dddd, MMM Do, YYY");
var currentHour = moment().moment.format("H");
var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
