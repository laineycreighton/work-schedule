// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on all save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //1. 
  $(".saveBtn").on('click', function () {
    console.log($(this));
    var taskText = $(this).siblings('.description');
    var hour = $(this).closest('.time-block').attr('#hour-');
    //figure out what hour block you're in by using $(this)
    //key names needs to match the key names for getItem localStorage
    //setItem for localStorage to save the input to the corresponding hour by using keyword 'this'
    $.localStorage.set('hour9', taskTextValue);
    $.localStorage.set('hour10', taskTextValue);
    $.localStorage.set('hour11', taskTextValue);
    $.localStorage.set('hour12', taskTextValue);
    $.localStorage.set('hour13', taskTextValue);
    $.localStorage.set('hour14', taskTextValue);
    $.localStorage.set('hour15', taskTextValue);
    $.localStorage.set('hour16', taskTextValue);
    $.localStorage.set('hour17', taskTextValue);
    });


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    //1.use jquery.children to select children elements
    var timeBlock = $('.time-block');
    // JS Vanilla version:
    //document.querySelectorAll(".time-block"); //return an array of all time block names and can be used for the for loop (use jquery version)

    //2. use dayjs() to grab current time (just the hour)
    var currentDay = dayjs();
    $('location id').text(currentDay.format('H'));
    //3. use for loop for all the time blocks
    // inside the for loop select the time block
    for (i = 9; i < 18; i++) {
      $('#hour-' + i);
    }
    document.querySelector("#hour-" + i) // use jquery selector

    //a. use if statement to compare the current hour to the time block
    //b. if the current hour is less than time block apply future class
    //c. else if the current hour is equal to time block apply present class
    //d. else the current hour is greater than time block apply past class
    //4. remove past, present, and future class in html and append the correct class
    //5. can use setInterval to create auto refresh


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    //1. getItem for localStorage to pull previously stored content
    var showTask = $.localStorage.get()
    //a. separate key in localStorage for each hour
    $.localStorage.get('hour9', );
    $.localStorage.get('hour10', );
    $.localStorage.get('hour11', );
    $.localStorage.get('hour12', );
    $.localStorage.get('hour13', );
    $.localStorage.get('hour14', );
    $.localStorage.get('hour15', );
    $.localStorage.get('hour16', );
    $.localStorage.get('hour17', );
    //b. create a for loop for hour 9-18
    // check localStorage within the loop
    // if there is storage display the items (value) 
    //inside the text area of corresponding hour
    //use id selector for the text area

    // TODO: Add code to display the current date in the header of the page.

    $('#currentDay').text(currentDay.format('MM DD, YYY'));
    //1. create var for dayjs to get current date (and time maybe)
    //2. $("#currentDay").text(var)
  });
