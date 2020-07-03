const shareListEL = document.querySelector('#shareOptionList');
const shareBtn = document.querySelector('#shareBtn');
const btnChild = shareBtn.childNodes[1];

window.addEventListener('click', (e)=>{
  if(e.target === shareBtn || e.target === btnChild){
    shareListEL.style.opacity = 1;
  }else{
    shareListEL.style.opacity = 0;
  }
})