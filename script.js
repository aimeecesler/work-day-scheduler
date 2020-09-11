$(document).ready(function () {

var timeContainer = $("#time-container");
var hours = [9,10,11,12,13,14,15,16,17];

$("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

for (var i = 0; i < hours.length; i++){
var timeRow = $("<div>").attr("class","row time-block");
var hour = $("<div>").attr("class","hour col-sm-1");
hour.text(hours[i]);
var textArea = $("<textarea>").attr("class","col-sm-10");
var saveBtn = $("<button>").attr("class","saveBtn col-sm-1 fa fa-save");
timeRow.append(hour, textArea, saveBtn);
timeContainer.append(timeRow);
console.log(i);
console.log(hours[i]);
};




});
