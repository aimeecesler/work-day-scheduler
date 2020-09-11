$(document).ready(function () {
  // variables
  var timeContainer = $("#time-container");
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var currentHour = moment().format("H");

  // assign text to the current day p element using moment()
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

  // dynamically creates the calendar times, text blocks and save buttons
  for (var i = 0; i < hours.length; i++) {
    // creates a row for each hour
    var timeRow = $("<div>").addClass("row time-block");
    // creates the time block for each row
    var hour = $("<div>").addClass("hour col-sm-1");
    // adds text to the time blocks based on the hours array (if statement to differentiate AM/PM)
    if (hours[i] < 12) {
      hour.text(hours[i] + " AM");
    } else if (hours[i] === 12) {
      hour.text(hours[i] + " PM");
    } else {
      hour.text(hours[i] - 12 + " PM");
    }
    // creates the text area for each row
    var textArea = $("<textarea>").addClass("col-sm-10");
    // adds an id to each text area referring to it's associated hour
    textArea.attr("id", hours[i]);
    // calls for any text stored in local storage to be shown in it's corresponding text area
    textArea.text(localStorage.getItem(hours[i]));
    // adds classes to the text areas based on its relation to the current time
    if (currentHour == hours[i]) {
      textArea.addClass("present");
    } else if (currentHour > hours[i]) {
      textArea.addClass("past");
    } else {
      textArea.addClass("future");
    }
    // creates a save button for each row
    var saveBtn = $("<button>").addClass("saveBtn col-sm-1 fa fa-save");
    // adds an id to each text area referring to it's associated hour
    saveBtn.attr("id", hours[i]);
    // appends all items to the row
    timeRow.append(hour, textArea, saveBtn);
    // appends the rows to the container
    timeContainer.append(timeRow);
  }

  //   listens for a click on any save button
  $(document).on("click", ".saveBtn", function () {
    // variable for the id # on the button
    var btnID = $(this).attr("id");
    // variable for the text input in the corresponding text area
    var textValue = $(this).prev().val();
    // saves the text value in local storage with a key corresponding to the id of the button (hour of the row)
    localStorage.setItem(btnID, textValue);
  });
});
