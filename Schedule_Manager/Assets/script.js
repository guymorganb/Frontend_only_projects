/**
 * JavaScript 
 * Work day planner
 */

// formats the date using dayjs
const formattedDate = dayjs().format("dddd, MMM D");
const now = dayjs().format('HH'); // 24 hour format
// make the divs dynamically using the html starter code provided and styles them using bootstrap
function makeDivs(){
  let workHours = 12;
  let time= 7;
for (let i = 0; i <= workHours; i++){
  time = time + 1;
// logic for setting the time on the left side of the screen and the time
  if(time < 12){
  let element = $(`
  <div id="${time}" class="row time-block">
  <div class="col-2 col-md-1 hour text-center py-3">${time}am</div>
  <textarea class="col-8 col-md-10 description" rows="3"></textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  </div>`);
  $('.container-fluid').append(element);

  }else if(time == 12){
    element = $(`
  <div id="${time}" class="row time-block">
  <div class="col-2 col-md-1 hour text-center py-3">${time}pm</div>
  <textarea class="col-8 col-md-10 description" rows="3"></textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  </div>`)
  $('.container-fluid').append(element);

  }else if(time >= 12){
    element = $(`
  <div id="${time}" class="row time-block">
  <div class="col-2 col-md-1 hour text-center py-3">${time - 12}pm</div>
  <textarea class="col-8 col-md-10 description" rows="3"></textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  </div>`);
  $('.container-fluid').append(element);
  };
// gets the id tag at the current index in the for loop and turns it into a number so to use it for comparison
  let id = parseInt($('.container-fluid').children().eq(i).attr('id'));
// gets the cild element of the main div thats equal to the current index of the loop
  let state = $('.container-fluid').children().eq(i);
// this logic is for updating the past present and future
  if(id < now && !state.hasClass('past')){
  state.addClass('past');
  if( state.hasClass('future') || state.hasClass('present') ){
  state.removeClass('future');
  state.removeClass('present');
  };
  }else if (id == now && !state.hasClass('present')){
  state.addClass('present')
  if( state.hasClass('future') || state.hasClass('past') ){
  state.removeClass('future')
  state.removeClass('past')
  };
  }else if (id > now && !state.hasClass('future')){
  state.addClass('future');
  if(state.hasClass('past') || state.hasClass('present')){
  state.removeClass('present');
  state.removeClass('past');
  };
  };
};
// now handling the click on the buttons
function buttonClick(button, i){
  button.addEventListener('click', function(){
// traverse back up above the text area using the closest() method, then use the find() method.
  let parentDiv = $(button).closest('.row');
// using the find() method you can search for the 'textarea' and get it
  let textArea = parentDiv.find('textarea');
// now just use the .val() to get the text inside the text area
  let text = textArea.val();
  let index = i;
  console.log('button click '+ index + " " + text);
// store the data in local storage
  localStore(index, text);
// populate the data back to the proper place when screen loads
  });
  function localStore(key, value){
  localStorage.setItem(key, value );
  };
};
function eachButton (){
// grab each button using the each method(), and call the buttonClick function when one is clicked
  $('.container-fluid .btn').each(function(i,button){
  buttonClick(button, i);
  });
};
  eachButton();
};
// now in Global Scope
function getFromLocalStore(){
  for(let i = 0; i < localStorage.length; i++){
  let textBox = $('.container-fluid').children().eq(localStorage.key(i)).find('textarea');
  textBox.text(`${localStorage.getItem(localStorage.key(i))}`); 
  };
};
$(document).ready(function () {
// set the date at the top
  $('#currentDay').append(`<span>${formattedDate}</span>`).css('text-align', 'center');
// call the functions
  makeDivs();
  getFromLocalStore();
});
 