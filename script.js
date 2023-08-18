function initialize(size) {
    document.getElementById('div-grid').style.display = "flex";
    for (i = 0; i < size; i++) {
        // row of divs
        var rowDiv = document.createElement('div');
        console.log("Row created");
        rowDiv.className = "row-div";
        document.getElementById('div-grid').appendChild(rowDiv);

        // column of divs
        rowDiv.style.flexDirection = "column";
        for (j = 0; j < size; j++) {
            var colDiv = document.createElement('div');
            console.log("Col created");
            colDiv.className = "col-div";
            colDiv.style.border = "solid 1px black";
            rowDiv.appendChild(colDiv);
        }

        // Make div some color on hover
        document.querySelectorAll('.col-div').forEach(div => {
            div.addEventListener('mouseover', (e) => {
                div.style.backgroundColor = "rgb(196,211,0)";
            });
        });

    }
}

initialize(50);

var reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    // Make div some color on hover
    document.querySelectorAll('.col-div').forEach(div => {
        div.style.backgroundColor = "white";
    });;
});