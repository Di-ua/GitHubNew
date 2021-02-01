import './css/styles.css';
import itemsTemplate from './templates/menu-items.hbs';
import menu from './data/menu.json';
import  './js/themes';

const refs = {
    body: document.body,
    menuItems: document.querySelector('.js-menu'),
}

const markup = itemsTemplate(menu);


// Рендерю разметку
refs.menuItems.insertAdjacentHTML('beforeend', markup);

refs.body.classList.add(localStorage.Theme);
// themeChoice();
