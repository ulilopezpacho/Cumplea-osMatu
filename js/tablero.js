function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

function getImageTag (num) {

    let img = "";

    if (num > 56) img = "images/1 (" + num.toString() + ").jpg";
    else img = "images/1 (" + num.toString() + ").JPG";

    return '<img class="img-fluid" src="' + img + '"/>';
}

$("document").ready(() => {
    
    var tablero = $("#tablero");

    var cant = 90;
    var queue = new Array(cant);
    var t = new Array();

    for (let i = 0; i < cant; i++) queue[i] = i+1;
    queue = shuffle(queue);

    let put = '<div class="row">';
    let col = '<div class="d-flex align-items-center justify-content-center col col-sm-12 col-md-6 col-lg-4 col-xl-3" id="image">';
    let divEnd = '</div>';

    for (let i = 0; i < 12; i++) {
        t.push(queue[i]);
        put += col + getImageTag(queue[i]) + divEnd;
    }
    put += divEnd;
    tablero.html(put);
});