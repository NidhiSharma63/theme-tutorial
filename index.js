const circle = document.querySelector('.circle');
const body = document.querySelector('body');

let themeCount = 1;

circle.addEventListener('click',()=>{
  console.log(themeCount)
  if(themeCount===0){
    body.className = 'blue-theme';
    circle.style.transform ='translateX(0px)';
    localStorage.setItem('theme','blue-theme');
    themeCount+=1;
    return
  }

  if(themeCount===1){
    body.className = 'voilet-theme';
    circle.style.transform ='translateX(17px)';
    localStorage.setItem('theme','voilet-theme');
    themeCount+=1;
    return
  }
  if(themeCount===2){
    body.className = 'white-theme';
    circle.style.transform ='translateX(37px)';
    localStorage.setItem('theme','white-theme');
    themeCount=0;
    return
  }
});

window.onload = () =>{
  const getTheme = localStorage.getItem('theme');
  if(getTheme){
    body.className = getTheme;
    switch (getTheme) {
      case 'blue-theme':
        circle.style.transform ='translateX(0px)';
        themeCount=1;
        break;
      case 'voilet-theme':
        circle.style.transform ='translateX(17px)';
        themeCount=2;
        break;
      case 'white-theme':
        circle.style.transform ='translateX(37px)';
        themeCount=0;
        break;
      
      default:
        break;
    }
  }
  if(!getTheme){
    body.className = 'blue-theme';
    circle.style.transform ='translateX(0px)';
  }
}