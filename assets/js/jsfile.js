
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', "Thursday", 'Friday', 'Saturday'];

  for (let i = 0; i < days.length; i++){  
    const currentDay = moment.day();
    const index = (i+ currentDay) % days.length;
    const daysOfWeek = days[index];
    const todos = localStorage.getItem('todos');
    todos = {
      'Sunday': {
        '9':[],
        '10':[],
        '11':[],
        '12':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
      },
      'Monday': {
        '9':[],
        '10':[],
        '11':[],
        '12':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
      },
      'Tuesday': {
        '9':[],
        '10':[],
        '11':[],
        '12':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
      },          
      'Wednesday': {
        '9':[],
        '10':[],
        '11':[],
        '12':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
      },          
      'Thursday': {
        '9':[],
        '10':[],
        '11':[],
        '12':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
      },          
      'Friday': {
        '9':[],
        '10':[],
        '11':[],
        '12':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
      },
      'Saturday': {
        '9':[],
        '10':[],
        '11':[],
        '12':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
      }
    }
    const todosByDay = todos[daysOfWeek];
    // for 9'oclock get todosByDay['9']
    // loop through and display
  }