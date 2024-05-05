$(document).ready(function(){
  $('.slide-container').slick({
      arrows:false,
      variableWidth: true,
   });
});

const wrapper = document.querySelector('.form-content')
const contactBtn = document.querySelector('.contact-btn');
const closeForm = document.querySelector('.close-el')

contactBtn.addEventListener('click', ()=>{
   wrapper.classList.add('active-contact-form');
})

closeForm.addEventListener('click', ()=>{
   wrapper.classList.remove('active-contact-form');
})

const directionText = document.querySelector('.direction-text')
const directionInfo = document.querySelector('.direction-info')
const directionInput = document.querySelector('.direction-input')


directionText.addEventListener('click', ()=>{
   directionInfo.classList.add('active-info')
   directionInput.classList.add('active-dinfo')
  
})

const calendarText = document.querySelector('.calendar-text')
const calendarInfo = document.querySelector('.calendar-info')
const calendarInput = document.querySelector('.calendar-input')
const inputContainer = document.querySelector('.input-container')

calendarText.addEventListener('click', ()=>{
   calendarInfo.classList.add('active-info')
   calendarInput.classList.add('active-dinfo')
   inputContainer.classList.add('container-space')
})