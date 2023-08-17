document.getElementById('div-grid').style.display = "flex";
boxes = 24;
for (i = 0; i < boxes; i++) {
    // row of divs
    var rowDiv = document.createElement('div');
    console.log("Row created");
    rowDiv.className = "row-div";
    rowDiv.style.border = "solid 1px lightgray";
    document.getElementById('div-grid').appendChild(rowDiv);

    // column of divs
    rowDiv.style.flexDirection = "column";
    for (j = 0; j < boxes; j++) {
        var colDiv = document.createElement('div');
        console.log("Col created");
        colDiv.className = "col-div";
        colDiv.style.border = "solid 1px lightgray";
        rowDiv.appendChild(colDiv);
    }

    // Make div red on hover
    document.querySelectorAll('.col-div').forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "red";
        });
    });

}
