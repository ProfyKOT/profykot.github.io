function toggleMenu(elementClass){
    elementClass = document.querySelector(elementClass);
    if(elementClass.style.display == 'none'){
        elementClass.style.display = 'flex'
        return;
    }
    elementClass.style.display = 'none';
}
