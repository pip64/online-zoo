let burgerMenuBtn = document.querySelector('.burger-menu'); // кнопка бургер меню
let headerMenu = document.querySelector('.header-menu'); // сама менюшка
let closeBurgerMenuBtn = document.querySelector('.x-icon-menu__img'); // кнопка закрытия бургер меню

document.addEventListener('click', function(event) {
    let target = event.target; 

    // burger-menu
    function closeBurgerMenu() {
        headerMenu.classList.remove('showed')
        headerMenu.classList.add('hidden')
        setTimeout(function() {
            headerMenu.style.display = 'none';
        }, 500);
        for (let child of document.body.children) {
            if (child === headerMenu) {
                continue;
            }
            child.style.opacity = '';
        }
    }
    function openBurgerMenu() {
        headerMenu.style.display = ''
        setTimeout(function() {
            headerMenu.classList.remove('hidden')
            headerMenu.classList.add('showed')
        }, 150)
            
        for (let child of document.body.children) {
            if (child === headerMenu) {
                continue;
            }
            child.style.opacity = 0.1;
        }
    }
    
    if (event.target === burgerMenuBtn) { 
        openBurgerMenu();

    } else if (event.target === closeBurgerMenuBtn) {
        closeBurgerMenu();
    } else if (headerMenu.classList.contains('showed')) {
        let isHeaderMenuClicked = true;
        
        for (let headerMenuChild of headerMenu.children) {
            if (target === headerMenu) {
                isHeaderMenuClicked = false;
                break;
            } else if (target === headerMenuChild) {
                isHeaderMenuClicked = false;
                break;
            }
            for (let childOfChild of headerMenuChild.children) {
                if (target === childOfChild) {
                    isHeaderMenuClicked = false;
                    break;
                    
                } 
            }
        }

        if (isHeaderMenuClicked) {
            closeBurgerMenu();
        }

    // /burger-menu
    }

    
})