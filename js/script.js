window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let info = document.querySelector('.info-header');
    let headerTab = document.querySelectorAll('.info-header-tab');
    let contentTab = document.querySelectorAll('.info-tabcontent');
    //console.log(contentTab);

    function hideContentTab(a) {
        for (let i = a; i < contentTab.length; i++) {
            contentTab[i].classList.add('hide');
            contentTab[i].classList.remove('show');
        }
    }

    hideContentTab(1);

    function showContentTab(b) {
        contentTab[b].classList.remove('hide');
        contentTab[b].classList.add('show');
    }

    info.addEventListener('click', function(e){
        let target = e.target;
        console.log(target);
        
        for (let i = 0; i < headerTab.length; i++) {
            if (target && target == headerTab[i]) {
                hideContentTab(0);
                showContentTab(i);
                break;
            }
        }
    })



});
