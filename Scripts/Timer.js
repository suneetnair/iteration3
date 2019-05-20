// set the time count down
function resetTime(id, time) {
    var timer = null;
    var t = time;
    var m = 0;
    var s = 0;
    m = Math.floor(t / 60 % 60)
    m < 10 && (m = '0' + m);  //m is string, m 
    s = Math.floor(t % 60);
    function countDown() {
        s--;
        s < 10 && (s = '0' + s);
        if (s.length >= 3) {
            s = 59;
            m = "0" + (Number(m) - 1);
        }
        if (m.length >= 3) {
            m = '00';
            s = '00'
            clearInterval(timer)
        }
        document.getElementById(id).innerHTML = m + ':' + s;
    }

    timer = setInterval(countDown, 1000);
}