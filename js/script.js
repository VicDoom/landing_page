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
    });

    //timer realization

    function getTimeRemaining(endtime) {

        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000)%60);
        let minutes = Math.floor((t/(1000*60))%60);
        let hours = Math.floor((t/(1000*60*60))%24);

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }

    function setClock(id, endtime) {
        let clock = document.getElementById(id);
        let seconds = clock.querySelector('.seconds');
        let minutes = clock.querySelector('.minutes');
        let hours = clock.querySelector('.hours');
        let timer = setInterval(updateClock, 1000);

        function updateClock() {
            let time = getTimeRemaining(endtime);
            //console.log(time);
            
            function twoDigitsTime(a) {
                if (a < 10) {
                    return '0' + a;
                } else {
                    return a;
                }
            }

            seconds.textContent = twoDigitsTime(time.seconds);
            minutes.textContent = twoDigitsTime(time.minutes);
            hours.textContent = twoDigitsTime(time.hours);

            if (time.total <= 0) {
                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
                clearInterval(timer);
            }
        }
    }

    setClock('timer', '2020-06-19');

    // Modal

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    let descriptionBtns = document.querySelectorAll('.description-btn');

    function showOverlay() {
        overlay.style.display = 'block';
        //this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    for (let i = 0; i < descriptionBtns.length; i++) {
        descriptionBtns[i].addEventListener('click', showOverlay);
    }

    more.addEventListener('click', showOverlay);

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        //more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

});
