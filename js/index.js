(function () {
    var pages = document.querySelectorAll('.page'), i = 0;
    function next() {
        pages[i - 1] && (pages[i - 1].style.display = 'none');
        pages[i] && (pages[i].style.display = 'block');
        i++;
    }
    function play() {
        if (pages[i]) next();
        setTimeout(function () {
            play();
        }, 5000)
    }
    function prev() {
        pages[i] && (pages[i].style.display = 'none');
        pages[i - 1] && (pages[i - 1].style.display = 'block');
        i--;
    }
    window.addEventListener();
    play();
})()