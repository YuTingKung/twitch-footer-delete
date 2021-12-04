console.log('Twitch-footer-delete active');

let time = 7000;
setTimeout(function(){
    console.log('Time', time/1000);
    let et = document.getElementById('twilight-sticky-footer-root');
    et.remove();
},time);