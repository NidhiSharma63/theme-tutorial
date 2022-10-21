
export const moveCircle = (circle,themeLink) =>{
  
    let themeStage =1;
    if(localStorage.getItem('theme-href')===null){
        themeLink.setAttribute('href','./theme.css/dark-blue-theme.css');
        circle.style.transform+='translateX(0px)';
    }
    else{
        const preSelectedTheme = localStorage.getItem('theme-href');
        themeLink.setAttribute('href',preSelectedTheme);
    }

    // fixing circle position to According to theme
    if(localStorage.getItem('theme-href')==='./theme.css/light-gray-theme.css'){
        circle.style.transform+='translateX(30px)';
    }
    if(localStorage.getItem('theme-href')==='./theme.css/dark-voilet.css'){
        circle.style.transform+='translateX(60px)';
    }

    //circle event

    circle.addEventListener('click', () => {
        const val = circle.getBoundingClientRect().x;
        themeStage++;
            if(themeStage==1){
                circle.style.transform+='translateX(-60px)';
                themeLink.setAttribute('href','./theme.css/dark-blue-theme.css');
                localStorage.setItem('theme-href','./theme.css/dark-blue-theme.css');
            }

            if(themeStage==2){
                circle.style.transform='translateX(30px)'
                localStorage.setItem('theme-href','./theme.css/light-gray-theme.css');
                themeLink.setAttribute('href','./theme.css/light-gray-theme.css');
            }

            if(themeStage==3){
                circle.style.transform='translateX(60px)'
                themeLink.setAttribute('href','./theme.css/dark-voilet.css');
                localStorage.setItem('theme-href','./theme.css/dark-voilet.css');
                themeStage=0;
            };
    });
};