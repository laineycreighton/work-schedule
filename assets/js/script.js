
$(function () {
  // add event listener for all save buttons
  $(".saveBtn").on('click', function () {
    console.log($(this));
    // get the user input from the text area
    var taskText = $(this).siblings('.description').val();
    // get the id of the time-block with the correct button
    var hour = $(this).closest('.time-block').attr('id');
    //used to save the user input from the text area
    localStorage.setItem(hour, taskText);
  });

  //apply the past, present, or future class to each time block
  var currentHour = dayjs().format('H');
  //use for loop for all the time blocks
  // inside the for loop select the time block
  for (i = 9; i < 18; i++) {
    var timeBlock = $('#hour-' + i);

    if (i < currentHour) {
      timeBlock.addClass('past');
    } else if (i === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }

    // used to get the user input for the text area
    var taskText = localStorage.getItem('hour-' + i);
    timeBlock.find('.description').val(taskText);
  }

  // displays date and time in the header
  var currentDay = dayjs().format('MMM DD, YYYY' + ' h:mm a');
  $('#currentDay').text(currentDay);

});
