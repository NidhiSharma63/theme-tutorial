
export const moveCircle = (circle,themeLink) =>{
    circle.addEventListener('click', () => {
        const val = circle.getBoundingClientRect().x;
        if(val>=650){
            circle.style.transform+='translateX(-40px)';
            themeLink.setAttribute('href','./theme.css/dark-blue-theme.css');
        }else{
            circle.style.transform+='translateX(20px)';
            themeLink.setAttribute('href','./theme.css/light-gray-theme.css');
        }
        if(val>626 && val<650){
            themeLink.setAttribute('href','./theme.css/dark-voilet.css')
        }
    });
}