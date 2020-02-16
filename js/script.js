document.addEventListener('DOMContentLoaded', function(){
    'use strict'

    let contentTab = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info'),
        headerTab = document.querySelectorAll('.info-header-tab');
    
    console.log(contentTab);
    
    function hideTabContent(a) {
        for (let i = a; i < contentTab.length; i++) {
                contentTab[i].classList.remove('show');
                contentTab[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(a) {
        if (contentTab[a].classList.contains('hide')) {
            contentTab[a].classList.remove('hide');
            contentTab[a].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            hideTabContent(0);
            for (let i = 0; i < headerTab.length; i++) {
                console.log('121212');
                if (target == headerTab[i]) {
                    showTabContent(i);
                }
            }
        }
    });
})