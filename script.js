$(document).ready(function () {
  var timeContainer = $("#time-container");
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var currentHour = moment().format("H");

  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

  for (var i = 0; i < hours.length; i++) {
    var timeRow = $("<div>").addClass("row time-block");
    var hour = $("<div>").addClass("hour col-sm-1");
    hour.text(hours[i]);
    var textArea = $("<textarea>").addClass("col-sm-10");
    if (currentHour == hours[i]) {
      textArea.addClass("present");
    } else if (currentHour > hours[i]) {
      textArea.addClass("past");
    } else {
      textArea.addClass("future");
    }
    var saveBtn = $("<button>").addClass("saveBtn col-sm-1 fa fa-save");
    saveBtn.attr("id",hours[i]);
    timeRow.append(hour, textArea, saveBtn);
    timeContainer.append(timeRow);
  }

  $(document).on("click", ".saveBtn", function(){
      console.log($(this).attr("id"));
  })

});
