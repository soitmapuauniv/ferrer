// Nav Tabs Toggling 
const navBtn = document.querySelectorAll('.Nav-Btn');
const navTab = document.querySelectorAll('[data-main_tab]');

for(let i = 0; i < navBtn.length; i++){
  navBtn[i].addEventListener('click', function(){
    for(let j = 0; j < navTab.length; j++){
      if(this.innerHTML === navTab[j].dataset.main_tab){
        navBtn[j].classList.add('current');
        navTab[j].classList.add('show');
        window.scrollTo(0, 0);
      }
      else{
        navBtn[j].classList.remove('current');
        navTab[j].classList.remove('show');
      }
    }
  });
}

// Information Collapse Toggle
const info = document.querySelector('.Information');
const infoBtn = document.querySelector('.infoBtn');

infoBtn.addEventListener('click', () => {
  info.classList.toggle('show');
});

// const mediaQueries = [
//   '(max-width: 1250px)',
//   '(max-width: 940px)',
//   '(max-width: 740px)',
//   '(max-width: 560px)'
// ]
// const showInfo = document.getElementById('showInfo');

// // Collapse Information on Media Query
// function togglePreloader(){
//   mediaQueries.forEach(query => {
//     if(window.matchMedia(query).matches)
//       info.classList.remove('show');
//   });
// }
// mediaQueries.forEach(query => {
//   window.matchMedia(query).addListener(togglePreloader);
// });

// Course Modals Toggling
const courseList = document.querySelector('.Subjects');
const Courses = Array.from(courseList.children);
const courseModal = document.querySelector('.course-modal');
const Layouts = document.querySelectorAll('.layout');

courseList.addEventListener('click', e => {
  const targetCourse = e.target.closest('li');

  if(!targetCourse) return;

  courseModal.classList.add('show');
  for(i = 0; i < Layouts.length; i++)
    if(Layouts[i].dataset.course_code === targetCourse.querySelector('.Course-Code').innerHTML)
      Layouts[i].classList.add('show');
});

function closeModal(){
  courseModal.classList.remove('show');
  for(i = 0; i < Layouts.length; i++)
    Layouts[i].classList.remove('show');
}

function handleSubmit(event){
  event.preventDefault();
  
  const form = document.getElementById('Contact-Form');
  const formData = new FormData(form);
  
  let mailto = 'mailto:josevictorino003@gmail.com?';
  const params = [];

  for (const [key, value] of formData.entries()) {
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }
  
  mailto += params.join('&');
  window.location.href = mailto;
}

window.onload = function(){
  const body = document.getElementsByTagName('body');
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  
  if(isMobile){ body[0].classList.remove('desktop'); }
  else{ body[0].classList.add('desktop'); }
};
