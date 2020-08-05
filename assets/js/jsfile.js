// Define variables for current day display and start time for work hours

const currentDay = $("#currentDay");
const timeContainer = $("#timeContainer");
const startTime = 9;
const endTime = 17;
    
// Establish the current days and months as an array.
const todaysDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// Set variable for each new day and hour
var d = new Date();
var currentHour = d.getHours();
var curDay = d.getDate();

// Run start functions
$(document).ready(function() {
    currentDay.text("Today is " + todaysDay[d.getDay()] + ", " + currentMonth[d.getMonth()] + " " + curDay + ", " + d.getFullYear());
    renderDay();
    runDay();
});

// Function for the current day's hourly display
function renderDay(){
    for(var i = startTime; i <= endTime; i++){
        var displayTime = i + "am";
        if(i > 12){
            displayTime = (i-12) + "pm";
        }
        else if(i == 12){
            displayTime = (i) + "pm";
        }
        
        // Create row for new hour elements and column element for time and text display
        var row = $("<div>").addClass("row h-75 py-2"); 
        var timeCol = $("<div>").addClass("col-1 px-0 my-auto bold text-right");
        timeCol.text(displayTime);
        
        // Create column element for input display and input element
        var inputCol = $("<div>").addClass("col px-1 my-auto");
        var inputElement = $("<textarea>").attr("id","input-" + i);
        
        // Add type of text, form control to input elements
        inputElement.attr("type", "text");
        inputElement.addClass("form-control");
        inputCol.append(inputElement);
            
        // Attach the first two elements to the row.
        row.append(timeCol,inputCol);

        // Conditional: If the current hour then should be read only else then input/save
        if(currentHour > i){
            // Because its "past due" then we only flag the input as read only and dont create the button
            inputElement.attr('readonly', true);
            row.addClass("past");
        }
        else{
            if(currentHour == i){
                row.addClass("present");
            }
            else{
                row.addClass("future");
            }

        var buttonCol = $("<div>").addClass("col-1 px-1 my-auto ");
        var saveBtn = $("<button>").addClass("saveBtn btn my-auto");
        saveBtn.attr("data-value", i);
        saveBtn.on("click", function() {
        var btnValue = this.getAttribute("data-value")
                console.log($("#input-"+ btnValue).val());
        SaveHourInfo(btnValue, $("#input-"+ btnValue).val());
            });
            var saveIcon = $("<i>").addClass("fa fa-folder");
            buttonCol.attr("value", i);
            buttonCol.append(saveBtn);
            saveBtn.append(saveIcon);
            row.append(buttonCol);            
        }
        timeContainer.append(row);
    }
}

// Function to show all of the events entered into the hourly time slots
function runDay(){
    var savedDay = localStorage.getItem("day");
    if(!savedDay){
        // No save data found, setting it to current day
        localStorage.setItem("day", curDay);
    }

    if(savedDay == curDay){
        console.log("Same Day! Load Hourly Data");
        for(var i = 0; i < 24; i++){
            var hour = $("#input-" + i);
            if(hour.length > 0){
                var info = localStorage.getItem(i);
            if(info){
                hour.val(info);
                }
            }
            else{
                console.log("Hour not found!  " + i);
            }
        }
    }
    else{
        // Clear out save data
        for(var i = 0; i < 24; i++){
            console.log("New Day!  Removing YestertodaysDay stuff");
            localStorage.removeItem(i);
        }
    }
}

// Function to save data in selected hour and pass both hour and data to save
function SaveHourInfo(hour, data){
    localStorage.setItem(hour, data);
}
// Previous Work:
// let hours = ['9', '10' , '11' , '12' , '1' , '2' , '3' , '4' , '5']
// let container = $(".container"); 
// let currentDay = $("#currentDay");
// $("#currentDay");

// for(i=0; i < hours.length; i++){
//     // Create a row
//         var row = $("<div>").addClass("container");
//         var timeCol = $("<div>").addClass("col-1 px-0 my-auto bold text-right");
//         timeCol.text(displayTime);
//             // Create column element for input display
//         var inputCol = $("<div>" , width=8).addClass("col px-1 my-auto");
//             // Create the input element
//         var inputElement = $("<textarea>").attr("id","input-" + i);
//             // Add type of text to input element
//         inputElement.attr("type", "text");
//             // Add class form-control to input to make it stretch
//         inputElement.addClass("form-control");
//             // Attach input element to the input column element
//         inputCol.append(inputElement);
//             // Attach the first two elements to the row.. note save is missing because we might not display if its past its time
//         row.append(timeCol,inputCol);
//     // compare current time to time slot and change color of row
//     // create 3 columns to display time (2), todo (8), save (2)
//     // display time column needs to load  time within the array
//     // display todo list (if any) saved  - textarea HTML element 
//     // display save button with function to save to local storage
// }
// First draft:
//// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', "Thursday", 'Friday', 'Saturday'];

//   for (let i = 0; i < days.length; i++){  
//     const currentDay = moment.day();
//     const index = (i+ currentDay) % days.length;
//     const daysOfWeek = days[index];
//     const todos = localStorage.getItem('todos');
//     todos = {
//       'Sunday': {
//         '9':[],
//         '10':[],
//         '11':[],
//         '12':[],
//         '1':[],
//         '2':[],
//         '3':[],
//         '4':[],
//         '5':[],
//       },
//       'Monday': {
//         '9':[],
//         '10':[],
//         '11':[],
//         '12':[],
//         '1':[],
//         '2':[],
//         '3':[],
//         '4':[],
//         '5':[],
//       },
//       'Tuesday': {
//         '9':[],
//         '10':[],
//         '11':[],
//         '12':[],
//         '1':[],
//         '2':[],
//         '3':[],
//         '4':[],
//         '5':[],
//       },          
//       'Wednesday': {
//         '9':[],
//         '10':[],
//         '11':[],
//         '12':[],
//         '1':[],
//         '2':[],
//         '3':[],
//         '4':[],
//         '5':[],
//       },          
//       'Thursday': {
//         '9':[],
//         '10':[],
//         '11':[],
//         '12':[],
//         '1':[],
//         '2':[],
//         '3':[],
//         '4':[],
//         '5':[],
//       },          
//       'Friday': {
//         '9':[],
//         '10':[],
//         '11':[],
//         '12':[],
//         '1':[],
//         '2':[],
//         '3':[],
//         '4':[],
//         '5':[],
//       },
//       'Saturday': {
//         '9':[],
//         '10':[],
//         '11':[],
//         '12':[],
//         '1':[],
//         '2':[],
//         '3':[],
//         '4':[],
//         '5':[],
//       }
//     }
//     const todosByDay = todos[daysOfWeek];
