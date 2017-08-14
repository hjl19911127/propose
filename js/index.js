(function () {
    var pages = document.querySelectorAll('.page'), i = 0;
    console.log(pages);
    function next() {
        pages[i - 1] && (pages[i - 1].style.display = 'none');
        pages[i] && (pages[i].style.display = 'block');
        i++;
    }
    function play() {
        if (pages[i]) next();
        setTimeout(function () {
            play();
        }, 3000)
    }
    play();
})()