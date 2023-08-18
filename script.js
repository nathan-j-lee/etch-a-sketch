document.getElementById('div-grid').style.display = "flex";
boxes = 50;
for (i = 0; i < boxes; i++) {
    // row of divs
    var rowDiv = document.createElement('div');
    console.log("Row created");
    rowDiv.className = "row-div";
    document.getElementById('div-grid').appendChild(rowDiv);

    // column of divs
    rowDiv.style.flexDirection = "column";
    for (j = 0; j < boxes; j++) {
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
