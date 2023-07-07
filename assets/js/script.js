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
  
  //1. $(".saveBtn").on('click', function() {
      //console.log($(this));
      //figure out what hour block you're in by using $(this)
      //key names needs to match the key names for getItem localStorage
      //setItem for localStorage to save the input to the corresponding hour by using keyword 'this'
  //});


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //1.use jquery.children to select children elements

  // JS Vanilla version:
  document.querySelectorAll(".time-block"); //return an array of all time black names and can be used for the for loop (use jquery version)

  //2. use dayjs() to grab current time (just the hour)
  //3. use for loop for all the time blocks
        // inside the for loop select the time block
        for(i = 9; i < 18; i++)
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
        //a. separate key in localStorage for each hour
        //b. create a for loop for hour 9-18
              // check localStorage within the loop
              // if there is storage display the items (value) 
                    //inside the text area of corresponding hour
                    //use id selector for the text area

  // TODO: Add code to display the current date in the header of the page.

  //1. create var for dayjs to get current date (and time maybe)
  //2. $("#currentDay").text(var)
});
