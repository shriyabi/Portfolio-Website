const elements = document.querySelectorAll('.fade-in1');

const appearOptions = {
  root: null,
  threshold: 1, 
  rootMargin: "0px 0px 10px 0px"
};

const appearOnScroll = new IntersectionObserver
  (function(
    entries,
    appearOnScroll
  ){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return; 
      } else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target); 
      }
    });                                                           },
appearOptions); 

elements.forEach(fader => {
  appearOnScroll.observe(fader); 
});


const elements1 = document.querySelectorAll('.fade-in2');
const appearOptions1 = {
  root: null,
  threshold: 1, 
  rootMargin: "0px 0px 10px 0px"
};
const appearOnScroll1 = new IntersectionObserver
  (function(
    entries,
    appearOnScroll1
  ){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return; 
      } else{
        entry.target.classList.add('appear');
        appearOnScroll1.unobserve(entry.target); 
      }
    });                                                           },
appearOptions1); 
elements1.forEach(fader => {
  appearOnScroll1.observe(fader); 
});


const elements2 = document.querySelectorAll('.fade-in3');
const appearOptions2 = {
  root: null,
  threshold: 1, 
  rootMargin: "0px 0px 10px 0px"
};
const appearOnScroll2 = new IntersectionObserver
  (function(
    entries,
    appearOnScroll2
  ){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return; 
      } else{
        entry.target.classList.add('appear');
        appearOnScroll2.unobserve(entry.target); 
      }
    });                                                           },
appearOptions2); 
elements2.forEach(fader => {
  appearOnScroll2.observe(fader); 
}); 