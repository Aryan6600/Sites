const menu_item = document.querySelectorAll('.menu-item');

menu_item.forEach(item => {
    item.addEventListener('mouseover',() => {
        for(i=0;i<menu_item.length;i++){
            menu_item[i].classList.remove('active');
        }
        item.classList.add('active')
    })
})