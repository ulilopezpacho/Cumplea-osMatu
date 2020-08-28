function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

$("document").ready(() => {
    
    var actual = 0;
    var boton = $("#botonNumero");
    var frame = $("#imagenBingo");
    var salieron = $("#lblSalieron");
    var cantSalieron = $("#cantSalieron");
    var tablaSalieron = $("#tablaSalieron")

    var cant = 90;
    var queue = new Array(cant);

    for (let i = 0; i < cant; i++) queue[i] = i+1;
    queue = shuffle(queue);

    // Write table start

    let ap = "<table class='table'>";
    for (let i = 1; i <= cant; i++) {
        if ((i-1) % 10 == 0 && i-1 != 0) ap += "</tr>";
        if ((i-1) % 10 == 0 && i != cant) ap += "<tr>";
        let temp = i.toString()
        ap += '<td id="t' + temp + '">' + temp + '</td>'; 
    }
    ap += "</table>";
    tablaSalieron.append(ap);

    // Write table end

    boton.click(() => {
        if (!(actual < cant)) {
            salieron.html("¡Terminado!");
            return;
        }
        salieron.html(queue[actual]);
        let img = queue[actual] > 56? "images/1 (" + queue[actual].toString() + ").jpg" :
            "images/1 (" + queue[actual].toString() + ").JPG";
        
        $("#t" + queue[actual++].toString()).css("background-color", "lightgreen");
        frame.attr("src", img);
        cantSalieron.html("Salieron " + actual.toString() + ", restan " + (cant - actual).toString());
    })

});