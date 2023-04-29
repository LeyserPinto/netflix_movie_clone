document.addEventListener('DOMContentLoaded', ()=> {
    const items = document.querySelectorAll('[data-ep-item]');
    for (const key in items) {
        items[key].addEventListener('click',setSelectedEpisodes);
    }

})

function setSelectedEpisodes (e) {
    let activeElem = document.querySelector('.episodes_container_item--active');
    activeElem.classList.remove("episodes_container_item--active");
    if(e.target.classList.contains('episodes_container_item')) {
         e.target.classList.add('episodes_container_item--active');
    } else {
       if(e.target.parentElement.classList.contains('episodes_container_item')){
            e.target.parentElement.classList.add('episodes_container_item--active');
       } else {
            const elem = e.target.parentElement;
            if(elem.classList.contains('episodes_container_item')) {
                elem.classList.add('episodes_container_item--active');
            } else if( elem.parentElement.classList.contains('episodes_container_item')) {
                    elem.parentElement.classList.add('episodes_container_item--active');
            } else {
                elem.parentElement.parentElement.classList.add('episodes_container_item--active');
            }
       }
    }
    
}