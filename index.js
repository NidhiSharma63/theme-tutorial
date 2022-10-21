const circle = document.querySelector('.circle');
const body = document.querySelector('body');

let themeCount = 1;

circle.addEventListener('click',()=>{

  if(themeCount===0){
    body.className = 'blue-theme';
    themeCount+=1;
    return
  }

  if(themeCount===1){
    body.className = 'voilet-theme';
    themeCount+=1;
    return
  }
  if(themeCount===2){
    body.className = 'white-theme';
    themeCount=0;
    return
  }
});

window.onload = () =>{
  body.className = 'blue-theme'
}