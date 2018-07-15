var KEY_CODES = {
    KEY_UP: 38,
    // KEY_DOWN: 40,
}

function check() {
    var canvas = document.getElementsByClassName("runner-canvas")[0];
    var width = canvas.width;
    var height = canvas.height;

    /**
     * In case if canvas have width lower than 600 (default width value), 
     * we must take into account how much it's lower 
     * canvas height is always 150, so we adjust only width related calcs
     */
    var widthRatio = 1;
    if (width < 600) {
        widthRatio = width / 600.0;
    }

    var checkArea = {
        x: width * 0.10 / widthRatio,
        y: height * 0.70,
        sizex: 35 * widthRatio,
        sizey: 35 * widthRatio
    };

    var data = canvas.getContext('2d').getImageData(checkArea.x, checkArea.y, checkArea.sizex, checkArea.sizey).data;

    var count = data.reduce((acc, item) => acc += item, 0);

    // console.log(count);
    if (count > 100000) {
        // console.log("jump" + count);
        console.log("jump");
        pressKey(KEY_CODES.KEY_UP);
    }

    setTimeout(check, 33);
}

check();


function pressKey(keyCode) {
    //console.log(arguments);
    var e = new Event("keydown");
    //e.key="a";    // just enter the char you want to send 
    e.keyCode = keyCode;
    e.which = e.keyCode;
    e.altKey = false;
    e.ctrlKey = true;
    e.shiftKey = false;
    e.metaKey = false;
    e.bubbles = true;
    document.dispatchEvent(e);
}