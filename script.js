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
    var size = document.getElementById('grid-size').value;
    console.log(size);
    if (size <= 100 && size >= 1) {
        // Make div some color on hover
        document.querySelectorAll('.row-div').forEach(div => {
            div.remove();
        });
        initialize(size);
    }
    else {
        alert("Invalid number. Please input a number between 1-100");
    }
});